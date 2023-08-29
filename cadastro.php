<!doctype html>
<html lang="pt">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link href="css/cadastro.css" rel="stylesheet">
  <link href="css/forms.css" rel="stylesheet">
  <link href="css/snackbar.css" rel="stylesheet">
  <script defer src="./js/sideBar.js"></script>
  <title> Memory Game </title>
</head>

<body>
  <div class="main page">

    <div class="left">
      <img src="img/loginLogo.jpg" alt="logo">
    </div>

    <div class="rigth">

      <div class="cadastro">

        <div class="logo">
          <img src="img/miniLogo.png" alt="logo">
        </div>

        <h1> Cadastro </h1>

        <form class="infos" action="operations/salvar_usuario.php" method="POST" id="form"
          onsubmit="return validateForm()">

          <div class="field">
            <input type="text" name="nome" required>
            <label> Nome Completo </label>
          </div>

          <div class="field">
            <input class="date" name="data_nasc" type="date" required>
            <label> Data de nascimento </label>
          </div>

          <div class="field">
            <input type="text" name="cpf" id="txtCpf" required>
            <label> CPF </label>
          </div>

          <div class="field">
            <input type="text" name="telefone" required>
            <label> Telefone </label>
          </div>

          <div class="field">
            <input type="text" name="email" id="txtEmail" required>
            <label> E-mail </label>
          </div>

          <div class="field">
            <input type="text" name="usuario" id="txtUsuario" required>
            <label> Usuário </label>
          </div>

          <div class="field">
            <input type="password" name="senha" id="txtSenha" required>
            <img src="img/eye.svg" alt="eye" id="verSenha" onclick="showPassword()">
            <label> Senha </label>
          </div>

          <span> <a href="login.php"> Já possui cadastro? Logar! </a></span>

          <input type="submit" class="button" value="Cadastrar-se">
        </form>

      </div>

    </div>

  </div>
  <script defer src="./js/senha.js"></script>
  <script defer src="./js/cadastro.js"></script>
  <script defer src="./js/snackbar.js"></script>
</body>

</html>