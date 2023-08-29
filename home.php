<!DOCTYPE html>
<html lang="pt">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link href="css/home.css" rel="stylesheet">
  <link href="css/modal.css" rel="stylesheet">
  <title>Memory Game</title>
</head>

<body>
  <div class="page">
    <?php 
      session_start();
      $_SESSION['page'] = 'home';
      include 'sideBar.php';
      if (isset($_SESSION['codigo'])) {
    ?>
    <div class="main">
      <div class="buttons">
        <div class="button time"><img src="./img/clock.svg" alt="icon">
          <div id="timer">00:00 </div>
        </div>
        <div class="middle">
          <div class="button" id="ativarTrapaca" onclick="ativarTrapaca()"> Ativar trapaça</div>
          <div class=" button active" id="desativarTrapaca" onclick="desativarTrapaca()">Desativar trapaça</div>
        </div>
        <div class="button" onclick="endGameButton()">Encerrar partida</div>
      </div>

      <div class="modal" id="modal">
        <div class="modal-content">
          <div class="title">Jogo da Memória</div>
          <div class="content-subtitle">
            <div class="modal-line"></div>
            <div class="subtitle">Escolha o modo de jogo</div>
            <div class="modal-line"></div>
          </div>
          <div class="modo-jogo">
            <div class="button active" id="classico" onclick="getValueModoJogo('classico')">Clássico</div>
            <div class="button" id="contraotempo" onclick="getValueModoJogo('contraotempo')">Contra o tempo</div>
          </div>
          <div class="content-subtitle">
            <div class="modal-line"></div>
            <div class="subtitle">Escolha o tamanho do tabuleiro</div>
            <div class="modal-line"></div>
          </div>
          <div class="tamanho-tabuleiro">
            <div class="button active" id="2" onclick="getValueTamanhoTabuleiro(2)">2x2</div>
            <div class="button" id="4" onclick="getValueTamanhoTabuleiro(4)">4x4</div>
            <div class="button" id="6" onclick="getValueTamanhoTabuleiro(6)">6x6</div>
            <div class="button" id="8" onclick="getValueTamanhoTabuleiro(8)">8x8</div>
          </div>
          <div class="spaces"></div>
          <div class="modal-line"></div>
          <div class="spaces"></div>
          <div class="button modalButton" onclick="startGame()">Iniciar nova partida</div>
          <div class="spaces"></div>
        </div>
      </div>

      <div class="cards" id="cards">

      </div>
      <div class="loader"></div>
    </div>
    <?php
      } else {
        echo '<div class = "main"> Você precisa estar autenticado para jogar! </div>';
      }
    ?>
  </div>
  <script defer src="./js/home.js"></script>
</body>

</html>