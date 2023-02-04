<!DOCTYPE html>
<html>
<head>
  <title>Snake Game</title>
  <style>
    #game-board {
      width: 500px;
      height: 500px;
      background-color: #967b4f;
      border: 1px solid #715c3e;
      position: relative;
    }
    .snake-block {
      width: 20px;
      height: 20px;
      background-color: #5c5c5c;
      position: absolute;
    }
    .food-block {
      width: 20px;
      height: 20px;
      background-color: #c45c3e;
      position: absolute;
    }
  </style>
</head>
<body>
  <div id="game-board"></div>
  <script src="script.js"></script>
</body>
</html>
