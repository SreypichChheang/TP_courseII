<?php


namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductUnitTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test if a product can be updated.
     */
    public function test_if_a_product_can_be_updated(): void
    {
        $product = Product::factory()->create([
            'name' => 'Coffee',
            'price' => 5.99,
        ]);

        $product->update(['price' => 6.99]);

        $this->assertDatabaseHas('products', ['id' => $product->id, 'price' => 6.99]);
    }

    /**
     * Test if a product can be deleted.
     */
    public function test_if_a_product_can_be_deleted(): void
    {
        $product = Product::factory()->create();

        $product->delete();

        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }


}
