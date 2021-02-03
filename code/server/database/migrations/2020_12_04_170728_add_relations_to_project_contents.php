<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToProjectContents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_contents', function (Blueprint $table) {
            $table->bigInteger("project_id")->unsigned()->nullable();
            $table
                ->foreign("project_id")
                ->references("id")
                ->on("projects")
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
        Schema::table('project_contents', function (Blueprint $table) {
            $table->dropForeign(["project_id"]);
            $table->dropColumn(["project_id"]);
        });
    }
}
