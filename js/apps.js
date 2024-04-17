const mario = document.querySelector('.mario');
const shell = document.querySelector('.shell');
const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

let marioCounter = 0;
let shellCounter = 0;
let checkDeadInterval; // variable to hold the interval for collision checking

// mario movements using arrow right & left
function moveMario(direction) {
  const marioLeft = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
  if (direction === 'left') {
      mario.style.left = `${marioLeft - 10}px`;
  } else if (direction === 'right') {
      mario.style.left = `${marioLeft + 10}px`;
  }
}

// handles the pressing of the arrow keys for marios movement
function moveMarioHandler(event) {
  if (event.key === 'ArrowLeft') {
    moveMario('left');
  } else if (event.key === 'ArrowRight') {
    moveMario('right');
  }
}


// for mario jump when the space bar is pressed
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

// Function to handle key presses for Mario's movement
function moveMarioHandler(event) {
  if (event.key === 'ArrowLeft') {
      moveMario('left');
  } else if (event.key === 'ArrowRight') {
      moveMario('right');
  }
}

// Function for Mario's jump when the space bar is pressed
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

// Function for Shell's jump at intervals
function shellJump() {
  console.log('Shell jumps...');
  if (shell.classList.contains('animate')) {
      return;
  }
  shell.classList.add('animate');
  setTimeout(() => {
      shell.classList.remove('animate');
  }, 300);
  shellCounter++;
}

