<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    // stampa a video il numero dei follow
    public function getFollowById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follow_count')
            ->where('id', '=', $id)
            ->get();

        return $data;
        
    }


    //stampa a viedo il numero dei follower
    public function getFollowerById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follower_count')
            ->where('id', '=', $id)
            ->get();

        return $data;
        
    }


    //incrementa e stampa il numero dei follow    
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


    //incrementa e stampa il numero dei follower
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


    //decrementa e stampa il numero dei follow    
    public function getRmvFollowById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follow_count')
            ->where('id', '=', $id)
            ->decrement('follow_count');

        $data = DB::table('user_infos')
            ->select('follow_count')
            ->where('id', '=', $id)
            ->get(); 

        return $data;
        
    }


    //decrementa e stampa il numero dei follower
    public function getRmvFollowerById(Request $Request, $id){
        $data = DB::table('user_infos')
            ->select('follower_count')
            ->where('id', '=', $id)
            ->decrement('follower_count');

        $data = DB::table('user_infos')
            ->select('follower_count')
            ->where('id', '=', $id)
            ->get();   

        return $data;
        
    }
}

