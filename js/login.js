const user = 'marcelli';
const password = '123';

function logOn() {
  var usuario = document.getElementById('txtUsuario').value;
  var senha = document.getElementById('txtSenha').value;
  if (usuario != user) {
    createSnackBar("Usuário incorreto, tente novamente!", "error");
    return false;
  }
  else if (senha != password) {
    createSnackBar("Senha incorreto, tente novamente!", "error");
    return false;
  } else {
    createSnackBar("Usuário logado com sucesso, bem-vindo!", "ok");
    setTimeout(() => {
      return true;
    }, 1500);
  }
}