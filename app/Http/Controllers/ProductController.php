<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Retrieve all products
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // Retrieve 10 active products ordered by name
    public function getActiveProducts()
    {
        $products = Product::where('active', 1)
            ->orderBy('name')
            ->take(10)
            ->get();
        return response()->json($products);
    }

    // Retrieve the first product by price
    public function getProductByPrice($price)
    {
        $product = Product::where('price', $price)->first();
        if ($product) {
            return response()->json($product);
        }
        return response()->json(['message' => 'Product not found'], 404);
    }

    // Retrieve product by ID
    public function getProductById($id)
    {
        $product = Product::find($id);
        if ($product) {
            return response()->json($product);
        }
        return response()->json(['message' => 'Product not found'], 404);
    }

    // Create a new product
    public function create(Request $request)
    {
        // Validate incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'active' => 'required|boolean',
        ]);

        // Create product after validation
        $product = Product::create($validated);
        return response()->json($product, 201);
    }

    // Update or create a product
    public function updateOrCreate(Request $request)
    {
        // Validate incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'price' => 'nullable|numeric',
            'discounted' => 'nullable|boolean',
        ]);

        $product = Product::updateOrCreate(
            ['name' => $validated['name'], 'category_id' => $validated['category_id']],
            ['price' => $validated['price'] ?? null, 'discounted' => $validated['discounted'] ?? 0]
        );

        return response()->json($product);
    }

    // Update a product's name
    public function updateName($id, Request $request)
    {
        $product = Product::find($id);
        if ($product) {
            $product->name = $request->name;
            $product->save();
            return response()->json($product);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    // Delete a product
    public function delete($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['message' => 'Product deleted successfully']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    // Truncate the product table (delete all records)
    public function truncate()
    {
        Product::truncate();
        return response()->json(['message' => 'All products have been deleted']);
    }

    // Count active products
    public function countActiveProducts()
    {
        $count = Product::where('active', 1)->count();
        return response()->json(['active_products' => $count]);
    }

    // Find product with ID or handle missing product
    public function findOrFailProduct($id)
    {
        try {
            $product = Product::findOrFail($id);
            return response()->json($product);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    // Retrieve a product with fresh data
    public function refreshProduct($id)
    {
        $product = Product::find($id);
        if ($product) {
            $freshProduct = $product->fresh();
            return response()->json($freshProduct);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    // Chunk retrieval of products
    public function chunkProducts()
    {
        Product::chunk(200, function ($products) {
            // Process each chunk of products
            foreach ($products as $product) {
                // You can implement any logic here, like updating a field or sending notifications
            }
        });
        return response()->json(['message' => 'Products chunked and processed']);
    }
}
