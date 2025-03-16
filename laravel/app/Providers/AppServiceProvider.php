<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Order;
use App\Observers\ModelActivityObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        // Register the observer for the Order model
        Order::observe(ModelActivityObserver::class);
    }
}
