<?php
$name = $_POST["clientName"];
$email = $_POST["clientEmail"];
$message = $_POST["clientMessage"];

$EmailTo = "adam@creativedesignstoronto.com";
$Subject = $_POST["inqiry"];

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
