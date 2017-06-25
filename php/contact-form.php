<?php
$name = $_POST['name'];
$email = $_POST['email'];
$type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" From: $name \n Inquiry: $type \n Message: $message";
$recipient = "adam@creativedesignstoronto.com";
$subject = "Regarding: $type";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

echo "Thank You!";
?>
