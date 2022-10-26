var modoJogo = 'classico';
var tamanhoTabuleiro = 2;
let selectCards = [];
let qtdCards = 0;

const cards = document.querySelector(".cards");
const modal = document.getElementById("modal");

const cardImages = ['qat', 'ecu', 'sen', 'ned', 'eng', 'irn', 'usa', 'wal', 'arg',
  'ksa', 'mex', 'pol', 'fra', 'aus', 'den', 'tun', 'esp', 'crc', 'ger', 'jpn', 'bel',
  'can', 'mar', 'cro', 'bra', 'srb', 'sui', 'cmr', 'por', 'gha', 'uru', 'kor'];

function getValueModoJogo(modoJogoSelect) {
    if (modoJogo != '') {
        var optionModoJogoDeActivated = document.getElementById(modoJogo);
        optionModoJogoDeActivated.classList.remove("active");
    }
    modoJogo = modoJogoSelect;
    var optionModoJogoActivated = document.getElementById(modoJogoSelect);
    optionModoJogoActivated.classList.add("active");
}

function getValueTamanhoTabuleiro(tamanhoTabuleiroSelect) {
    if (tamanhoTabuleiro != '') {
        var optionTamanhoTabuleiroDeActivated = document.getElementById(tamanhoTabuleiro);
        optionTamanhoTabuleiroDeActivated.classList.remove("active");
    }
    tamanhoTabuleiro = tamanhoTabuleiroSelect;
    var optionTamanhoTabuleiroActivated = document.getElementById(tamanhoTabuleiro);
    optionTamanhoTabuleiroActivated.classList.add("active");
}

function startGame() {
    if(modoJogo === ''){
        alert("Selecione o modo de jogo para prosseguir!!!");
        return;
    }
    if(tamanhoTabuleiro === 0){
        alert("Selecione o tamanho do tabuleiro para prosseguir!!!");
        return;
    }

    modal.style.display = "none";

    qtdCards = (tamanhoTabuleiro * tamanhoTabuleiro) / 2;
    selectCards = cardImages.slice(0,qtdCards);
    
    loadGame();
}

const showFace = ({target}) => {
    console.log(target.parentNode.classList);
    if (target.classList == 'back face') {
        target.classList.add('showFace');
        return;
    } else if (target.parentNode.classList == 'contour') {
        target.parentNode.parentNode.classList.add('showFace');
        return;
    }
    target.parentNode.classList.add('showFace');
}

function createImageElement(url) {
    const image = document.createElement('img');
    image.src = url;
    return image;
}

function createElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createCard(cardImage) {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
    
    const frontImage = createImageElement(`./img/bandeiras/${cardImage}.png`);
    front.appendChild(frontImage);

    const backImage = createImageElement(`./img/miniLogo.png`);
    back.appendChild(backImage);

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', showFace);

    card.setAttribute('data-image', cardImage);
    return card;
}

function loadGame() {
    cards.style.gridTemplateColumns = 'repeat(' + tamanhoTabuleiro + ',1fr)';
    const duplicateImages = [...selectCards,...selectCards];
    const sortDuplicateImages = duplicateImages.sort(() => Math.random() - 0.5);

    sortDuplicateImages.forEach((cardImage)=> {
        const card = createCard(cardImage);
        cards.appendChild(card);
    })
}

// function loadCards(){
//     alert('oi');
//     for(let i=0;i<4;i++){
//         str = '<div class="card" id="show"><div class="front face"><div class="contour"><img src="./img/bandeiras/bra.png" alt="Brasil"></div></div><div class="back face"><div class="contour"><img src="./img/miniLogo.png" alt="icon"></div></div></div>';
//         document.getElementById('cards').innerHTML += str;
//     }
// }

// const card = document.getElementById('show');

// card.addEventListener('click', showFace);