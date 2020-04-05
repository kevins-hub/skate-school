<?php

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $visitor_email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];
    $type = $_POST['lesson-type'];

    $email_from = "kevinliu428@gmail.com";
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Phone Number: $number.\n".
                            "User lesson preference: $type.\n".
                                "User Message: $message.\n";
    
    $to = "kevinliu428@gmail.com";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");