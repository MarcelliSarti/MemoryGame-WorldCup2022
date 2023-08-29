let xhttp;
let ranking = []
let modoJogo = 'classico';
let tamanhoTabuleiro = 2;
let tr;
let td;
const tbody = document.getElementById('tbody');

function removeElements() {
  const tamanho = tbody.children.length;
  for (let i = 0; i < tamanho; i++) {
    tbody.removeChild(tbody.children[0]);
  }
}

async function getValueModoJogo(modoJogoSelect) {
  removeElements();
  if (modoJogo != '') {
    let optionModoJogoDeActivated = document.getElementById(modoJogo);
    optionModoJogoDeActivated.classList.remove("active");
  }
  modoJogo = modoJogoSelect;
  let optionModoJogoActivated = document.getElementById(modoJogoSelect);
  optionModoJogoActivated.classList.add("active");

  createRequest();
}

async function getValueTamanhoTabuleiro(tamanhoTabuleiroSelect) {
  removeElements();
  if (tamanhoTabuleiro != '') {
    let optionTamanhoTabuleiroDeActivated = document.getElementById(tamanhoTabuleiro);
    optionTamanhoTabuleiroDeActivated.classList.remove("active");
  }
  tamanhoTabuleiro = tamanhoTabuleiroSelect;
  let optionTamanhoTabuleiroActivated = document.getElementById(tamanhoTabuleiro);
  optionTamanhoTabuleiroActivated.classList.add("active");

  createRequest();
}

function createRequest() {
  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
  }

  xhttp.onreadystatechange = getDados;
  xhttp.open('GET', 'operations/get_ranking.php?modoJogo=' + encodeURIComponent(modoJogo) + '&tamanhoTabuleiro=' + encodeURIComponent(tamanhoTabuleiro), true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send();
}

async function getDados() {
  try {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        ranking = JSON.parse(xhttp.responseText);
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
  element.className = "line-table";
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
  for (i = 0; i < ranking.length; i++) {
    tr = createTr();
    for (j = 0; j < ranking[i].length; j++) {
      if (j == 5) {
        image = ranking[i][j] == 1 ? createImageElement('./img/thumbUp.svg') : createImageElement('./img/thumbDown.svg');
        td = createTd();
        td.classList.add('color');
        td.append(image);
      } else {
        td = createTd(ranking[i][j]);
        if (j == 0) {
          td.classList.add('color');
        }
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

createRequest();
