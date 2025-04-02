<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test if we can get all products.
     */
    public function test_if_we_can_get_all_products(): void
    {
        Product::factory()->count(3)->create();

        $response = $this->getJson('/api/products');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'message',
                'data' => [
                    '*' => ['id', 'name', 'price', 'description', 'created_at', 'updated_at']
                ]
            ]);
    }

    /**
     * Test if we can get a single product.
     */
    public function test_if_we_can_get_single_product(): void
    {
        $product = Product::factory()->create();

        $response = $this->getJson('/api/products/' . $product->id);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Getting product based on given productId',
                'data' => [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'description' => $product->description,
                ],
            ]);
    }

    /**
     * Test if we can delete a product.
     */
    public function test_if_we_can_delete_product(): void
    {
        $product = Product::factory()->create();

        $response = $this->deleteJson('/api/products/' . $product->id);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Deleting product based on given productId',
            ]);

        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }
}
