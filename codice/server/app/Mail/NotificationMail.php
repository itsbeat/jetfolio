<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class NotificationMail extends Mailable
{
  use Queueable, SerializesModels;

  public $context,
    $title,
    $text,
    $button,
    $fieldList;

  private $type;

  private $titles = [
  ];

  private $texts = [
  ];

  private $buttons = [
  ];

  private $fieldLists = [
  ];

  private $subjects = [
  ];

  private $editableFields = [
  ];

  private function marshallButtonLink($button, $context) {
    $matches = [];
    $buttonLink = $button['link'];

    preg_match_all('/{(.*?)}/', $buttonLink, $matches);

    $rawMatches = $matches[0];
    $matchValues = $matches[1];

    foreach($matchValues as $index => $match) {
      if (isset($context[$match])) {
        $buttonLink = str_replace($rawMatches[$index], $context[$match], $buttonLink);
      }
    }

    $button['link'] = $buttonLink;

    return $button;
  }

  public function getType() {
    return $this->type;
  }

  public function __construct($context, $type) {
    $this->type = $type;

    foreach($this->editableFields as $field) {
      if (isset($context[$field])) {
        $this->{$field} = $context[$field];
      } else {
        $this->{$field} = $this->{$field . "s"}[$type];
      }
    }

    $this->context = $context;

    if (isset($this->buttons[$type])) {
      $this->button = $this->marshallButtonLink($this->buttons[$type], $context);
    }

    $this->fieldList = isset($this->fieldLists[$type])
      ? $this->fieldLists[$type]
      : [];
  }

  public function build() {
    return $this
      ->view('notification');
  }
}
