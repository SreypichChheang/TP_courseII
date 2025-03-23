<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            $table->string('model');
            $table->unsignedBigInteger('model_id');
            $table->string('action');
            $table->text('changes');
            $table->timestamps(); // Ensure timestamps exist
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};
