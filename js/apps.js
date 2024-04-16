const character = document.getElementById("character");
const block = document.getElementById("block");
const scoreSpan = document.getElementById("scoreSpan");

let counter = 0;
let playerScore = 0;
let aiScore = 0;

// function for when you press the spacebar it jumps for the player
function jump() {
  // console.log('Player jumps...');
  if (character.classList.contains("animate")) {
    return;
  }
  character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  }, 300);
}

// event listener for keydown event
document.addEventListener('keydown', jump);

// check crash and the score
const checkDead = setInterval(() => {
    // console.log('checking collision and score')
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
      block.style.animation = "none";
      alert("Game Over. Your score: " + playerScore);
      counter = 0;
      playerScore = 0;
      block.style.animation = "block 1s infinite linear";
    } else {
      counter++;
      scoreSpan.textContent = Math.floor(counter / 100);
      playerScore = Math.floor(counter / 100); // Update player's score
    }
  }, 10);