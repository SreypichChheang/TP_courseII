<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 5, 100),
            'description' => $this->faker->sentence(),
            'category_id' => Category::factory(), // Ensure a related category exists
        ];
    }
}
