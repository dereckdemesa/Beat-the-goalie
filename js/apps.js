const mario = document.querySelector('.mario');
const shell = document.querySelector('.shell');
const scoreSpan = document.getElementById('scoreSpan');
const winnerDisplay = document.getElementById('winner');

let marioScore = 0;
let shellScore = 0;
let marioCounter = 0;
let shellCounter = 0;
let checkDeadInterval; // for collision

function marioJump(event) {
  if (event.key === ' ' || event.key === 'Spacebar') {
      console.log('Mario jumps');
  }
}
