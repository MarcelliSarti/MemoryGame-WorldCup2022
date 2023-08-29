<!DOCTYPE html>
<html lang="pt">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link href="css/login.css" rel="stylesheet">
  <link href="css/forms.css" rel="stylesheet">
  <link href="css/snackbar.css" rel="stylesheet">
  <title> Memory Game </title>
</head>

<body>
  <div class="page  main">
    <div class="left">
      <img src="img/loginLogo.jpg" alt="logo">
    </div>
    <div class="rigth">

      <div class="login">

        <div class="logo">
          <img src="img/miniLogo.png" alt="logo">
        </div>

        <form class="infos" action="home.php" id="form" onsubmit="return logOn()">
          <h1> Login </h1>

          <div class="field">
            <input type="text" name="user" id="txtUsuario" required>
            <label> Usuário </label>
          </div>

          <div class="field">
            <input type="password" name="senha" id="txtSenha" required>
            <img src="img/eye.svg" alt="eye" id="verSenha" onclick="showPassword()">
            <label> Senha </label>
          </div>

          <span> <a href="cadastro.php"> Não possui cadastro? Cadastrar-se! </a></span>

          <input type="submit" class="button" value="Entrar">
        </form>

      </div>
    </div>
  </div>
  <script defer src="./js/senha.js"></script>
  <script defer src="./js/login.js"></script>
  <script defer src="./js/snackbar.js"></script>
</body>

</html>