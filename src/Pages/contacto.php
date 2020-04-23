<?php
    $nombre = $_POST['nombre'];
    $cd = $_POST['cd']
    $email = $_POST['email']
    $mns = $_POST['mns']
    $para = 'CORREO@CORREO.COM';
    $titulo = 'Información sobre Joyeria Plata Y Piedra';
    $header = 'De: ' . $email;
    $msjCorreo = "Nombre: $nombre\n Ciudad: $cd\n Correo: $email\n Mensaje:\n $mns";
  
    if ($_POST['submit']) {
        if (mail($para, $titulo, $msjCorreo, $header)) {
            echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
            window.location.href = 'http://TUSITIOWEB.COM';
            </script>";
        } else {
            echo 'Falló el envio';
        }
    }
?>