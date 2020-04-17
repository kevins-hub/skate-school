<?php
require_once "Mail.php";

$from = "kevinliu428@gmail.com";
$to = 'kevinliu428@gmail.com';

$host = "ssl://smtp.gmail.com";
$port = "465";
$username = 'kevinliu428@gmail.com';
$password = 'K3v1nl1uflip428';

$subject = "test";
$body = "test";

$headers = array ('From' => $from, 'To' => $to,'Subject' => $subject);
$smtp = Mail::factory('smtp',
  array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $username,
    'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
  echo($mail->getMessage());
} else {
  echo("Message successfully sent!\n");
}
?>