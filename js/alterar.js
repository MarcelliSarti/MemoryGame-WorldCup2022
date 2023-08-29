const modal = document.getElementById("modal");

let logUser = [];

let xhttp;

function createRequest() {
  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
  }

  xhttp.onreadystatechange = getDados;
  xhttp.open('GET', 'operations/get_usuario_infos.php', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send();
}

async function getDados() {
  try {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        logUser = JSON.parse(xhttp.responseText);
        if (logUser[0] !== false) {
          render();
        }
      }
      else {
        createSnackBar("Um problema ocorreu!", "error");
      }
    }
  }
  catch (e) {
    createSnackBar("Ocorreu uma exceção: " + e, "error");
  }
}

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

function validateForm() {
  modal.style.display = 'none';
  var email_input = document.getElementById('txtEmail').value;

  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
  }

  xhttp.open('GET', 'operations/validar_usuario_alterar.php?email=' + encodeURIComponent(email_input), true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send();
  xhttp.onreadystatechange = validateFormPhp;
}

async function validateFormPhp() {
  try {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        let resposta = JSON.parse(xhttp.responseText);
        if (resposta[0]) {
          createSnackBar("E-mail já cadastro, tente novamente!", "error");
        } else {
          createSnackBar("Dados alterados com sucesso!", "ok");
          setTimeout(function () {
            let form = document.getElementById("form");
            form.submit();
          }, 800);
        }
      }
      else {
        createSnackBar("Um problema ocorreu!", "error");
      }
    }
  }
  catch (e) {
    createSnackBar("Ocorreu uma exceção: " + e.description, "error");
  }
}

createRequest();