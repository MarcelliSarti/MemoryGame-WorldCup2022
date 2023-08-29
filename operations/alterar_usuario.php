<?php
  require_once 'conection.php';

  session_start();

  //Pegando último código do banco de dados
  $stmt = $conn->query("select max(codigo) as codigo from usuarios");
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $codigo = number_format($row["codigo"]) + 1;
  }

  $nome = $_POST["nome"];
  $telefone = $_POST["telefone"];
  $email = $_POST["email"];
  $senha = $_POST["senha"];

  $insert_script = "update usuarios set nome = '".$nome."', telefone = '".$telefone."', email = '".$email."', senha = '".$senha."' where codigo = ".$_SESSION["codigo"];
  $_SESSION["nome"] = $nome;
  try {
    $conn->exec($insert_script);
    header("location:../alterar.php");
  } catch(PDOException $e){
    echo "Ocorreu um erro: " . $e->getMessage();
  }
?>