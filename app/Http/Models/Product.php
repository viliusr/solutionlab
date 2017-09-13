<?php 

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model {

    protected $table = 'products';

    protected $casts = [
        'id' => 'integer',
        'price' => 'double'
    ];
}