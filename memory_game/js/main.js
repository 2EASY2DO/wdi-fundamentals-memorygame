var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/queen-of-hearts.png"
  },
];
var cardsInPlay = [];

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('img', 'images/back-png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardimage)
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

createBoard();
