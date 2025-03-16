<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Order extends Model
{
    protected $fillable = ['customer_id', 'total_price', 'order_date'];

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
    public function getOrderDateAttribute($value)
{
    return Carbon::parse($value)->format('d/m/Y H:i:s');
}

public function setOrderDateAttribute($value)
{
    $this->attributes['order_date'] = Carbon::createFromFormat('d/m/Y H:i:s', $value)->toDateTimeString();
}
}
