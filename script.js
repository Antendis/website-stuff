const board = document.getElementById("game-board");
const snake = document.getElementById("snake");
const food = document.getElementById("food");
const scoreCounter = document.getElementById("score");

let direction = "right";
let score = 0;
let x = 10;
let y = 10;

// Handle arrow key inputs
document.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 37: // Left arrow
      direction = "left";
      break;
    case 38: // Up arrow
      direction = "up";
      break;
    case 39: // Right arrow
      direction = "right";
      break;
    case 40: // Down arrow
      direction = "down";
      break;
  }
});

// Move the snake based on the direction
function move() {
  // Update the snake's position
  switch (direction) {
    case "left":
      x -= 10;
      break;
    case "up":
      y -= 10;
      break;
    case "right":
      x += 10;
      break;
    case "down":
      y += 10;
      break;
  }

  snake.style.left = x + "px";
  snake.style.top = y + "px";

  // Check for collision with food
  let foodX = parseInt(window.getComputedStyle(food).getPropertyValue("left"));
  let foodY = parseInt(window.getComputedStyle(food).getPropertyValue("top"));

  if (x === foodX && y === foodY) {
    score++;
    food.style.left = Math.floor(Math.random() * 49) * 10 + "px";
    food.style.top = Math.floor(Math.random() * 49) * 10 + "px";
  }

  // Update the score
  scoreCounter.innerHTML = `Score: ${score}`;

  // Keep the game loop running
  setTimeout(move, 100);
}

move();
