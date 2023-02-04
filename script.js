const gameBoard = document.querySelector("#game-board");
const snake = [];
const food = {};
const blockSize = 20;
let direction = "right";

// Create the snake
for (let i = 0; i < 5; i++) {
  const snakeBlock = document.createElement("div");
  snakeBlock.classList.add("snake-block");
  snakeBlock.style.left = i * blockSize + "px";
  snake.push(snakeBlock);
  gameBoard.appendChild(snakeBlock);
}

// Generate a random location for the food
function generateFood() {
  const x = Math.floor(Math.random() * game
