<?php

use Illuminate\Database\Seeder;

class TestDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'title' => 'Black coffee',
            'image' => 'https://cdn2.bigcommerce.com/server1400/a07be/products/2971/images/25859/RWA0279K-2-LR__56311.1501907419.220.290.jpg?c=2',
            'price' => 1.20,
            'description' => 'Very tasty coffee'
        ]);
    }
}
