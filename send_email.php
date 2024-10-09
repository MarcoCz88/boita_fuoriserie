<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "marco.corradi.dev@gmail.com";
    $subject = "Nuovo messaggio dal modulo di contatto";
    $body = "Nome: $name\nEmail: $email\n\nMessaggio:\n$message";
    $headers = "From: $email";

    error_log("Form submitted: Name - $name, Email - $email, Message - $message");

    if (mail($to, $subject, $body, $headers)) {
        echo "Messaggio inviato con successo!";
    } else {
        error_log("Mail sending failed: Name - $name, Email - $email, Message - $message");
        echo "Errore nell'invio del messaggio. Si prega di riprovare.";
    }
} else {
    echo "Metodo di richiesta non supportato.";
}
?>
