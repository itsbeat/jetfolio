<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller {
  public function __construct() {
    $this->client = DB::table('oauth_clients')
         ->where("password_client", 1)
         ->first();
  }

  public function getAuthUser(Request $request) {
    $user = $request->user();
    return $user;
  }

  public function login(Request $request) {
    $isFromWeb = $request->source ? $request->source == 'web' : false;

    $passportData = [
      "username" => $request->username,
      "password" => $request->password,
      "client_id" => $this->client->id,
      "client_secret" => $this->client->secret,
      "grant_type" => "password"
    ];

    $loginField = "email";
    $headers = apache_request_headers();

    $loginRequest = Request::create("/oauth/token", "POST", $passportData);
    $response = app()->handle($loginRequest);

    switch ($response->getStatusCode()) {
      case 500:
        return $response;
        break;

      case 401:
        return response("wrong_credentials", 401);
        break;

      case 200:
        $tokens = json_decode($response->getContent());

        $user = User::where($loginField, $request->username)
           ->with([
             'role'
           ])
           ->first();

        return response([
          "user" => $user,
          "access_token" => $tokens->access_token,
        ], 200);
    }
  }

  public function resetPassword(Request $request) {
    $email = $request->email;

    if (!$email) {
      return response([
        "code" => "username_not_sent"
      ], 500);
    }

    $user = User::where("matricola", $email)->first();

    if (!$user) {
      return response([
          "code" => "user_not_found"
        ], 404);
    }

    // Change password for this user

    // Generate new alphanumeric password
    $newRandomPassword = $this->generateRandomString(16);

    $user->password = Hash::make($newRandomPassword);

    // Revoke all users tokens
    foreach ($user->tokens as $token) {
      $token->revoke();
    }

    // The user is set as not active so that
    // he can change the password
    $user->active = false;

    $user->save();

    $context = [
      "username" => $user->matricola,
      "password" => $newRandomPassword
    ];

    $mail = new NotificationMail($context, "recover_password");

    MailWrapper::send($user->email, $mail);

    // Send mail with new credentials
    return response($newRandomPassword, 200);
  }

  private function generateRandomString($length = 10) {
    $characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
  }

  public function uploadUserAvatar(Request $request) {
    try {
      if (!$request->hasFile("avatar")) {
        return response("NO_AVATAR", 200);
      }

      if (!isset($request->userId)) {
        throw new Exception("missing_user_id");
      }

      $userId = $request->userId;

      $image = $request->file('avatar');

      $fileName =
        $userId . "_" . time() . '.' . $image->getClientOriginalExtension();

      //dd();
      Storage::put(
        'avatars/' . $fileName,
        file_get_contents($image)
      );

      $user = User::find($request->userId);

      $user->avatar = $fileName;

      $user->save();

      return response($fileName, 201);
    } catch (Exception $e) {
      return response( [
        "error" => $e->getMessage(),
        "line" => $e->getLine(),
        "file" => $e->getFile(),
        "trace" => $e->getTrace()
      ],
        500);
    }
  }
}
