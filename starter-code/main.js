var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var clickOne = cardOne;
var clickTwo = cardThree;

if(clickOne === clickTwo) {
  alert("You found a match!");
} else {
  alert("Whoops, those don't match. Try again.");
}

var gameBoard = document.getElementById('game-board');
function createBoard() {
	for(var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}
