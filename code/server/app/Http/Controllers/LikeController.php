<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectLiker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class LikeController extends Controller
{
    /**
     * new like event
     */
    public function eventLike(Request $request, $id) {

        $dataProject = json_decode($request->getContent());

        $newEvent = new ProjectLiker();
        
        
    }
   
}
