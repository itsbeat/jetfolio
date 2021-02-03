<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $imageData = $request->get("images");
        $project_info = json_decode(json_encode($request->get("project_info")));
       
        
        $project = new Project();
        $project->title = $project_info->titolo;
        $project->description = $project_info->descrizione;
        $project->user_id = $project_info->id;
        $project->like_count = 0;
        $project->category_id = 1;
        $project->save();

        foreach($imageData as $image){
            if ($image) {
                $imageTokens = explode(",", $image);

                $imageInfo = $imageTokens[0];
                $imageContent = $imageTokens[1];

                $imageExtension = explode(";", explode("/", $imageInfo)[1])[0];

                $filePath ="cover_" . time() . "." . $imageExtension;

                Storage::disk("local")->put("public/images/$filePath", base64_decode($imageContent));
            }
        }
        }

    /**
     * returns all projects
     */
    public function getProjects(Request $Request) {
        $data = DB::table('projects')->limit(9)->get();
        return $data;
    }

    /**
     * return all projects sorted by 'like counter'
     */
    public function getAllPopularProjects(Request $Request) {
        $data = DB::table('projects')->get();
        return $data;
    }

    /**
     * return $num projects sorted by 'like counter' 
     */
    public function getPopularProjects(Request $Request, $num) {
        $data = DB::table('projects')
            ->orderBy('like_count', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    /**
     * return all projects sorted by creation date 
     */
    public function getAllRecentProjects(Request $Request,$num) {
        $data = DB::table('projects')
            ->orderBy('created_at', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    /**
     * return $num projects sorted by creation date 
     */
    public function getRecentProjects(Request $Request, $num) {
        $data = DB::table('projects')
            ->orderBy('created_at', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    /**
     * return project info based on $id
     */
    public function getProjectyId(Request $Request, $id) {
        $data = DB::table('projects')
            ->where('id', '=', $id)
            ->get();

        return $data;
    }


    /**
     * return the 10 most popular projects by input $categoryId
     */
    public function getProjectsByCategory(Request $request, $categoryId) {
        $data = DB::table('projects')
            ->where('category_id', '=', $categoryId)
            ->orderBy('like_count', 'DESC')
            ->limit(10)
            ->get();
        
        return $data;
    }
}
