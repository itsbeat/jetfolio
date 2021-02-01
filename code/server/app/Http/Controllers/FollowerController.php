<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserFollower;
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
    public function postFollower(Request $request)
    {

        // get parameters from the request
        $user_id = $request -> get('user_id');
        $follower_id = $request -> get('follower_id');


        // check if follower_id is already in list of user's follow
        if(UserFollower::where('follower_id', '=', $follower_id)
            ->where('user_id', '=', $user_id)
            ->exists()) {
                return response()
                ->json([
                    "message" => "You\'re already a follower"
                ], 400);
        }

        //check if user_id and follower_id are already in a relationship
        if($user_id !== $follower_id) {

            //check if follower id exists as an effective user
            if (User::where('id', '=', $follower_id)->exists()) {
                
                $follow_entity = new UserFollower();

                $follow_entity->user_id = $user_id;
                $follow_entity->follower_id = $follower_id;

                $follow_entity->save(); 

                return response()
                ->json([
                    "entity" => $follow_entity,
                    "code"=>200,
                    "message" => "okay, i did it",
                ], 200);

            } else {
                return response()
                ->json([
                    "code" => 400,
                    "message" => "this user does not exists"
                ], 400);
            }
            
        }  else {
            return response()
                ->json([
                    "code" => 400,
                    "message" => '"solo"s are not allowed'
                ], 400);

        }
        
    }

    public function removeFollower(Request $request)
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

            return response()
                ->json([
                    "code" => 200,
                    "message" => 'okay, i did it'
                ], 200);
        } else {
            return response()
                ->json([
                    "code" => 200,
                    "message" => "You are already not a follower"
                ], 200);
        }

        
    }


}
