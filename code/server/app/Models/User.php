<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function UserInfo()
    {
        return $this->hasOne(UserInfo::class);
    }
    public function UserFollower()
    {
        return $this->hasMany(UserFollower::class);
    }
    public function UserFollower2()
    {
        return $this->hasMany(UserFollower::class);
    }
    public function Project()
    {
        return $this->hasMany(Project::class);
    }
    public function ProjectLiker()
    {
        return $this->hasMany(ProjectLiker::class);
    }

}
