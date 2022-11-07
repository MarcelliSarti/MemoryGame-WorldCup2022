const historico = [
  ["Clássico", "8x8", "5min 53s", "03/11/2022", "win"],
  ["Contra o tempo", "8x8", "4 min", "03/11/2022", "loose"],
  ["Clássico", "6x6", "3min 18s", "02/11/2022", "win"],
  ["Clássico", "2x2", "14s", "02/11/2022", "win"],
  ["Contra o tempo", "6x6", "1min 30s", "01/11/2022", "loose"],
  ["Contra o tempo", "4x4", "1min 30s", "01/11/2022", "win"],
  ["Contra o tempo", "2x2", "5s", "31/10/2022", "win"],
  ["Clássico", "8x8", "10min 20s", "31/10/2022", "win"],
  ["Clássico", "6x6", "5min 25s", "30/10/2022", "win"],
  ["Clássico", "4x4", "3min 20s", "30/10/2022", "win"],
]

var tr;
var td;
const tbody = document.getElementById('tbody');

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

function renderPage() {
  for (i = 0; i < historico.length; i++) {
    tr = createTr();
    for (j = 0; j < historico[i].length; j++) {
      if (j == 4) {
        image = historico[i][j] == "win" ? createImageElement('./img/thumbUp.svg') : createImageElement('./img/thumbDown.svg');
        td = createTd();
        td.classList.add('color')
        td.append(image);
      } else {
        td = createTd(historico[i][j]);
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

renderPage();
