<?php
  require_once 'conection.php';

  session_start();
  
  $array = [];
  if (isset($_SESSION["codigo"])){
    $stmt = $conn->query("select * from usuarios where codigo = ".$_SESSION["codigo"]);
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $nome = $row["nome"];
      $data_nasc = $row["data_nasc"];
      $cpf = $row["cpf"];
      $telefone = $row["telefone"];
      $email = $row["email"];
      $usuario = $row["usuario"];
      $senha = $row["senha"];
      $array = [$nome, $data_nasc, $cpf, $telefone, $email, $usuario, $senha];
      echo json_encode($array);
    }
  } else {
    echo json_encode([false]);
  }
?>