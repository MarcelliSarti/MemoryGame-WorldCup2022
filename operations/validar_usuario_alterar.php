<?php
  require_once 'conection.php';

  session_start();
  
  $email = (isset($_GET['email'])) ? $_GET['email'] : '';

  $array = [false];

  $stmt = $conn->query("select * from usuarios where email = '".$email."' and codigo != ".$_SESSION["codigo"])->fetchAll();
  if (count($stmt) > 0) {
    $array[0] = true;
  }
  
  echo json_encode($array);
?>