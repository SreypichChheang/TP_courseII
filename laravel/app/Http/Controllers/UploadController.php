<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the incoming file
        $request->validate([
            'document' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

        // Store file locally on the 'public' disk (storage/app/public/uploads)
        $path = $request->file('document')->store('uploads', 'public');

        // Generate public URL for the stored file
        $publicUrl = Storage::disk('public')->url($path);

        // Store the file on MinIO disk (e.g., configured in config/filesystems.php)
        $minioPath = $request->file('document')->store('uploads', 'minio');

        // Get the MinIO URL via Laravel Storage
        $minioUrl = Storage::disk('minio')->url($minioPath);

        // Return JSON response with both URLs
        return response()->json([
            'path' => $path,
            'public_url' => $publicUrl,
            'minio_url' => $minioUrl,
        ], 200);
    }
}
