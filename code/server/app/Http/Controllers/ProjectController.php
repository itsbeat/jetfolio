<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectContent;
use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use phpseclib\Crypt\Random;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $response = [];
        $imageData = $request->get("images");
        $project_info = json_decode(json_encode($request->get("project_info")));
       
        
        $project = new Project();
        $project->title = $project_info->titolo;
        $project->description = $project_info->descrizione;
        $project->user_id = $project_info->id;
        $project->like_count = random_int(1,500);
        $project->category_id = 1;
        $project->save();

        array_push($response,$project);


        foreach($imageData as $key => $image){
            if ($image) {
                $imageTokens = explode(",", $image);

                $imageInfo = $imageTokens[0];
                $imageContent = $imageTokens[1];

                $imageExtension = explode(";", explode("/", $imageInfo)[1])[0];

                $filePath ="cover_" . random_int(0,999999999) . "." . $imageExtension;

                Storage::disk("local")->put("public/images/$filePath", base64_decode($imageContent));

            }
            $projectC = new ProjectContent();
            $projectC->image_url = "images/$filePath";
            $projectC->order = $key+1;
            if ($key == 0){
               $projectC->is_thumbnail = 1;
            } else {
                $projectC->is_thumbnail = 0;
            }
            $projectC->project_id = $project->id;
            $projectC->save();
            array_push($response,$projectC);
        }
        
    }

    /**
     * returns some random projects
     */
    public function getRandomProjects(Request $Request, $max) {
        $data = Project::with("User","ProjectContent")
        ->random()
        ->limit($max)
        ->get();
        return $data;
    }

    /**
     * return all projects sorted by 'like counter'
     */
    public function getAllPopularProjects(Request $Request) {
        $data = Project::with("User","ProjectContent")
        ->get();
        return $data;
    }

    /**
     * return $num projects sorted by 'like counter' 
     */
    public function getPopularProjects(Request $Request, $num) {
        $data = Project::with("User","ProjectContent")
            ->orderBy('like_count', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    /**
     * return all projects sorted by creation date 
     */
    public function getAllRecentProjects(Request $Request,$num) {
        $data = Project::with("User","ProjectContent")
            ->orderBy('created_at', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    /**
     * return $num projects sorted by creation date 
     */
    public function getRecentProjects(Request $Request, $num) {
        $data = Project::with("User","ProjectContent")
            ->orderBy('created_at', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    /**
     * return project info based on $id
     */
    public function getProjectById(Request $Request, $id) {
        $data = Project::with("User","ProjectContent")
            ->where('user_id', '=', $id)
            ->get();

        return $data;
    }


    /**
     * return the 10 most popular projects by input $categoryId
     */
    public function getProjectsByCategory(Request $request, $categoryId) {
        $data = Project::with("User","ProjectContent")
            ->where('category_id', '=', $categoryId)
            ->orderBy('like_count', 'DESC')
            ->limit(10)
            ->get();
        
        return $data;
    }

}
