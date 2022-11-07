function createSnackBar(text, tipo) {
  const page = document.querySelector('.page');

  const img = document.createElement('img');
  img.src = tipo == 'ok' ? './img/ok.svg' : './img/error.svg';

  const element = document.createElement('div');
  element.id = "snackbar"
  element.classList.add(tipo);
  element.textContent = text;
  element.appendChild(img);

  page.appendChild(element);

  element.classList.add('showSnack');

  setTimeout(function () {
    element.classList.remove("showSnack");
    page.removeChild(element);
  }, 3000);
}