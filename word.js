var Letter = require('./letter.js');

var Word = function (data) {
	this.data = data;
	this.guessedWord = [];
	this.win = false;
	this.guesses = [];

	this.chooseValues = function() {
		for(var i = 0; i < this.data.length; i++) {
			var newWord = new Letter (this.data[i]);
			this.guessedWord.push(newWord);
		}
	}

	this.chooseValues();


	this.wordFound = function (chooseWords) {
		for (var i = 0; i < this.guesses.length; i++) {
			if(chooseWords === this.guesses[i]) {
				return true;
			}
		}
		console.log(chooseWords);
		var chosen = false;

		this.guesses.push(chooseWords);

		for (var i = 0; i < this.guessedWord.length; i++) {
			if(this.guessedWord[i].checkLetter(chooseWords)) {
				this.guessedWord[i].appear = true;
				chosen = true;
			}
		}

		return chosen;
	}


	this.compareWord = function () {
		for (var i = 0; i < this.data.length; i++) {
			if(this.data.charAt(i) != this.guessedWord[i].line) {
				return false;
			}
		}

		return true;
	}


	this.show = function () {
		var display = "";

		for(var i = 0; i < this.guessedWord.length; i++) {
			display += this.guessedWord[i].line + " ";
		}
		return display;
	}
}



module.exports = Word;