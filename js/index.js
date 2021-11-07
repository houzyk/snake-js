const grids = document.querySelectorAll('.grid');

const startGame = () => {
  let randomSnake = Math.round(Math.random() * 400);
  let initialRandomFood = Math.round(Math.random() * 380);
  // * Ensures that snake head is not in the first column of the snake grid
  for (let nonStartingGrid = 0; nonStartingGrid < 400; nonStartingGrid+= 20) {
    if (randomSnake === nonStartingGrid) randomSnake += 1;
  }
  // * Ensures that snake head is not in the last column of the snake grid
  for (let nonStartingGrid = 19; nonStartingGrid <= 400; nonStartingGrid+= 20) {
    if (randomSnake === nonStartingGrid) randomSnake -= 1;
  }
  grids[randomSnake].classList.add('snake-head');
  grids[randomSnake - 1].classList.add('snake-body');
  // * Ensures that food is not initially on snake's body
  if (initialRandomFood === randomSnake || initialRandomFood === randomSnake - 1) initialRandomFood + 2;
  grids[initialRandomFood].classList.add('food');
}

const gamePlay = (key) => {
  console.log(key)
}

// TODO: Pressing Playbutton
const playButton = document.getElementById('playbutton');
playButton.addEventListener('click', (event) => {
  if (event.currentTarget.innerText === "Start") {
    event.currentTarget.innerText = "Stop";
    startGame();
    window.addEventListener('keyup', (event) => {
      gamePlay(event.key);
    });
  } else {
    event.currentTarget.innerText = "Start";
    window.location.reload();
  }
});
