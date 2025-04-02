<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Category;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that we can access the list of all categories.
     */
    public function test_if_we_can_access_get_all_categories_api(): void
    {
        $response = $this->get('/api/categories');

        // Adjust the response to match the actual message
        $response->assertStatus(200)->assertJsonFragment(["message" => "Getting list of categories"]);
    }


    public function test_if_we_can_delete_category(): void
{
    // First, create a category to be deleted
    $category = Category::factory()->create();

    $response = $this->deleteJson('/api/categories/' . $category->id);

    $response->assertStatus(200)
             ->assertJson([
                 'message' => 'Deleting category based on given categoryId',
             ]);

    // Ensure the category was deleted
    $this->assertDatabaseMissing('categories', ['id' => $category->id]);
}

}
