var Word = require("./word.js");


var Play = function() {
	this.wordBank = ["blue", "red", "yellow", "pink", "purple", "magenta", "green", "black", "white", "orange"];

	this.chooseRandom = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
	this.chosenWord = new Word(this.chooseRandom);
}

var constructorHangman = new Play();



module.exports = Play;