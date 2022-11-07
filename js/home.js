var modoJogo = 'classico';
var tamanhoTabuleiro = 2;
var trapaca = false;
var endGame = false;
let selectCards = [];
let qtdCards = 0;
let firstCard = '';
let secondCard = '';

const cards = document.querySelector(".cards");
const modal = document.getElementById("modal");
const loader = document.querySelector(".loader");

const ativarTrapacaButton = document.getElementById("ativarTrapaca");
const desativarTrapacaButton = document.getElementById("desativarTrapaca");

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
    if (modoJogo === '') {
        createSnackBar("Selecione o modo de jogo para prosseguir!", "error");
        return;
    }
    if (tamanhoTabuleiro === 0) {
        createSnackBar("Selecione o tamanho do tabuleiro para prosseguir!", "error");
        return;
    }

    modal.style.display = "none";
    loader.style.display = "block"

    if (modoJogo == 'contraotempo') {
        contraTempoTimer();
    } else {
        classicoTimer();
    }

    qtdCards = (tamanhoTabuleiro * tamanhoTabuleiro) / 2;
    selectCards = cardImages.slice(0, qtdCards);

    loadGame();
}

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.got-right');
    if (disableCards.length === qtdCards * 2) {
        createSnackBar("Parabéns você conseguiu!", "ok");
        setTimeout(() => {
            saveGameInformation();
        }, 1500);
    }
}

const checkCards = () => {
    firstImage = firstCard.parentNode.getAttribute('data-image');
    secondImage = secondCard.parentNode.getAttribute('data-image');
    if (firstImage === secondImage) {
        firstCard.parentNode.classList.add('got-right');
        secondCard.parentNode.classList.add('got-right');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('showFace');
            secondCard.classList.remove('showFace');

            firstCard = '';
            secondCard = '';
        }, 250);
    }
}

const showFace = ({ target }) => {
    if ((!trapaca) && (!endGame)) {
        if (target.classList.contains('face')) {
            if (!(target.parentNode.classList.contains('got-right')) && !(target.classList.contains('front'))) {
                target.classList.add('showFace');
                if (firstCard === '') {
                    firstCard = target;
                } else if (secondCard === '') {
                    secondCard = target;
                    checkCards();
                }
            }
        } else if (target.classList == 'contour') {
            if (!(target.parentNode.parentNode.classList.contains('got-right')) && !(target.parentNode.classList.contains('front'))) {
                target.parentNode.classList.add('showFace');
                if (firstCard === '') {
                    firstCard = target.parentNode;
                } else if (secondCard === '') {
                    secondCard = target.parentNode;
                    checkCards();
                }
            }
        } else if (target.classList == '') {
            if (!(target.parentNode.parentNode.parentNode.classList.contains('got-right')) && !(target.parentNode.parentNode.classList.contains('front'))) {
                target.parentNode.parentNode.classList.add('showFace');

                if (firstCard === '') {
                    firstCard = target.parentNode.parentNode;
                } else if (secondCard === '') {
                    secondCard = target.parentNode.parentNode;
                    checkCards();
                }
            }
        }
    }
}

function createImageElement(url) {
    const image = document.createElement('img');
    image.src = url;
    return image;
}

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createCard(cardImage) {
    const card = createElement('div', 'card');
    const contour_front = createElement('div', 'contour');
    const front = createElement('div', 'face front');
    const contour_back = createElement('div', 'contour');
    const back = createElement('div', 'face back');

    const frontImage = createImageElement(`./img/bandeiras/${cardImage}.png`);
    contour_front.appendChild(frontImage);
    front.appendChild(contour_front);

    const backImage = createImageElement(`./img/miniLogo.png`);
    contour_back.appendChild(backImage);
    back.appendChild(contour_back);

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', showFace);

    card.setAttribute('data-image', cardImage);
    return card;
}

var display = document.querySelector("#timer");
var duration = 0;

function contraTempoTimer() {
    switch (tamanhoTabuleiro) {
        case 2:
            duration = 60 * 0.10;
            break;
        case 4:
            duration = 60 * 1;
            break;
        case 6:
            duration = 60 * 2;
            break;
        case 8:
            duration = 60 * 4.5;
            break;
        default:
            duration = 60 * 4.5;
            break;
    }

    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            createSnackBar("Seu tempo acabou!", "ok");
            endGame = true;
            setTimeout(() => {
                saveGameInformation();
            }, 1500);
        }

    }, 1000);
}

function classicoTimer() {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        ++timer;

    }, 1000);
}

async function loadGame() {
    cards.style.gridTemplateColumns = 'repeat(' + tamanhoTabuleiro + ',1fr)';
    const duplicateImages = [...selectCards, ...selectCards];
    const sortDuplicateImages = duplicateImages.sort(() => Math.random() - 0.5);

    sortDuplicateImages.forEach((cardImage) => {
        const card = createCard(cardImage);
        cards.appendChild(card);
    })

    loader.style.display = "none";
}

function ativarTrapaca() {
    trapaca = true;
    ativarTrapacaButton.classList.add('active');
    desativarTrapacaButton.classList.remove('active');
    const showCards = document.querySelectorAll('.back');
    showCards.forEach((card) => {
        if (!(card.classList.contains('showFace'))) {
            card.classList.add('showFace');
        }
    })
    firstCard = '';
    secondCard = '';
}

ativarTrapacaButton.addEventListener("click", ativarTrapaca);

function desativarTrapaca() {
    trapaca = false;
    desativarTrapacaButton.classList.add('active');
    ativarTrapacaButton.classList.remove('active');
    const showCards = document.querySelectorAll('.back');
    showCards.forEach((card) => {
        if (!(card.parentNode.classList.contains('got-right'))) {
            card.classList.remove('showFace');
        }
    })
    firstCard = '';
    secondCard = '';
}

desativarTrapacaButton.addEventListener("click", desativarTrapaca);

function endGameButton() {
    createSnackBar("Partida encerrada!", "ok");
    endGame = true;
    setTimeout(() => {
        saveGameInformation();
    }, 1500);
}

function saveGameInformation() {
    location.reload();
}