<?php

    $adminEmail = "thejhubbs@gmail.com";

    $name = clean($_POST["name"]);
    $email = clean($_POST["email"]);
    $message = clean($_POST["message"]);
    $reason = clean($_POST["reason"]);

    function clean($str){
        return trim(stripslashes(htmlspecialchars($str)));
    }

    echo $name . " (" . $email . ", " . $reason . ") said: " . $message;

?>