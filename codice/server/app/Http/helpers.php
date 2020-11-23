<?php

use App\Models\Availability;
use Illuminate\Support\Facades\Log;

function getSessionIdFromDate($sessionDate) {
  $hourToSessionId = [
    8 => 1,
    10 => 2,
    14 => 3,
    16 => 4,
  ];

  return $hourToSessionId[(int) explode(":", explode(" ", $sessionDate)[1])[0]];
}
