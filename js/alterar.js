const modal = document.getElementById("modal");

const logUser = ["Wallyson", "08/01/2003", "111.111.111-11", "(11) 11111-1111", "wallyson@gmail.com", "wallyson", "1234"];

function render() {
  document.getElementById("txtName").value = logUser[0];
  document.getElementById("txtDataNasc").value = logUser[1];
  document.getElementById("txtCpf").value = logUser[2];
  document.getElementById("txtNumber").value = logUser[3];
  document.getElementById("txtEmail").value = logUser[4];
  document.getElementById("txtUser").value = logUser[5];
  document.getElementById("txtSenha").value = logUser[6];
}

function cancel() {
  modal.style.display = 'none';
}

function temCerteza() {
  let name = document.getElementById("txtName").value;
  let tel = document.getElementById("txtNumber").value;
  let email = document.getElementById("txtEmail").value;
  let senha = document.getElementById("txtSenha").value;

  if (name === "") {
    createSnackBar("Nome inválido!", "error");
    focus(name);
  }
  else if (tel === "") {
    createSnackBar("Número de telefone inválido!", "error");
    focus(tel);
  }
  else if (email === "") {
    createSnackBar("E-mail inválido!", "error");
    focus(email);
  }
  else if (senha === "") {
    createSnackBar("Senha inválida!", "error");
    focus(senha);
  } else {
    modal.style.display = 'block';
  }
}

function salvar() {
  createSnackBar("Dados alterados com sucesso!", "ok");
  modal.style.display = 'none';
  // location.reload();
}

render();