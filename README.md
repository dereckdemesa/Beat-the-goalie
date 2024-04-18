# Jump

The Jump Game is a web-based arcade game where the arrow keys guide Mario to leap over incoming shells and rack up points. It offers a nostalgic gaming experience with simple controls and a challenging gameplay loop.

![Jump Game](./images/Image%204-17-24%20at%205.16%20PM.jpg)

## Table of Contents

- [Features](#features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Usage](#usage)


## Features

- Player can control the character to move left and right.
- Player can make the character jump to avoid obstacles.
- Score counter increases each time the character successfully jumps over an obstacle.
- Game over notification appears when the character collides with an obstacle.

## How to Play

1. Use the left and right arrow keys to move the character.
2. Press the up arrow key to make the character jump.
3. Avoid colliding with incoming green shell.
4. Try to achieve the highest score possible by jumping over obstacles.

``js 
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
              score++; // score goes up when Mario successfully jumps over the shell
              scoreSpan.textContent = score; // Update scoreboard
          }, 300);
      }
  }
  ``



1. Clone the repository:
- git clone: https://github.com/dereckdemesa/Jump.git
- clone repository into your terminal.
- open.index.html

Usage:

Use the arrow keys to control the character.
Jump over obstacles to increase your score.
Avoid colliding with obstacles to prevent game over.

