console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push("cardOne");
console.log("User flipped king");

var cardTwo = cards[3];
cardsInPlay.push("cardTwo");
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	//check if length of array is equal to 2
	if (cardsInPlay[2] === cardsInPlay[3])
	alert("You found a match!");
	else
	alert("Sorry try again.");
	}