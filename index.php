<!DOCTYPE html>
<html>
<head>
  <title>Snake Game</title>
  <style>
    #game-board {
      width: 500px;
      height: 500px;
      background-color: #8B5E3C;
      margin: 0 auto;
      position: relative;
    }

    .snake-unit {
      width: 10px;
      height: 10px;
      position: absolute;
      background-color: #E9D67A;
    }
  </style>
</head>
<body>
  <div id="game-board">
    <div id="snake"></div>
    <div id="food"></div>
  </div>
  <p id="score">Score: 0</p>

  <script src="script.js"></script>
</body>
</html>
