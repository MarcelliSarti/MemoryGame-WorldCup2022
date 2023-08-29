<!DOCTYPE html>
<html lang="pt">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <script defer src="./js/sideBar.js"></script>
  <link href="css/sideBar.css" rel="stylesheet">
  <link href="css/snackBar.css" rel="stylesheet">
  <title>Memory Game</title>
</head>

<body>
  <nav class="side-bar" onclick="expandeSideBar()">

    <div class="collapse icons" id="collapse">

      <div>
        <div class="line logo">
          <img src="./img/miniLogo.png" alt="logo">
          <div class="show"> Memory Game </div>
        </div>
        <div class="space"></div>
        <a href="historico.php"
          class=" line <?php if ($_SESSION['page'] == "historico") { echo ' selected-expanded';}?> ">
          <img src=" ./img/user.svg" alt="historico">
          <div class="show">
            <?php 
              $user_name = isset($_SESSION['nome']) ? $_SESSION['nome'] : "";
              echo 'Olá, '.$user_name.' !'; 
            ?>
          </div>
        </a>
        <a href="home.php" class="line <?php if ($_SESSION['page'] == "home") { echo ' selected-expanded';}?>">
          <img src="./img/home.svg" alt="home">
          <div class="show"> Home </div>
        </a>
        <a href="alterar.php" class="line <?php if ($_SESSION['page'] == "alterar") { echo ' selected-expanded';}?> ">
          <img src="./img/edit.svg" alt="edit">
          <div class="show"> Editar Informações </div>
        </a>
        <a href="ranking.php" class="line <?php if ($_SESSION['page'] == "ranking") { echo ' selected-expanded';}?>">
          <img src="./img/ranking.svg" alt="ranking">
          <div class="show"> Ranking </div>
        </a>
      </div>

      <a href="operations/close_session.php" class="line">
        <img src="./img/logout.svg" class="logout" alt="logout">
        <div class="show"> Logout </div>
      </a>

    </div>

  </nav>
  <script defer src="./js/snackbar.js"></script>
</body>

</html>