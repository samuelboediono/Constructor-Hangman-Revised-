var prompt = require("prompt");
var Play = require('./wordBank.js');
var hangman = new Play();
var remainingGuesses = 10;

prompt.start();
playingTheGame(remainingGuesses);

function playingTheGame (guess) {
	console.log("Guesses Remaining: " + guess);
	if(hangman.chosenWord.compareWord() === true) {
		console.log("You Win!!!");
		return;
	}

	if(guess <= 0) {
		console.log("Game Over!!! You Lost!!!");
		return;
	}

	console.log(hangman.chosenWord.show());

	prompt.get(["theWord"], function(err, result) {
		if(err) {
			return err;
		}

		if(hangman.chosenWord.wordFound(result.theWord) === false) {
			guess --;
		}

		playingTheGame(guess);
	});


}