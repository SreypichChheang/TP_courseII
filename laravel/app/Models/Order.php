<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Order extends Model
{
    use SoftDeletes;  // Enable soft deletes
    use HasFactory;
    protected $table = 'orders'; // Define the table name (optional if it matches the default)
    // Mass Assignment
    protected $fillable = ['customer_id', 'status', 'total_amount', 'order_date'];

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

    // Mutator and Accessor for order_date
    protected function orderDate(): Attribute
    {
        return Attribute::make(
            // Mutator: Convert input format to MySQL format before saving
            set: fn($value) => Carbon::createFromFormat('d/m/Y H:i:s', $value)->format('Y-m-d H:i:s'),

            // Accessor: Convert database format to user-friendly format when retrieving
            get: fn($value) => Carbon::parse($value)->format('d/m/Y H:i:s')
        );
    }
}
