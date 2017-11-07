var Letter = function (letters) {
	this.line = "_";
	this.letter = letters;
	this.appear = false;

	this.checkLetter = function(input) {
		if (this.letter === input) {
			this.line = this.letter;
			return true;
		}
			return false;
	}

	this.showLetters = function () {
		return this.line;
	}
};

module.exports = Letter;