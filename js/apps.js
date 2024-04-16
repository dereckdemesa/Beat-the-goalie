document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById("character");
    const block = document.getElementById("block");
    const scoreSpan = document.getElementById("scoreSpan");
  
    let counter = 0;
  
    // Function for player's jump when space bar is pressed
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
  
    // Add event listener for click event on the HTML document
    document.documentElement.addEventListener('click', jump);
  
    // Check collision and score
    const checkDead = setInterval(() => {
      // console.log('Checking collision and score...');
      const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Game Over. Your score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 2s infinite linear";
      } else {
        counter++;
        scoreSpan.textContent = Math.floor(counter / 100);
      }
    }, 10);
  });
  
  