<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    /**
     * returns all projects
     */
    public function store(Request $request)
    {
        if ($request->get('image')) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            $image::make($request->get('image'))->save(public_path('images/') . $name);
        }

        $image = new Project();
        $image->image_url = $name;
        $image->save();

        return response()->json(['success' => 'You have successfully uploaded an image'], 200);
    }
    
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
