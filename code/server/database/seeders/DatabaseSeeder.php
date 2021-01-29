<?php

namespace Database\Seeders;

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

         for ($i=0; $i < 10000; $i++) { 

             DB::table('projects')->insert(
                 array(
                     'title' => ranString(25),
                     'description' => ranString(200),
                     'like_count' => random_int(0, 1000),
                    
                 )
             );
         }
            
        for($i = 0; $i < 50; $i++) {

            DB::table('users')->insert(
                array(
                    'username' => ranString(8),
                    'password'=> ranString(10),
                    'email' => ranString(10) . '@gmail.com'
                )
                );
        }
    }
}
