   let score = 0;
   const gameButton = document.getElementById('gameButton');
   const scoreDisplay = document.getElementById('score');

   gameButton.addEventListener('click', () => {
       score++;
       scoreDisplay.textContent = `Score: ${score}`;
   });
