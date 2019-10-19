document.getElementById('back').addEventListener('click', () => {    
    location.href = '../index.html';
});

let isDesktop = true;

document.addEventListener('DOMContentLoaded', () => {
    if (window.screen.width < 700) {
        document.getElementById('switch').classList.add('inVisible');        
   } 
});

document.getElementById('switch').addEventListener('click', () => {      
    if (isDesktop) {
        document.getElementById('iframe').style.width = '390px';
        document.getElementById('switch').firstChild.data = 'Desktop';
        isDesktop = false;
    } else {
        document.getElementById('iframe').style.width = '100%';
        document.getElementById('switch').firstChild.data = 'Mobile';
        isDesktop = true;
    }
});

