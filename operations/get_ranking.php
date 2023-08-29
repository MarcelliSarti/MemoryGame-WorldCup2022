<?php
  require_once 'conection.php';

  session_start();

  $ranking_array = [];
  $cont = 1;

  $modo_jogo = (isset($_GET['modoJogo'])) ? $_GET['modoJogo'] : "classico";
  $tamanho_tabuleiro = (isset($_GET['tamanhoTabuleiro'])) ? $_GET['tamanhoTabuleiro'] : 2;

  if ($modo_jogo == "classico") {
    $select_query = "SELECT u.nome, p.tempo, p.data, p.resultado, p.pontuacao FROM partidas p JOIN usuarios u ON u.codigo = p.codigo_usuario where p.modo_jogo = 0 and p.tamanho_tabuleiro = ".$tamanho_tabuleiro." order BY p.resultado DESC, p.pontuacao, p.tempo ASC LIMIT 10";
  } else if ($modo_jogo == "contraotempo"){
    $select_query = "SELECT u.nome, p.tempo, p.data, p.resultado, p.pontuacao FROM partidas p JOIN usuarios u ON u.codigo = p.codigo_usuario where p.modo_jogo = 1 and p.tamanho_tabuleiro = ".$tamanho_tabuleiro." order BY p.resultado DESC, p.tempo, p.pontuacao ASC LIMIT 10";
  } else {
    $select_query = "SELECT * FROM PARTIDAS LIMIT 10";
  }
  
  if (isset($_SESSION["codigo"])){
    $stmt = $conn->query($select_query);
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $nome = $row["nome"];
      $tempo = $row["tempo"];
      $data = $row["data"];
      $pontuacao = $row["pontuacao"];
      $resultado = $row["resultado"];
      $array = [$cont++.'°', $nome, $tempo, $data, $pontuacao, $resultado];
      array_push($ranking_array, $array);
    }
    
    echo json_encode($ranking_array);
  } else {
    echo json_encode([]);
  }
?>