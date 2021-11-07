const grids = document.querySelectorAll('.grid');

// const foodSpawn = () => {
//   const randomFood = Math.round(Math.random() * 399) + 1;
// }

const startGame = () => {
  const randomSnake = Math.round(Math.random() * 400);
  for (let nonStartingGrid = 0; nonStartingGrid < 400; nonStartingGrid+= 20) {
    if (randomSnake === nonStartingGrid) randomSnake += 1;
  }
  grids[randomSnake].classList.add('snake-active');
  grids[randomSnake - 1].classList.add('snake-active');
}

// * Playbutton
const playButton = document.getElementById('playbutton');
playButton.addEventListener('click', (event) => {
  if (event.currentTarget.innerText === "Start") {
    startGame();
    event.currentTarget.innerText = "Stop";
  } else {
    event.currentTarget.innerText = "Start";
    window.location.reload();
  }
});
