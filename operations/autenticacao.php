<?php
  require_once 'conection.php';

  $user = (isset($_POST['user'])) ? $_POST['user'] : '';
  $senha = (isset($_POST['senha'])) ? $_POST['senha'] : '';
  $stmt = $conn->query("select * from usuarios where usuario = '".$user."' and senha = '".$senha."'");
  $codigo = "";
  $nome = "";
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $codigo = $row["codigo"];
    $nome = $row["nome"];
  }

  $array = [false];

  if ($codigo){
    session_start();
    $_SESSION['codigo'] = $codigo;
    $_SESSION['nome'] = $nome;
    $_SESSION['page'] = 'home';
    $array[0] = true;
  } 
  
  echo json_encode($array);
  
?>