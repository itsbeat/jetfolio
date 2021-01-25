<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function User()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function Category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function ProjectLiker()
    {
        return $this->hasMany(ProjectLiker::class);
    }
    public function ProjectContent()
    {
        return $this->hasMany(ProjectContent::class);
    }
}
