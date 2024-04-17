const mario = document.querySelector('.mario');
const shell = document.querySelector('.shell');
const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

// canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let marioX = 50;
let marioY = canvas.height - 100;
let shellX = canvas.width - 100;
let shellY = canvas.height - 100;

const marioImage = new Image();
marioImage.src = './images/mario_png.png';

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
    }
}

// for arrow key presses to move Mario
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
      moveMario('left');
  } else if (event.key === 'ArrowRight') {
      moveMario('right');
  } else if (event.key === 'ArrowUp') {
      marioJump(event);
  }
});

const backgroundImage = new Image();
backgroundImage.onload = function() {
    // draws background image into canvas element
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};
backgroundImage.src = './images/mario-underground-end.gif';