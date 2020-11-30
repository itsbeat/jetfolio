<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post("/login",[AuthController::class,"login"]);
Route::post("/users", [UserController::class, "create"]);
Route::get("/users", [UserController::class, "list"]);
Route::get("/users/{id}", [UserController::class, "getUser"]);
Route::put("/users/{id}", [UserController::class, "editUser"]);

Route::group(["middleware"=> "auth.api"],function(){
    Route::post("/logout",[AuthController::class,"logout"]);
    Route::get("/surveys", [SurveyController::class, "list"]);
    Route::post("/surveys", [SurveyController::class, "create"]);
});

