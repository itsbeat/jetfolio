<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserFollower;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FollowerController extends Controller
{
    /**
     * get whole follower table
     */
    public function getAllFollowers(Request $request)
    {
        $data = UserFollower::get();
        return $data;
    }

    /**
     * get user's followers
     */
    public function getAllFollowersById(Request $request, $id)
    {
        $res = UserFollower::where('follower_id', '=', $id)->get(['user_id']);

        $data=[
            'follower_list'=>$res,
            'count'=>count($res)
        ];

        return response()
        ->json([
            "code" => 200,
            "message" => "OK",
            "followers" => $data
        ], 200);
    }

    /**
     * create a new follow
     */
    public function postFollow(Request $request)
    {

        // get parameters from the request
        $user_id = $request -> get('user_id');
        $follower_id = $request -> get('follower_id');


        // check if follower_id is already in list of user's follow
        if(UserFollower::where('follower_id', '=', $follower_id)
            ->where('user_id', '=', $user_id)
            ->exists()) {
                $exit = 4;
        } else {

            //check if user_id and follower_id are already in a relationship
            if($user_id !== $follower_id) {

                //check if follower id exists as an effective user
                if (User::where('id', '=', $follower_id)->exists()) {
                    
                    $follow_entity = new UserFollower();

                    $follow_entity->user_id = $user_id;
                    $follow_entity->follower_id = $follower_id;

                    $follow_entity->save(); 

                    $exit = 1;
                } else {
                    $exit = 2;
                }
                
            }  else {
                $exit = 3;
            }
        }

        /**
         * update follower info list
         */

        $follower_count  = UserFollower::where('user_id', '=', $user_id)->get()->count();
        $follow_count = UserFollower::where('follower_id', '=', $user_id)->get()->count();

        $user_info = UserInfo::where('user_id', '=', $user_id)->get();
        $follower_info = UserInfo::where('user_id', '=', $follower_id)->get();

        try {
            $user_info->follower_count = $follower_count;
            $user_info->follow_count = $follow_count;
            $user_info->save();
        } catch (\Throwable $th) {
            //throw $th;
        }


        try {
            $follower_info->follower_count = $follower_count;
            $follower_info->follow_count = $follow_count;
            $follower_info->save();
        } catch (\Throwable $th) {
            //throw $th;
        }

        
        switch($exit) {
            case 1: return response()
            ->json([
                "entity" => $follow_entity,
                "code"=>200,
                "message" => "okay, i did it"
            ], 200);

            case 2: return response()
            ->json([
                "code" => 400,
                "message" => "this user does not exists"
            ], 400);

            case 3: return response()
            ->json([
                "code" => 400,
                "message" => '"solo"s are not allowed'
            ], 400);

            case 4: return response()
                ->json([
                    "message" => "You\'re already a follower"
                ], 400);
        }
    }

    /**
     * removes a follow
     */
    public function removeFollow(Request $request)
    {
        // get parameters from the request
        $user_id = $request -> get('user_id');
        $follower_id = $request -> get('follower_id');

        if (
            UserFollower::where('user_id', '=', $user_id)
                -> where('follower_id', '=', $follower_id)
                -> exists()
        ) {
            UserFollower::where('user_id', '=', $user_id)
            -> where('follower_id', '=', $follower_id)
            ->delete();

            /**
             * update follower info list
             */

            $follower_count  = UserFollower::where('user_id', '=', $user_id)->get()->count();
            $follow_count = UserFollower::where('follower_id', '=', $user_id)->get()->count();

            $user_info = UserInfo::where('user_id', '=', $user_id)->get();

            if($user_info)
            {
                $user_info->follower_count->$follower_count;
                $user_info->follow_count->$follow_count;
                $user_info->save();
                $update = 'complete';
            } else {
                $update='incomplete';
            }

            
            return response()
                ->json([
                    "code" => 200,
                    "message" => 'okay, i did it',
                    "update" => $update
                ], 200);
        } else {
            $update = 'incomplete';

            return response()
                ->json([
                    "code" => 200,
                    "message" => "You are already not a follower",
                    "update" => $update
                ], 200);
        }

        
    }

}
