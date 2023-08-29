let historico = [];

var tr;
var td;
const tbody = document.getElementById('tbody');

let xhttp;

function createRequest() {
  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
  }

  xhttp.onreadystatechange = getDados;
  xhttp.open('GET', 'operations/get_historico.php', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send();
}

async function getDados() {
  try {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        historico = JSON.parse(xhttp.responseText);
        render();
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

function createTr() {
  const element = document.createElement('tr');
  element.className = "line-table tr";
  return element;
}

function createTd(text) {
  const element = document.createElement('td');
  element.className = "cell content";
  element.textContent = text;
  return element;
}

function createImageElement(url) {
  const image = document.createElement('img');
  image.src = url;
  return image;
}

function render() {
  for (i = 0; i < historico.length; i++) {
    tr = createTr();
    for (j = 0; j < historico[i].length; j++) {
      if (j == 0) {
        td = createTd(historico[i][j] == 0 ? 'Classíco' : 'Contra o tempo');
      }
      else if (j == 4) {
        image = historico[i][j] == 1 ? createImageElement('./img/thumbUp.svg') : createImageElement('./img/thumbDown.svg');
        td = createTd();
        td.classList.add('color');
        td.append(image);
      } else {
        td = createTd(historico[i][j]);
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

createRequest();