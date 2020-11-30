<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class AddAuthHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */



    public function handle(Request $request, Closure $next)
    {   
        Log::info($request->hasCookie("sessionToken"));


        if ($request->hasCookie("sessionToken")){
            $token = Cookie::get("sessionToken");
            Log::info($token);
            $request ->headers->add([
                "Authorization" => "Bearer ".$token 
            ]);
        }
        return $next($request);
    }
}
