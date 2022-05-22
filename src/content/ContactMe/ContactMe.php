<?php
$name =$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$mail_head="From: "."$name ". "<" . " $email ". ">\n";
$recipient='sonisumit392@gmail.com';
mail($recipient,$subject,$message,$mail_head)
or die("Error!!");

?>