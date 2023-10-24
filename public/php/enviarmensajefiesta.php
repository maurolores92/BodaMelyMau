<?php
  $to_email = "maurolores1992@gmail.com";
  $subject = "Cancion sugerida para la fiesta";
  $nombre = $_POST['nombre'];
  $cancion = $_POST['cancion'];
  $link = $_POST['link'];
  $headers = "Cancion sugerida por: ".$nombre . "\n" . "El nombre de la cancion es: " . $cancion . "\n" . "Link de youtube o spotify: " . $link;

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


