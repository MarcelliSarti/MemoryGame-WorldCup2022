<!DOCTYPE html>
<html lang="pt">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link href="css/tables.css" rel="stylesheet">
  <title> Memory Game </title>
</head>

<body>
  <div class="page">
    <?php 
      session_start();
      $_SESSION['page'] = 'ranking';
      include 'sideBar.php';
      if (isset($_SESSION['codigo'])) {
    ?>
    <div class="main">
      <div class="buttons">
        <div class="buttons-secondery">
          <div class="button active" id="classico" onclick="getValueModoJogo('classico')"> Clássico </div>
          <div class=" button" id="contraotempo" onclick="getValueModoJogo('contraotempo')">Contra o tempo </div>
        </div>
        <div class=" buttons-secondery">
          <div class="button active" id="2" onclick="getValueTamanhoTabuleiro(2)"> 2x2 </div>
          <div class="button" id="4" onclick="getValueTamanhoTabuleiro(4)"> 4x4 </div>
          <div class="button" id="6" onclick="getValueTamanhoTabuleiro(6)"> 6x6 </div>
          <div class="button" id="8" onclick="getValueTamanhoTabuleiro(8)"> 8x8 </div>
        </div>
      </div>
      <table class="table">
        <thead class="title">
          <tr>
            <th class="cell border1"></th>
            <th class="cell jogador"> Jogador </th>
            <th class="cell time"> <img src="./img/clock.svg" alt="relogio"> Tempo </th>
            <th class="cell date"> Data </th>
            <th class="cell result border2"> Pontuação </th>
            <th class="cell result border2"> Resultado </th>
          </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>
    </div>
    <?php
      } else {
        echo '<div class = "main"> Você precisa estar autenticado para jogar! </div>';
      }
    ?>
  </div>
  <script defer src="./js/ranking.js"></script>

</body>

</html>