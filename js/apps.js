const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

// canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let marioX = 50;
let marioY = canvas.height - 108;
let shellX = canvas.width - 100;
let shellY = canvas.height - 70;
let isJumping = false;

function moveShell() {
  const shellSpeed = 8; // aadjust the speed of the shell
  shellX -= shellSpeed; // moves the shell horizontally
  if (shellX < -30) { 
      shellX = canvas.width; 
  }
  redrawCanvas();
}
// Set interval to move the shell periodically
setInterval(moveShell, 50); 


// to move Mario
function moveMario(event) {
    const step = 10;
    if (event.key === 'ArrowLeft' && marioX > 0) {
        marioX -= step;
    } else if (event.key === 'ArrowRight' && marioX < canvas.width - 50) {
        marioX += step;
    }
    redrawCanvas();
}
document.addEventListener('keydown', moveMario);

// to make Mario jump
function marioJump() {
    const jumpHeight = 50;
    if (!isJumping) {
        isJumping = true;
        marioY -= jumpHeight; 
        redrawCanvas();
        setTimeout(() => {
            marioY += jumpHeight; 
            isJumping = false; 
        }, 300);
    }
}

function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(marioImage, marioX, marioY, 50, 70);
  ctx.drawImage(shellImage, shellX, shellY, 30, 30);
}

// for arrow keys presses to move Mario
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveMario('left');
    } else if (event.key === 'ArrowRight') {
        moveMario('right');
    } else if (event.key === 'ArrowUp') {
        marioJump('up');
    }
});

const backgroundImage = new Image();
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};
backgroundImage.src = './images/mario-underground-end.gif';

const marioImage = new Image();
marioImage.onload = function() {
  // console.log('mario image')
  ctx.drawImage(marioImage, marioX, marioY, 50, 70); 
};
marioImage.src = './images/mario_png.png'; 


const shellImage = new Image();
shellImage.onload = function() {
    
    ctx.drawImage(shellImage, shellX, shellY, 30, 30); 
};
shellImage.src = './images/koopa_shell.png'; 

