<?php

    $adminEmail = "thejhubbs@gmail.com";

    $name = clean($_POST["name"]);
    $email = clean($_POST["email"]);
    $message = clean($_POST["message"]);
    $reason = cleanarray($_POST["reason"]);

    function clean($str){
        return trim(stripslashes(htmlspecialchars($str)));
    }
    function cleanarray($array){
        $returnarr = array();
        foreach($array as $item) {
            array_push($returnarr, clean($item));
        }
        return $returnarr;
    }

    $message = $name . " (" . $email . ", " . implode($reason, ", ") . ") said: " . $message;
    mail($adminEmail, "NEW FORM FILLED OUT", $message);
    header("Location: http://www.jordan-andrew.com?message=sent/#contact");
?>