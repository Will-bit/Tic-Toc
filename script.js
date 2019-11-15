/*const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8],
];
*/
var game = document.querySelectorAll(".w")  // W is name of table, linking HTML cellIndex
var currentPlayer = "X"
/// Win column for game
let winningCom =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// Letting me select everything in my table, all tds
game.forEach(function(square){
  square.addEventListener('click', spotClicked);
});
let xClicks=[];
let oClicks = [];

 

/// Jordan helped; Alter between X and O.  Current player set for X
function spotClicked(){
  game.innerHTML=currentPlayer;
  if(currentPlayer === "X"){
    event.target.innerHTML="X";
    xClicks.push(game.id);
    checkForWinner();
    currentPlayer = "O";
   
  } else if (currentPlayer == 'O'){
    event.target.innerHTML ="O";
    oClicks.push(game.id);
    checkForWinner();
    currentPlayer = "X";
    
  }
}

// Check for winner via array
function checkForWinner() {
  winningCom.forEach(function(combo) {
    let winArray = [];


    combo.forEach(function(number){
      if(xClicks.join().includes(number)){
        winArray.push('X')
      }   else if(oClicks.join().includes(number)){
        winArray.push('O')
      }
    });

    setTimeout(function(){
  if(winArray.join() == 'X,X,X') {
    alert('X wins');
    clear();
  } else if(winArray.join() == "O,O,O") {
  alert("O Wins");
  clear();
 }
}, 50);
  })
}


    function clear(){
      xClicks = [];
      oClicks = [];

      currentPlayer = "X";
    
      
      for(let square of game){
      square.innerHTML= '';
    }
    }

/* square.forEach(function{
game.innerHTML */

