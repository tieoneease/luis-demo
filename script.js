function turnElementTargetRed(event) {
  event.target.style["backgroundColor"] = "red";
}

function generateBoard(board) {
  console.log("generating board...");
  var NUM_ROWS = 3;
  var NUM_COLS = 3;

  board.addEventListener("click", turnElementTargetRed); // event delegation

  var currentRow;
  for (var i = 0; i < NUM_ROWS; ++i) {
    currentRow = document.createElement("div");
    currentRow.className = "row";
    for (var j = 0; j < NUM_COLS; ++j) {
      var box = document.createElement("div");
      box.className = "col";
      currentRow.appendChild(box);
    }
    board.appendChild(currentRow);
  }
  console.log("board generated");
}

function main() {
  // only runs after DOM loaded, so all DOM is available
  var board = document.getElementById("board");
  generateBoard(board);
}

document.addEventListener("DOMContentLoaded", function (event) {
  main();
});
