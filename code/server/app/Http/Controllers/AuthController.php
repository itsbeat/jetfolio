<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;
use Laravel\Passport\Bridge\AccessToken;
use Laravel\Passport\Token;
use Laravel\Passport\PassportServiceProvider;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = request(["email","password"]);
         
        if (Auth::attempt($credentials)){
            
            $user = Auth::user();
            $token = $user->createToken("Personal Access Token")->accessToken;

            Log::info("Nuovo token: " . $token);

            return response()
                ->json([
                    "logged_in_user" => $user,
                    "token" => $token,
                ], 200)
                ->cookie(
                    "sessionToken", //nome
                    $token,         //variabile
                    1440,           //durata
                    false,          //path  
                    "http://localhost:8000",          //domain    
                    false,          //secure
                    true            //httpOnly

                );
        }
        return response()->json([
            "error" => "invalid-credentials"
        ], 422);
    }

    public function logout (Request $request){ 
        $request->user()->token()->revoke();
        $cookie = Cookie::forget('sessionToken');
        return response()
            ->json([
                "message" => "logout_ok"
            ], 200)
            ->withCookie($cookie);
    }
        
    
}
