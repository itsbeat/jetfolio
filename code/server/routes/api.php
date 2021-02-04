<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\LikeController;
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



// authentication required api
Route::group(["middleware"=> "auth.api"],function(){
    Route::post("/logout",[AuthController::class,"logout"]);

    // users api
    Route::post("/users", [UserController::class, "create"]);
    Route::get("/users", [UserController::class, "list"]);
    Route::get("/users/{id}", [UserController::class, "getUser"]);
    Route::put("/users/{id}", [UserController::class, "editUser"]);

    // Upload image api
    Route::post('/image/store', [ProjectController::class, "store"]);

    
    // Upload image api
    Route::post("/project/upload", [ProjectController::class, "store"]);

    //User profile api

    Route::get("/users/profile/{id}",[UserController::class, "userInfo"]);
    Route::post("/users/edit", [UserController::class, "editInfo"]);


    // projects api
    Route::get("/projects/{num}", [ProjectController::class, "getProjects"]);

    Route::get("/projects/popular", [ProjectController::class, "getAllPopularProjects"]);
    Route::get("/projects/popular/{num}", [ProjectController::class, "getPopularProjects"]);

    Route::get("/projects/recent", [ProjectController::class, "getAllRecentProjects"]);
    Route::get("/projects/recent/{num}", [ProjectController::class, "getRecentProjects"]);
    Route::get("/projects/{id}", [ProjectController::class, "getProjectById"]);
    Route::get("/projects/category/{categoryId}", [ProjectController::class, "getProjectsByCategory"]);


    // follower api

    Route::get("/followers", [FollowerController::class, "getAllFollowers"]);
    Route::get("/followers/{id}", [FollowerController::class, "getAllFollowersById"]);
    Route::post("/follow", [FollowerController::class, "postFollow"]);
    Route::get("/unfollow", [FollowerController::class, "removeFollow"]);


    // like's api

    Route::get("/likes", [LikeController::class, "getLikeTable"]);
    Route::post("/like/{project_id}", [LikeController::class, "postLike"]);
    Route::delete("/like/{project_id}", [LikeController::class, "deleteLike"]);
    Route::get("/likes/user",  [LikeController::class, "getUserLikes"]);

});

