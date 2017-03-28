<?php

$recepient = "info@yoya-baby.by";
$sitename = "yoya-baby.by";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Имя клиента: $name \nНомер телефона: $phone";
$pagetitle = "Заявочка с сайта \"$sitename\", надо бы глянуть.";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
