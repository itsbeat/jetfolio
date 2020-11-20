<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

use Illuminate\Support\Facades\Log;

class Handler extends ExceptionHandler
{
  /**
   * A list of the exception types that are not reported.
   *
   * @var array
   */
  protected $dontReport = [
    //
  ];

  /**
   * A list of the inputs that are never flashed for validation exceptions.
   *
   * @var array
   */
  protected $dontFlash = [
    'password',
    'password_confirmation',
  ];

  /**
   * Report or log an exception.
   *
   * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
   *
   * @param  \Exception  $exception
   * @return void
   */
  public function report(Exception $e)
  {
    $errorCode = $e->getCode();
    $errorMessage = $e->getMessage();
    $errorFile = isset($e->getTrace()[0]['file']) ? $e->getTrace()[0]['file'] : "no-file";
    $errorLine = isset($e->getTrace()[0]['line']) ? $e->getTrace()[0]['line'] : "no-line";

    Log::error("[$errorCode] '$errorMessage' FILE: $errorFile LINE: $errorLine");
  }

  /**
   * Render an exception into an HTTP response.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Exception  $exception
   * @return \Illuminate\Http\Response
   */
  public function render($request, Exception $exception)
  {
    return parent::render($request, $exception);
  }
}
