<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function getProjects(Request $Request) {
        $data = DB::table('projects')->get();
        return $data;
    }

    public function getPopularProjects(Request $Request, $num) {
        $data = DB::table('projects')
            ->order_by('like_count', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }

    public function getRecentProjects(Request $Request, $num) {
        $data = DB::table('projects')
            ->order_by('created_at', 'DESC')
            ->limit($num)
            ->get();
        return $data;
    }
}
