<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::table('products')->insert([
            'title' => 'Black coffee',
            'image' => 'https://cdn2.bigcommerce.com/server1400/a07be/products/2971/images/25859/RWA0279K-2-LR__56311.1501907419.220.290.jpg?c=2',
            'price' => 1.20,
            'description' => 'Very tasty coffee'
        ]);

        DB::table('products')->insert([
            'title' => 'Coffee with milk',
            'image' => 'https://cdn2.bigcommerce.com/server1400/a07be/products/3084/images/29410/RWA0302K-2-LR__18784.1501940995.220.290.jpg?c=2',
            'price' => 1.40,
            'description' => 'Very sweet coffee'
        ]);

        DB::table('products')->insert([
            'title' => 'Caffè mocha',
            'image' => 'https://cdn2.bigcommerce.com/server1400/a07be/products/2952/images/29650/RWA0273B-2-LR__24291.1502031985.220.290.jpg?c=2',
            'price' => 2.00,
            'description' => 'Chocolate-flavored coffee'
        ]);

        DB::table('products')->insert([
            'title' => 'Caffè Americano',
            'image' => 'https://cdn2.bigcommerce.com/server1400/a07be/products/2969/images/25853/RWA0279W-2-LR__02693.1501907263.220.290.jpg?c=2',
            'price' => 1.80,
            'description' => 'Espresso with hot water'
        ]);
    }
}
