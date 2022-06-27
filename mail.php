<?php

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";
    require "PHPMailer/src/SMTP";

    $title = "Тема письма";
    $file = $_FILES['file'];

    $c = true;
    // Формирование самого письма
    $title = "Заголовок письма";


    $body = "<table style='width: 100%;'>$body</table>";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('');


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send();

    } catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
?>