<?php

// tests/Feature/RegistrationTest.php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_allows_user_registration()
    {
        // Given the user provides valid registration data
        $response = $this->post('/register', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        // Then the user should be redirected to the login page with a success message
        $response->assertRedirect('/login');
        $this->assertDatabaseHas('users', [
            'email' => 'john@example.com',
        ]);
    }
}
