<?php

if($_POST["submit"]) {
    $recipient="adam@creativedesignstoronto.com";
    $subject="E-mail from Website Form";
    $sender=$_POST["clientName"];
    $senderEmail=$_POST["clientEmail"];
    $message=$_POST["clientMessage"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent. We will contact you within 48 hours.</p>";
}
?>
