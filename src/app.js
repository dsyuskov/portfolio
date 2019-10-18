import './scss/main.scss';

let isVisible = false;

document.getElementById('dropdown').addEventListener('click', () => {    
    if (isVisible) {
        document.querySelector("#dropdown > ul").classList.remove('visible');            
        isVisible = false;
    } else {
        document.querySelector("#dropdown > ul").classList.add('visible');    
        isVisible = true;
    }    
});

let items = document.querySelectorAll('.slider__item');
let currentItem = 0;

function changeCurrentitem(n) {
    currentItem = (n + items.length) % items.length;
}

document.getElementById('left').addEventListener('click', () => {    
    items[currentItem].classList.remove('visible');
    changeCurrentitem(currentItem - 1);
    items[currentItem].classList.add('visible');    
});

document.getElementById('right').addEventListener('click', () => {    
    items[currentItem].classList.remove('visible');
    changeCurrentitem(currentItem + 1);
    items[currentItem].classList.add('visible');    
});