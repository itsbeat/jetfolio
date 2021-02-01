<?php

namespace Database\Seeders;

use App\Models\UserInfo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{



    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        function ranString($length = 10) {
            return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ,.:!', ceil($length/strlen($x)) )),1,$length);
        }

        // for ($i=0; $i < 1000; $i++) { 

        //     DB::table('projects')->insert(
        //         array(
        //             'title' => ranString(25),
        //             'description' => ranString(200),
        //             'like_count' => random_int(0, 1000),
                    
        //         )
        //     );
        // }

        for ($i=0; $i < 1000; $i++) { 

            $new = new UserInfo();

            $new->prj_count = random_int(1, 100);
            $new->phone = random_int(1000000000, 4999999999);
            $new->biography = ranString(255);
            $new->follower_count = random_int(1, 100);
            $new->follow_count = random_int(1, 100);
            $new->image_url = ranString(13);

            $new->save(); 
        }
    }
}
