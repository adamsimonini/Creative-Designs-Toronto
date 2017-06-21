<?php

if($_POST["submit"]) {
    $recipient="adam@creativedesignstoronto.com";
    $inquery=$_POST["inquery"]
    $sender=$_POST["clientName"];
    $senderEmail=$_POST["clientEmail"];
    $message=$_POST["clientMessage"];

    $mailBody="Name: $sender\nEmail: $senderEmail\nSubject: $inquery\n\n$message";

    mail($recipient, $inquery, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent. We will contact you within 48 hours.</p>";
}
?>
