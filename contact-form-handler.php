<?php
require_once "Mail.php";

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$visitor_email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];
$type = $_POST['lesson-type'];

$from = "keepskatingskateschool@gmail.com";
$to = "kevinliu428@gmail.com";
$host = "ssl://smtp.gmail.com";
$port = "465";
$username = 'keepskatingskateschool@gmail.com';
$password = 'K3v1nl1uflip428';

$email_subject = "New Form Submission";
$email_body = "User Name: $fname.\n".
                "User Email: $visitor_email.\n".
                    "User Phone Number: $number.\n".
                        "User lesson preference: $type.\n".
                            "User Message: $message.\n";


$headers = array ('From' => $from, 'To' => $to,'Subject' => $email_subject);
$smtp = Mail::factory('smtp',
array('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $username,
    'password' => $password));


$mail = $smtp -> send($to, $headers, $email_body);



if (PEAR::isError($mail)) {
    echo($mail->getMessage());
    } else {
    echo("Message successfully sent!\n");
    }
?>
