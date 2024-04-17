const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

// canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let marioX = 50;
let marioY = canvas.height - 70;
let shellX = canvas.width - 100;
let shellY = canvas.height - 70;

// to move Mario
function moveMario(direction) {
    const step = 10;
    if (direction === 'left' && marioX > 0) {
        marioX -= step;
    } else if (direction === 'right' && marioX < canvas.width - 50) {
        marioX += step;
    }
}

// to make Mario jump
let isJumping = false; 

function marioJump() {
    const jumpHeight = 50;
    if (!isJumping) {
        isJumping = true;
        marioY -= jumpHeight; 
        setTimeout(() => {
            marioY += jumpHeight; 
            isJumping = false; 
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
        marioJump();
    }
});

const backgroundImage = new Image();
backgroundImage.onload = function() {
    
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

backgroundImage.src = './images/mario-underground-end.gif';


const marioImage = new Image();
marioImage.onload = function() {
   
    ctx.drawImage(marioImage, marioX, marioY, 50, 70); 
};
marioImage.src = './images/mario_png.png'; 


const shellImage = new Image();
shellImage.onload = function() {
    // Draw shell image onto the canvas
    ctx.drawImage(shellImage, shellX, shellY, 30, 30); 
};
shellImage.src = './images/koopa_shell.png'; 

