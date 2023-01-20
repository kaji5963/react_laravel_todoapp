<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//reactでのルーティング時にLaravelのルーティングが優先されるため、reactの全てのページでindexが読み込まれるように設定
Route::get('{all}', function () {
    return view('index');
})->where(['all' => '.*']);
