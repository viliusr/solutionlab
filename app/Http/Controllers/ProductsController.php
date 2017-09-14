<?php

namespace App\Http\Controllers;

use App\Http\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function getAll()
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function add(Request $request)
    {
        $response = ['status' => false];
        $productData = $request->all();
        $productAttrs = ['title', 'image', 'price', 'description'];

        // Check if all attributes were set
        if (count(array_intersect_key(array_flip($productAttrs), $productData)) === count($productAttrs)) {
            $newProduct = new Product();
            foreach ($productAttrs as $attr) {
                $newProduct->$attr = $productData[$attr];
            }

            // Check if product was saved in DB
            if ($newProduct->save()) {
                $response['status'] = true;
                $response['id'] = $newProduct->id;
            }
        }

        return response()->json($response);
    }

    public function remove(Request $request)
    {
        $response = ['status' => false];
        $productId = $request->input('id');

        if ($productId) {
            Product::where('id', '=', $productId)->delete();
            $response['status'] = true;
        }

        return response()->json($response);
    }
}