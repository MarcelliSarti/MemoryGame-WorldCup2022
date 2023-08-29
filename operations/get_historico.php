<?php
  require_once 'conection.php';

  session_start();
  
  $historico_array = [];

  
  if (isset($_SESSION["codigo"])){
    $select_query = "select * FROM partidas WHERE codigo_usuario = ".$_SESSION["codigo"]." order BY codigo DESC LIMIT 10";
    
    $stmt = $conn->query($select_query);
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $modo_jogo = $row["modo_jogo"];
      $tamanho_tabuleiro = $row["tamanho_tabuleiro"]."x".$row["tamanho_tabuleiro"];
      $tempo = $row["tempo"];
      $data = $row["data"];
      $resultado = $row["resultado"];
      $array = [$modo_jogo, $tamanho_tabuleiro, $tempo, $data, $resultado];
      array_push($historico_array, $array);
    }
    
    echo json_encode($historico_array);
  } else {
    echo json_encode([]);
  }
?>