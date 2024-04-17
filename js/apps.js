const mario = document.querySelector('.mario');
const shell = document.querySelector('.shell');
const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

let marioScore = 0;
let shellScore = 0;

// to move Mario
function moveMario(direction) {
  const marioLeft = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
  const step = 10;
  if (direction === 'left') {
      mario.style.left = `${marioLeft - step}px`;
  } else if (direction === 'right') {
      mario.style.left = `${marioLeft + step}px`;
  }
}

// to make Mario jump
let isJumping = false; // Add this variable to track Mario's jumping state

function marioJump(event) {
    const jumpHeight = 50;
    if (event.key === 'ArrowUp' && !isJumping) {
        isJumping = true;
        mario.style.bottom = `${jumpHeight}px`;
        setTimeout(() => {
            mario.style.bottom = '0px';
            isJumping = false; // resets the jumping state after jump is complete
        }, 300);
        marioScore += 10;
        updateScore();
        checkWinner();
    }
}

// Event listener for arrow key presses to move Mario
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
      moveMario('left');
  } else if (event.key === 'ArrowRight') {
      moveMario('right');
  } else if (event.key === 'ArrowUp') {
      marioJump(event);
  }
});