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
      $_SESSION['page'] = 'historico';
      include 'sideBar.php';
      if (isset($_SESSION['codigo'])) {
    ?>
    <div class="main">
      <table class="table">
        <thead class="title">
          <tr>
            <th class="cell modo-jogo"> Modo Jogo </th>
            <th class="cell tamanho-tabuleiro"> Tamanho Tabuleiro </th>
            <th class="cell time"> <img src="./img/clock.svg" alt="relogio"> Tempo </th>
            <th class="cell date"> Data </th>
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
  <script defer src="./js/historico.js"></script>
</body>

</html>