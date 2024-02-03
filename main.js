let startButton = document.querySelector('.start');
let inicioContainer = document.querySelector('.inicio');
let index = document.querySelector('.index')
startButton.addEventListener('click', () => {
    inicioContainer.classList.add('hide');
    index.classList.remove('hide');
})