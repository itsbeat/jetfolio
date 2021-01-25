<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectLiker extends Model
{
    use HasFactory;

    public function User()
    {
        return $this->belongsTo(User::class, 'liker_id');
    }
    public function Project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }
}
