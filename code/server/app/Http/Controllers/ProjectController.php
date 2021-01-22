<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store(Request $request)
  {
      if($request->get('image'))
       {
          $image = $request->get('image');
          $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
          $image::make($request->get('image'))->save(public_path('images/').$name);
        }

       $image= new Project();
       $image->image_url = $name;
       $image->save();

       return response()->json(['success' => 'You have successfully uploaded an image'], 200);
  }
}
