<?php

namespace App\Http\Controllers;

use App\Models\ProjectLiker;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * NOT TO USE IN PRODUCTION
     * It returns whole like table
     */
    public function getLikeTable(Request $request)
    {
        $data = ProjectLiker::get();
        return $data;
    }

    /**
     * add like to a project
     * needs authentication
     */
    public function postLike(Request $request, $project_id)
    {
        # code...
    }

    /**
     * remove like from a project
     * needs authentication
     */
    public function deleteLike(Request $request, $project_id)
    {
        # code...
    }

    /**
     * return object with project_id[]
     */
    public function getUsersLikes(Request $request)
    {
        # code...
    }
}
