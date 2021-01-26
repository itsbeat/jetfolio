<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectContent extends Model
{
    use HasFactory;

    public function Project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }
}
