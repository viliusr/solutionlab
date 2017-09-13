<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return 'Back-end is ready: ' . $app->version();
});
$app->get('/app', function () {
    return view('app');
});
$app->get('/products/get/all',	['uses' => 'ProductsController@getAll']);
$app->post('/products/add',		['uses' => 'ProductsController@add']);
$app->post('/products/remove',	['uses' => 'ProductsController@remove']);
