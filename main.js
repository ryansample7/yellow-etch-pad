let color = "black";

function populateBoard(size) {
 let board = document.querySelector(".board");
 let squares = board.querySelectorAll("div");
 squares.forEach((div) => div.remove());
 board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
 board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;
for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "yellow";
    board.insertAdjacentElement("beforeend", square);
   }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
      console.log("too many squares");    
 }
}

function colorSquare() {
  if ((color === "random")){
  var c = 'hsl(${Math.random() * 360}, 100%, 50%)';
  console.log("color is: " + c);
  this.style.backgroundColor = c;
  } else {
  this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
    color = choice;
}


function resetBoard() {
    let board = document.querySelector(".board");
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor = 'yellow');
}
