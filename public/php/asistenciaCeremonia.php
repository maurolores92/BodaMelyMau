<?php
  $to_email = "maurolores1992@gmail.com";
  $subject = "Confirmacion Asistencia";
  $nombreyapellido = $_POST['nombreyapellido'];
  $codigo = $_POST['codigo'];
  $datoImportante = $_POST['datoImportante'];
  $headers = "Nombre y Apellido: ".$nombreyapellido . "\n" . "Codigo de confirmacion: " . $codigo . "\n" . "Dato importante: " . $datoImportante;

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