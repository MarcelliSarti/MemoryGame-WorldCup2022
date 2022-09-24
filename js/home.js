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

// function loadCards(){
//     alert('oi');
//     for(let i=0;i<4;i++){
//         str = '<div class="card" id="show"><div class="front face"><div class="contour"><img src="./img/bandeiras/bra.png" alt="Brasil"></div></div><div class="back face"><div class="contour"><img src="./img/miniLogo.png" alt="icon"></div></div></div>';
//         document.getElementById('cards').innerHTML += str;
//     }
// }

const card = document.getElementById('show');

card.addEventListener('click', showFace);