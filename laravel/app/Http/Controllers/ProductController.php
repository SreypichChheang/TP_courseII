<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    // Get all products - GET /api/products
    public function getProducts(): JsonResponse
    {
        $products = Product::all();
        return response()->json([
            "success" => true,
            "message" => "Getting list of products",
            "data" => $products
        ], 200);
    }
    public function createProduct(Request $request): JsonResponse
    {

    $product = Product::create($request->all());

    return response()->json([
        'status' => 'success',
        'message' => 'Product created successfully',
        'data' => $product
    ], 201);
    dd("hello");
}

    // Get a specific product - GET /api/products/{productId}
    public function getProduct($productId): JsonResponse
    {
        $product = Product::find($productId);

        if (!$product) {
            return response()->json([
                "success" => false,
                "message" => "Product not found"
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "Getting product based on given productId",
            "data" => $product
        ], 200);
    }

    // Update a product - PATCH /api/products/{productId}
    public function updateProduct(Request $request, $productId): JsonResponse
    {
        $product = Product::find($productId);

        if (!$product) {
            return response()->json([
                "success" => false,
                "message" => "Product not found"
            ], 404);
        }

        $product->update($request->all());

        return response()->json([
            "success" => true,
            "message" => "Updating product based on given productId",
            "data" => $product
        ], 200);
    }

    // Delete a product - DELETE /api/products/{productId}
    public function deleteProduct($productId): JsonResponse
    {
        $product = Product::find($productId);

        if (!$product) {
            return response()->json([
                "success" => false,
                "message" => "Product not found"
            ], 404);
        }

        $product->delete();

        return response()->json([
            "success" => true,
            "message" => "Deleting product based on given productId"
        ], 200);
    }
}
