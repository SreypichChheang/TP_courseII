<?php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // Retrieve all categories
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    // Retrieve the first category by its name
    public function getCategoryByName($name)
    {
        $category = Category::where('name', $name)->first();
        return response()->json($category);
    }

    // Retrieve a category by ID
    public function getCategoryById($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    // Create a new category
    public function create(Request $request)
    {
        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        return response()->json($category, 201);
    }

    // Update a category's details
    public function update($id, Request $request)
    {
        $category = Category::find($id);
        if ($category) {
            $category->name = $request->name;
            $category->description = $request->description;
            $category->save();
            return response()->json($category);
        } else {
            return response()->json(['message' => 'Category not found'], 404);
        }
    }

    // Delete a category
    public function delete($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->delete();
            return response()->json(['message' => 'Category deleted successfully']);
        } else {
            return response()->json(['message' => 'Category not found'], 404);
        }
    }

    // Truncate the category table (delete all records)
    public function truncate()
    {
        Category::truncate();
        return response()->json(['message' => 'All categories have been deleted']);
    }

    // Find category with ID or handle missing category
    public function findOrFailCategory($id)
    {
        try {
            $category = Category::findOrFail($id);
            return response()->json($category);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Category not found'], 404);
        }
    }
}
