const playButton = document.getElementById('playbutton');
const grids = document.querySelectorAll('.grid');
const randomFood = Math.round(Math.random() * 399) + 1;

const startGame = () => {
  console.log("started");
}

playButton.addEventListener('click', (event) => {
  if (event.currentTarget.innerText === "Start") {
    startGame();
    event.currentTarget.innerText = "Stop";
  } else {
    event.currentTarget.innerText = "Start";
  }
});
