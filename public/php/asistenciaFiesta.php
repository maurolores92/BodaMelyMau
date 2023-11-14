<?php

$data = json_decode(file_get_contents('php://input'), true);

header('Content-Type: application/json; charset=utf-8');

  $to_email = "mauricioymelisalores@gmail.com";
  $subject = "Confirmacion Fiesta";
  $nombre = $data['nombre'];
  $codigo = $data['codigo'];
  $datoImportante = $data['datoImportante'];
  $headers = "Nombre y Apellido: ".$nombre . "\n" . "Codigo de confirmacion: " . $codigo . "\n" . "Dato importante: " . $datoImportante;

  $response = [];

  if (mail($to_email, $subject, $headers)) {
    $response['enviado'] = true;
} else {
    $response['enviado'] = false;
}

  echo json_encode($response, true);

?>