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
  // ! 0 FOR SNAKE HEAD, 1 FOR SNAKE BODY
  grids[randomSnake].classList.add('snake-head');
  grids[randomSnake].dataset.game = 0;
  grids[randomSnake - 1].classList.add('snake-body');
  grids[randomSnake - 1].dataset.game = 1;
  // * Ensures that food is not initially on snake's body
  if (initialRandomFood === randomSnake || initialRandomFood === randomSnake - 1) initialRandomFood + 2;
  // ! 3 FOR FOOD
  grids[initialRandomFood].classList.add('food');
  grids[initialRandomFood].dataset.game = 2;
  return [randomSnake, randomSnake - 1];
}

// TODO
const loseGame = () => {}

// TODO
const gamePlay = (snakeInitialPosition) => {
  const initialHeadPos = snakeInitialPosition[0];
  const initialBodyPos = snakeInitialPosition[1];
  window.addEventListener('keyup', (event) => {
    console.log(event.key);
  });
}

const playButton = document.getElementById('playbutton');
playButton.addEventListener('click', (event) => {
  if (event.currentTarget.innerText === "Start") {
    event.currentTarget.innerText = "Stop";
    gamePlay(startGame());
  } else {
    event.currentTarget.innerText = "Start";
    window.location.reload();
  }
});
