const mario = document.querySelector('.mario');
const shell = document.querySelector('.shell');
const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

let marioCounter = 0;
let shellCounter = 0;
let checkDeadInterval; // variable to hold the interval for collision checking

// Function for mario jump when the space bar is pressed
function marioJump(event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        console.log('Mario jumps...');
        if (mario.classList.contains('animate')) {
            return;
        }
        mario.classList.add('animate');
        setTimeout(() => {
            mario.classList.remove('animate');
        }, 300);
        marioCounter++;
        scoreSpan.textContent = Math.floor(marioCounter / 100);
        checkWinner();
    }
}
