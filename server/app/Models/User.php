<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Support\Facades\Log;

use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, Notifiable, SoftDeletes;

  public $visible = [
    "id",
    "name",
    "surname",
    "email",
    "role",
  ];

  protected $fillable = [
    "id",
    "name",
    "surname",
    "email",
    "role_id",
  ];

  protected $appends = [
    "full_name"
  ];

  private function userByRole($query, $roleCode) {
    return $query
      ->join("roles", "roles.id", "users.role_id")
      ->select("users.*", "roles.code")
      ->distinct("users.id")
      ->where("roles.code", $roleCode);
  }

  public function role() {
    return $this->belongsTo(Role::class, "role_id");
  }

  public function getRole() {
    return $this->role()->first()->code;
  }

  public function getFullNameAttribute() {
    return ucfirst($this->name) . " " . ucfirst($this->surname);
  }
}
