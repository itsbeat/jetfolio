<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToUserFollowers2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_followers', function (Blueprint $table) {
            $table->bigInteger("follower_id")->unsigned()->nullable();
            $table
                ->foreign("follower_id")
                ->references("id")
                ->on("users")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_followers', function (Blueprint $table) {
            $table->dropForeign(["follower_id"]);
            $table->dropColumn(["follower_id"]);
        });
    }
}
