<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToProjectLikers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_likers', function (Blueprint $table) {
            $table->bigInteger("liker_id")->unsigned()->nullable();
            $table
                ->foreign("liker_id")
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
        Schema::table('project_likers', function (Blueprint $table) {
            $table->dropForeign(["liker_id"]);
            $table->dropColumn(["liker_id"]);
        });
    }
}
