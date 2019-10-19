import './scss/main.scss';

let isVisibleButton = false;
let isVisibleDesk = false;

document.getElementById('dropdown').addEventListener('click', () => {
    if (isVisibleButton) {
        document.querySelector("#dropdown > ul").classList.remove('visible');       
        isVisibleButton = false;
    } else {
        document.querySelector("#dropdown > ul").classList.add('visible');       
        isVisibleButton = true;
    }
});

document.getElementById('show-desk').addEventListener('click', function() {
    if (isVisibleDesk) {
        document.querySelector('.slider__description').classList.remove('visible');
        isVisibleDesk = false
    } else {
        document.querySelector('.slider__description').classList.add('visible');
        isVisibleDesk = true;
    }
    
})

let items = document.querySelectorAll('.slider__item');
let currentItem = 0;

function changeCurrentitem(n) {
    currentItem = (n + items.length) % items.length;
}

function next(n) {
    items[currentItem].classList.remove('visible');
    changeCurrentitem(n + 1);
    items[currentItem].classList.add('visible');
}

function prev(n) {
    items[currentItem].classList.remove('visible');
    changeCurrentitem(n - 1);
    items[currentItem].classList.add('visible');
}

document.getElementById('left').addEventListener('click', function () {
    prev(currentItem);
});

document.getElementById('right').addEventListener('click', function () {
    next(currentItem);
});


const swipe = (el) => {

    let startX = 0;
    let startY = 0;
    let distanceX = 0;

    el.addEventListener('mousedown', function (event) {
        startX = event.pageX;
        event.preventDefault();
    }, false);

    el.addEventListener('mouseup', function (event) {
        distanceX = Math.abs(startX - event.pageX);
        if (distanceX > 200) {
            if (startX > event.pageX) {
                prev(currentItem);
            } else {
                next(currentItem);
            }
        } else {
            if (event.target.classList.contains('slider__image')) {
                if (document.querySelector('div.slider__item.visible > div > div.slider__description > h2').firstChild.data === 'The Yallow') {
                    location.href = '../theyallow/iframe.html';
                } else {
                    location.href = '../repair_design_project/iframe.html';
                }
            }
        }
        event.preventDefault();
    }, false);

    el.addEventListener('touchstart', function (event) {
        startX = event.changedTouches[0].pageX;
        event.preventDefault();
    })

    el.addEventListener('touchend', function (event) {
        distanceX = Math.abs(startX - event.changedTouches[0].pageX);
        if (distanceX > 200) {
            if (startX > event.pageX) {
                prev(currentItem);
            } else {
                next(currentItem);
            }
        } else {
            if (event.target.classList.contains('arrow')) {
                if (event.target.classList.contains('arrow-right')) {
                    next(currentItem);
                } else {
                    prev(currentItem);
                }
            } else {
                if (document.querySelector('div.slider__item.visible > div > div.slider__description > h2').firstChild.data === 'The Yallow') {
                    location.href = '../theyallow/iframe.html';
                } else {
                    location.href = '../repair_design_project/iframe.html';
                }
            }
        }
        event.preventDefault();
    }, false);
}

var el = document.querySelector('.slider');
swipe(el);
