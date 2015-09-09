<?
// This file processes the email form, sends the email,
// and automatically goes to next page.
$toaddress = "hieun@metropolia.fi";
$name = $_POST['name'];
$fromaddress = $_POST['email-sender'];
$message = $_POST['email-content'];
$subject = $_POST['subject'];

// Add the visitor's name to the top of their message.
$message = "From: $name\n" . $message;
// Set up the Next-Page URL

$nextpage = "Location: http://users.metropolia.fi/~hieun";

// send email to form owner.
mail($toaddress, $subject, $message, "From: $fromaddress <$fromaddress>");

header($nextpage);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Refresh" content="3; url=<?php echo $_SERVER['HTTP_REFERER']; ?>">
    <title>Document</title>
</head>
<body>
    <p>error</p>
</body>
</html>
