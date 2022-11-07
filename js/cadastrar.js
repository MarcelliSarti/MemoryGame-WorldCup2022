const user = 'marcelli';
const email = 'marcelli';
const cpf = '123'

function validateCadastro() {
  var usuario = document.getElementById('txtUsuario').value;
  var email_input = document.getElementById('txtEmail').value;
  var cpf_input = document.getElementById('txtCpf').value;
  if (cpf_input == cpf) {
    createSnackBar("Cpf já cadastro, tente novamente!", "error");
    return false;
  }
  else if (email_input == email) {
    createSnackBar("E-mail já cadastro, tente novamente!", "error");
    return false;
  }
  else if (usuario == user) {
    createSnackBar("Usuário já cadastro, tente novamente!", "error");
    return false;
  }
  else {
    createSnackBar("Usuário cadastrado com sucesso, bem-vindo!", "ok");
    setTimeout(() => {
      return true;
    }, 1500);
  }
}