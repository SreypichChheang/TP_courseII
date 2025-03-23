<?php namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Order extends Model
{
    use HasFactory, SoftDeletes; // Enable Soft Deletes and Factory

    protected $table = 'orders'; // Define table name (optional)

    // Mass Assignment
    protected $fillable = ['customer_id', 'total_price', 'order_date'];

    // Ensure soft delete timestamp is handled correctly
    protected $dates = ['deleted_at', 'order_date'];

    // Relationships
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    // Mutator and Accessor for order_date in dd/mm/yyyy format
    protected function orderDate(): Attribute
    {
        return Attribute::make(
            // Mutator: Convert input format (d/m/Y) to MySQL format (Y-m-d)
            set: fn($value) => Carbon::createFromFormat('d/m/Y', $value)->format('Y-m-d'),

            // Accessor: Convert MySQL format (Y-m-d) back to d/m/Y
            get: fn($value) => Carbon::createFromFormat('Y-m-d', $value)->format('d/m/Y')
        );
    }
}
