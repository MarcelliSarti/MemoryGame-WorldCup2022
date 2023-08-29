<?php
  require_once 'conection.php';
  
  $usuario = (isset($_GET['usuario'])) ? $_GET['usuario'] : '';
  $email = (isset($_GET['email'])) ? $_GET['email'] : '';
  $cpf = (isset($_GET['cpf'])) ? $_GET['cpf'] : '';

  $array = [false, false, false];

  $stmt = $conn->query("select * from usuarios where usuario = '".$usuario."'")->fetchAll();
  if (count($stmt) > 0) {
    $array[0] = true;
  }

  $stmt = $conn->query("select * from usuarios where email = '".$email."'")->fetchAll();
  if (count($stmt) > 0) {
    $array[1] = true;
  }
  
  $stmt = $conn->query("select * from usuarios where cpf = '".$cpf."'")->fetchAll();
  if (count($stmt) > 0) {
    $array[2] = true;
  }
  
  echo json_encode($array);
?>