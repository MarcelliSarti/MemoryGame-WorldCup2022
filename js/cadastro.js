var user = false;
var email = false;
var cpf = false;
var returned = false;

let xhttp;

function validateForm() {
  var user_input = document.getElementById('txtUsuario').value;
  var email_input = document.getElementById('txtEmail').value;
  var cpf_input = document.getElementById('txtCpf').value;

  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
    return false;
  }

  xhttp.open('GET', 'operations/validar_usuario.php?usuario=' + encodeURIComponent(user_input) + '&email=' + encodeURIComponent(email_input) + '&cpf=' + encodeURIComponent(cpf_input), true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send();
  xhttp.onreadystatechange = validateFormPhp;

  return false;
}

async function validateFormPhp() {
  try {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        let resposta = JSON.parse(xhttp.responseText);
        user = resposta[0];
        email = resposta[1];
        cpf = resposta[2];
        returned = showMessages();
        if (returned) {
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

function showMessages() {
  if (cpf) {
    createSnackBar("Cpf já cadastro, tente novamente!", "error");
    return false;
  }
  else if (email) {
    createSnackBar("E-mail já cadastro, tente novamente!", "error");
    return false;
  }
  else if (user) {
    createSnackBar("Usuário já cadastro, tente novamente!", "error");
    return false;
  }
  else {
    createSnackBar("Usuário cadastrado com sucesso, bem-vindo!", "ok");
    return true;
  }
}