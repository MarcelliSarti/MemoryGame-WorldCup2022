<?php
  require_once 'conection.php';

  session_start();

  $stmt = $conn->query("select max(codigo) as codigo from partidas");
  
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $codigo = number_format($row["codigo"]) + 1;
  }
  
  $modo_jogo = (isset($_POST['modo_jogo'])) ? $_POST['modo_jogo'] : 1;
  $tamanho_tabuleiro = (isset($_POST['tamanho_tabuleiro'])) ? $_POST['tamanho_tabuleiro'] : 2;
  $time = (isset($_POST['time'])) ? $_POST['time'] : '';
  $resultado = (isset($_POST['resultado'])) ? $_POST['resultado'] : 0;
  $pontuacao = (isset($_POST['pontuacao'])) ? $_POST['pontuacao'] : 0;

  $insert_script = "insert into partidas (codigo, codigo_usuario, modo_jogo, tamanho_tabuleiro, tempo, data, resultado, pontuacao) values (".$codigo.",".$_SESSION['codigo'].",".$modo_jogo.",".$tamanho_tabuleiro.",'".$time."',CURDATE(),".$resultado.",".$pontuacao.")";

  try {
    $conn->exec($insert_script);
    echo json_encode([true]);
  } catch(PDOException $e){
    echo json_encode([$e]);
  }
?>