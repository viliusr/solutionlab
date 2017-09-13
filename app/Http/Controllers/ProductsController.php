<?php

namespace App\Http\Controllers;

use App\Http\Models\Product;

class ProductsController extends Controller
{
    public function getAll()
    {
        $products = Product::all();

        return response()->json(['status' => true, 'data' => $products]);
    }

    public function add()
    {
        return response()->json(['status' => true]);
    }

    public function remove()
    {
        return response()->json(['status' => true]);
    }
}