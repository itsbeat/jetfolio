<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function create(Request $request) {
        $userData = json_decode($request->getContent());

        $request->validate([
            "name" => "required",
            "email" => "required|unique:users",
            "password" => "required",
        ]);

        $user = new User();

        $password = $userData->password;

        $user->username = $userData->name;
        $user->email = $userData->email;
        $user->password = Hash::make($password);

        $user->save();

        return response()
                ->json([
                    "registered_user" => $user
                ], 200);

    }

    public function editUser(Request $request, $id) {
        $userData = json_decode($request->getContent());
        return $userData;
    }

    public function list() {
        return User::get();
    }

    public function getUser($id) {
        return User::find($id);
    }

    public function userInfo($id){
        $userInfo = User::with(["UserInfo"])->find($id);
        return $userInfo;
    }
}
