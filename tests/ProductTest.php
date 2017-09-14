<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ProductTest extends TestCase
{
    use DatabaseMigrations;

    public function testGetAllProducts()
    {
        $url = '/products/get/all';

        $this->get($url)
             ->seeJson([
                'title' => 'Black coffee',
             ]);
    }

    public function testAddProduct()
    {
        $url = 'products/add';
        $data = [
            'title' => 'Coffee added',
            'description' => 'Coffee added description',
            'price' => 1.50,
            'image' => 'http://image.jpg'
        ];

        $this->post($url, $data)
            ->seeJson([
                'status' => true,
            ]);

        $this->seeInDatabase('products', ['title' => 'Coffee added']);
    }

    public function testRemoveProduct()
    {
        $url = 'products/remove';
        $productId = 1;
        $data = [
            'id' => $productId
        ];

        $this->seeInDatabase('products', ['id' => $productId]);

        $this->post($url, $data)
            ->seeJson([
                'status' => true,
            ]);

        $this->notSeeInDatabase('products', ['id' => $productId]);
    }
}