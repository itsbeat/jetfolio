<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    //
    public function getFollowById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follow_count')
            ->where('id', '=', $id)
            ->get();

        return $data;
        
    }


    public function getFollowerById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follower_count')
            ->where('id', '=', $id)
            ->get();

        return $data;
        
    }

    public function getAddFollowById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follow_count')
            ->where('id', '=', $id)
            ->increment('follow_count');

        $data = DB::table('user_infos')
            ->select('follow_count')
            ->where('id', '=', $id)
            ->get(); 

        return $data;
        
    }


    public function getAddFollowerById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follower_count')
            ->where('id', '=', $id)
            ->increment('follower_count');

        $data = DB::table('user_infos')
            ->select('follower_count')
            ->where('id', '=', $id)
            ->get();   

        return $data;
        
    }

}

