let xhttp;

function logOn() {
  var user = document.getElementById('txtUsuario').value;
  var senha = document.getElementById('txtSenha').value;

  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
    return false;
  }
  xhttp.onreadystatechange = logOnPhp;
  xhttp.open('POST', 'operations/autenticacao.php', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send('user=' + encodeURIComponent(user) + '&senha=' + encodeURIComponent(senha));

  return false;
}

async function logOnPhp() {
  try {

    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {

        let resposta = JSON.parse(xhttp.responseText);
        if (!resposta[0]) {
          createSnackBar("Usuário ou senha incorreto(s), tente novamente!", "error");
        }
        else {
          createSnackBar("Usuário logado com sucesso, bem-vindo!", "ok");
          setTimeout(() => {
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
    createSnackBar("Ocorreu uma exceção: " + e, "error");
  }
}