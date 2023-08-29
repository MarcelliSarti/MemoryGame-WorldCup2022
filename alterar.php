<!DOCTYPE html>
<html lang="pt">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link href="css/modal.css" rel="stylesheet">
  <link href="css/alterar.css" rel="stylesheet">
  <link href="css/forms.css" rel="stylesheet">
  <title>Memory Game</title>
</head>

<body>
  <div class="page">
    <?php 
      session_start();
      $_SESSION['page'] = 'alterar';
      include 'sideBar.php';
      if (isset($_SESSION['codigo'])) {
    ?>
    <div class="main">
      <div class="container">
        <div class="head"> Alterar Usuário </div>
        <div class="body">
          <form class="infos" action="operations/alterar_usuario.php" id="form" method="POST">

            <div class="field alterar">
              <input type="text" required id="txtName" name="nome">
              <label> Nome Completo </label>
            </div>

            <div class="field alterar">
              <input type="text" id="txtDataNasc" readonly>
              <label> Data de nascimento </label>
            </div>

            <div class="field alterar">
              <input type="text" id="txtCpf" required readonly>
              <label> CPF </label>
            </div>

            <div class="field alterar">
              <input type="text" required id="txtNumber" name="telefone">
              <label> Telefone </label>
            </div>

            <div class="field alterar">
              <input type="text" required id="txtEmail" name="email">
              <label> E-mail </label>
            </div>

            <div class="field alterar">
              <input type="text" id="txtUser" required readonly>
              <label> Usuário </label>
            </div>

            <div class="field alterar">
              <input type="password" required id="txtSenha" name="senha">
              <label> Senha </label>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9A1032"
                id="verSenha" onclick="showPassword()">
                <path d=" M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>

            <input type="button" class="button alterarB" value="Salvar" onclick="temCerteza()">
          </form>
        </div>
      </div>


      <div class="modal" id="modal">
        <div class="modal-content">
          <div class="close">
            <div></div>
            <div onclick="cancel()"> X </div>
          </div>
          <div class="circle"> ? </div>
          <div class="space"></div>
          <div class="subtitle save"> Salvar informações </div>
          <div class="subtitle"> Tem certeza que deseja salvar informações?</div>
          <div class="space"></div>
          <div class="buttons">
            <div class="cancel modalButton" onclick="cancel()"> Cancelar </div>
            <div class="modalButton" onclick="validateForm()"> Sim, salvar </div>
          </div>
          <div class="space"></div>
        </div>
      </div>
    </div>
    <?php
      } else {
        echo '<div class = "main"> Você precisa estar autenticado para jogar! </div>';
      }
    ?>
  </div>
  <script defer src="./js/senha.js"></script>
  <script defer src="./js/alterar.js"></script>
</body>

</html>