<?php

namespace App\Mail;

use App\Mail\NotificationMail;
use Illuminate\Support\Facades\Mail as MainMail;
use Illuminate\Support\Facades\Log;

class MailWrapper extends \Illuminate\Support\Facades\Facade {
  public function __construct() {
  }

  public static function getFacadeAccessor() {
    return 'MailWrapper';
  }

  public static function send($to, NotificationMail $mail) {
    $prodEnv = env('PROD', false);
    $queueEnv = env('MAIL_QUEUE', false);
    $devAddress = env('DEV_MAIL', "ir.isacco.rossi@gmail.com");
    $dontSendMail = env('DONT_SENT_MAIL', false);

    if ($dontSendMail) {
      Log::info("Prevented mail from sending.");
      return;
    }

    try {
      if ($queueEnv) {
        $mailFinal = MainMail::to($prodEnv ? $to : $devAddress)->queue($mail);
      } else {
        $mailFinal = MainMail::to($prodEnv ? $to : $devAddress)->send($mail);
      }
    } catch (\Exception $e) {
      Log::warning("Mail not sent! Address: $devAddress. Type: " . $mail->getType());
    }
  }
}
