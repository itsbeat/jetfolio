<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title></title>
    <style>
    .ExternalClass {width: 100%;}
    html, body {
      padding: 0;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    h1 {
      margin: 0;
    }

    .main-content {
      max-width: 480px;
      width: 50%;
      padding: 30px;
    }

    .max-width {
      max-width: 480px;
      width: 50%;
    }

    .bg {
      border-radius: 4px;
      background-color: #f6f5f5;
      box-shadow: 0 0 16px #888;
    }

    table.margin-top {
      margin-top: 40px;
    }

    td.margin-top {
      padding-top: 30px;
    }

    .header {
      height: 80px;
      width: 100%;
    }

    .main-content p {
      font-style: italic;
      font-size: 16px;
      line-height: 25px;
      margin: 0;
      margin-bottom: 25px;
    }

    .credentials-cont {
      margin-bottom: 15px;
      font-size: 16px;
    }

    .logo-lettering {
      font-size: 25px;
      color: #24A366;
      margin: 35px 0;
    }

    .logo-lettering span {
      color: #0D5157;
      font-weight: bold;
    }

    .tx-bold {
      font-weight: bold;
    }

    .tx-green {
      color: #0D5157;
    }

    .tx-red {
      color: #c0392b;
    }

    .tx-center {
      text-align: center;
    }

    .link {
      margin-top: 25px;
      color: #888;
    }

    .btn {
      font-size: 12px;
      margin: 0 auto;
      display: block;
      background-color: #59bebb;
      color: white;
      text-decoration: none;
      width: 40%;
      border-radius: 15px;
      padding: 8px 10px;
    }

    .logo {
      margin-top: 20px;
      display: flex;
      width: 100%;
      height: 70px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    h1 {
      color: #59bebb;
      letter-spacing: 5px;
      font-weight: normal;
    }
    </style>
  </head>
  <body>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      class="margin-top max-width"
      align="center">
      <tr>
        <td class="tx-center">
          <h1>{{ strtoupper($title) }}</h1>
        </td>
      </tr>
    </table>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      class="main-content bg margin-top">
      <tr>
        <td>
          <p>{!! nl2br(e($text)) !!}</p>
        </td>
      </tr>
      <tr>
        <td>
          <table
            style="border-spacing: 0 10px"
            cellpadding="0"
            cellspacing="0"
            border="0">
            @foreach ($fieldList as $field)
            <tr>
              <td style="width: 30%; vertical-align: top">
                <span class="tx-bold tx-green">{{ $field['text'] }}:</span>
              </td>
              <td
                style="padding-left: 10px"
                class="credentials-cont">
                {{ isset($context[$field['key']]) ? $context[$field['key']] : "" }}
              </td>
            </tr>
            @endforeach
          </table>
        </td>
      </tr>
      @if (isset($customFields))
      @foreach($customFields as $customField)
      <tr>
        <td class="{{ $customField['class'] }} margin-top">
          {!! nl2br($customField['text']) !!}
        </td>
      </tr>
      @endforeach
      @endif
      @if (isset($button['link']))
      <tr>
        <td
          align="center"
          class="tx-center margin-top">
          <a
            style="color: white!important"
            class="btn"
            href="{{ $button['link']}}">
            {{ strtoupper($button['text']) }}
          </a>
          </div>
        </td>
      </tr>
      @endif
    </table>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      class="main-content">
      <tr>
        <td class="tx-center">
          <span class="logo">
          </span>
        </td>
      </tr>
    </table>
  </body>
</html>
