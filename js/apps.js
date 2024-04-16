const character = document.getElementById("character");
const block = document.getElementById("block");
const scoreSpan = document.getElementById("scoreSpan");

let counter = 0;
let playerScore = 0;
let aiScore = 0;

// Function for players jump
function jump() {
  console.log('Player jumps...');
  if (character.classList.contains("animate")) {
    return;
  }
  character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  }, 300);
}