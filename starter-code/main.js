
var cards = ["diamond", "diamond", "heart", "heart", "spade", "spade", "club", "club"]
var cardsInPlay = []

var board = document.getElementById('game-board');
function createBoard() {
	for(var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') === 'diamond') {
		this.innerHTML = "<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/96456-200.png' style='width:150px;height:200px;'>";
	} else if(this.getAttribute('data-card') === 'spade') {
		this.innerHTML = "<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/96457-200.png' style='width:150px;height:200px;'>";
	} else if(this.getAttribute('data-card') === 'heart') {
		this.innerHTML = "<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/96454-200.png' style='width:150px;height:200px;'>";
	} else {
		this.innerHTML = "<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/96455-200.png' style='width:150px;height:200px;'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if(cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();
