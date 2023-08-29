<?php
  require_once 'conection.php';

  $stmt = $conn->query("select max(codigo) as codigo from usuarios");
  
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $codigo = number_format($row["codigo"]) + 1;
  }

  $nome = $_POST["nome"];
  $data_nasc = $_POST["data_nasc"];
  $cpf = $_POST["cpf"];
  $telefone = $_POST["telefone"];
  $email = $_POST["email"];
  $usuario = $_POST["usuario"];
  $senha = $_POST["senha"];

  $insert_script = "insert into usuarios (codigo, nome, data_nasc, cpf, telefone, email, usuario, senha) values (".$codigo.",'".$nome."','".$data_nasc."','".$cpf."','".$telefone."','".$email."','".$usuario."','".$senha."')";
  try {
    $conn->exec($insert_script);
    header("location:../login.php");
  } catch(PDOException $e){
    echo "Ocorreu um erro: " . $e->getMessage();
  }
?>