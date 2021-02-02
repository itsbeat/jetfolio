<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
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


// auth api
Route::post("/login",[AuthController::class,"login"]);

// users api
Route::post("/users", [UserController::class, "create"]);
Route::get("/users", [UserController::class, "list"]);
Route::get("/users/{id}", [UserController::class, "getUser"]);
Route::put("/users/{id}", [UserController::class, "editUser"]);

// Upload image api
Route::post('/image/store', [ProjectController::class, "store"]);

//User profile api

Route::get("/users/profile/{id}",[UserController::class, "userInfo"]);
Route::post('/users/edit', [UserController::class, 'editInfo']);


// projects api
Route::get("/projects", [ProjectController::class, "getProjects"]);

Route::get("/projects/popular", [ProjectController::class, "getAllPopularProjects"]);
Route::get("/projects/popular/{num}", [ProjectController::class, "getPopularProjects"]);

Route::get("/projects/recent", [ProjectController::class, "getAllRecentProjects"]);
Route::get("/projects/recent/{num}", [ProjectController::class, "getRecentProjects"]);

Route::get("/projects/{id}", [ProjectController::class, "getProjectById"]);

Route::get("/projects/category/{categoryId}", [ProjectController::class, "getProjectsByCategory"]);


// authentication required api
Route::group(["middleware"=> "auth.api"],function(){
    Route::post("/logout",[AuthController::class,"logout"]);
});