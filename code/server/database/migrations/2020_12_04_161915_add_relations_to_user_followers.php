<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToUserFollowers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_followers', function (Blueprint $table) {
            $table->bigInteger("user_id")->unsigned()->nullable();
            $table
                ->foreign("user_id")
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
            $table->dropForeign(["users_id"]);
            $table->dropColumn(["users_id"]);
        });
    }
}
