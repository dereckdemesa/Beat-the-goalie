const gameArea = document.querySelector('.game-area');
const scoreDisplay = document.getElementById('score');
const currentPlayerDisplay = document.getElementById('currentPlayer');

let scores = [0, 0];
let currentPlayer = 0;
let lastClickTime = 0;

// Creating new a new circle with this function
function createCircle() {
    // console.log('Creating circle..');
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.addEventListener('click', () => {
        const now = Date.now();
        // checks if the player clicks too fast
        if (now -lastClickTime < 1000) {
            alert('Too Fast! You Lose!');
            scores[currentPlayer] = 0;
        } else {
            scores [currentPlayer]++;
        }
        lastClickTime = now;
        scoreDisplay.textContent = scores[currentPlayer];
    }
)}