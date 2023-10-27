<?php
  $to_email = "maurolores1992@gmail.com";
  $subject = "Confirmacion para conferencia";
  $nombre = $_POST['nombre'];
  $headers = "Confirma que asistira a la conferencia: ".$nombre;

  if(mail($to_email, $subject, $headers)) {
    echo '<script language="javascript">
                alert("Tu mensaje fue enviado");
            </script>';
    header('Location: ../index.html');
  } else {
    echo '<script language="javascript">
            alert("Error al enviar mensaje. Por favor intenta de nuevo.");
        </script>';
  }
?>


