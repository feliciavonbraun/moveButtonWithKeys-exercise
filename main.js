window.addEventListener('load', main);

const position = {
    left: 0,
    top: 0,
}

function main() {
    addEventListener();
}

function addEventListener (){
    document.addEventListener('keydown', moveCircle);
}


function moveCircle(event) {

    switch (event.key) {
        case 'ArrowUp': position.top -= 1; break;
        case 'ArrowDown': position.top += 1; break; 
        case 'ArrowLeft': position.left -= 1; break; 
        case 'ArrowRight': position.left += 1; break;
        default: 
            console.log('använd piltangenterna')
    }

    updateCirclePosition();
}

function updateCirclePosition() {
    const circle = document.querySelector('div');
    circle.style.left = position.left + '%';
    circle.style.top = position.top + '%';

}