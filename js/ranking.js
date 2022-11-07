const ranking = [
  ["1°", "subiu", "Nome", "Clássico", "8x8", "5min 53s", "03/11/2022", "win"],
  ["2°", "none", "Nome", "Contra o tempo", "8x8", "4 min", "03/11/2022", "loose"],
  ["3°", "none", "Nome", "Clássico", "6x6", "3min 18s", "02/11/2022", "win"],
  ["4°", "none", "Nome", "Clássico", "2x2", "14s", "02/11/2022", "win"],
  ["5°", "subiu", "Nome", "Contra o tempo", "6x6", "1min 30s", "01/11/2022", "loose"],
  ["6°", "subiu", "Nome", "Contra o tempo", "4x4", "1min 30s", "01/11/2022", "win"],
  ["7°", "desceu", "Nome", "Contra o tempo", "2x2", "5s", "31/10/2022", "win"],
  ["8°", "desceu", "Nome", "Clássico", "8x8", "10min 20s", "31/10/2022", "win"],
  ["9°", "desceu", "Nome", "Clássico", "6x6", "5min 25s", "30/10/2022", "win"],
  ["10°", "subiu", "Nome", "Clássico", "4x4", "3min 20s", "30/10/2022", "win"]
]

var tr;
var td;
const tbody = document.getElementById('tbody');

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

function createSpanElement(text, tag) {
  const element = document.createElement('span');
  if (tag == 'desceu') {
    element.className = "rotate";
  }
  element.textContent = text;
  return element;
}

function renderPage() {
  for (i = 0; i < ranking.length; i++) {
    tr = createTr();
    for (j = 0; j < ranking[i].length; j++) {
      if (j == 1) {
        tag = ranking[i][j] == 'none' ? ' - ' : ' ^ '
        span1 = createSpanElement(tag, ranking[i][j]);
        span2 = createSpanElement(tag, ranking[i][j]);
        td = createTd();
        td.classList.add('change')
        td.appendChild(span1);
        td.appendChild(span2);
      }
      else if (j == 7) {
        image = ranking[i][j] == "win" ? createImageElement('./img/thumbUp.svg') : createImageElement('./img/thumbDown.svg');
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

renderPage();
