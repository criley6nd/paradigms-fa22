const fs = require('fs');

class GameState{
	constructor(good_letters, bad_letters, correct_letters){
		this.good_letters = good_letters;
		this.bad_letters = bad_letters;
		this.correct_letters = correct_letters;
	}
}

function readWords() {
	let words = fs.readFileSync("five-letter-words.txt","utf8");
	var wordArr = []

	//read in words and ignore blank lines
	words.split("\r\n").forEach( word => {if(word) {wordArr.push(word)}})

	//sort the words and remove the star off of the common words
	//by sorting with the star, all the star words come first, so 
	//when the array is filtered later, those words show up first in the list
	wordArr = wordArr.sort().map(word => {
		if(word[0] == '*') {
			return word.replace('*','')
		}
		else {
			return word
		}})
	return wordArr;
}

function wordleHelper(state){
	//read in words
	var words = readWords()

	//use a filter to filter out words that don't match
	var retWords = words.filter( word => {
		//check if the words have known letters in the correct position
		for(let i = 0; i < 5; i++){
			if(word[i] != state.correct_letters[i] && state.correct_letters[i]){
				return false
			}
		}

		//check to make sure there are no bad letters
		for(let i = 0; i < state.bad_letters.length; i++){
			if(word.includes(state.bad_letters[i])){
				return false
			}
		}

		//check to make sure there is at least one of each good letter
		for(let i = 0; i < state.good_letters.length; i++){
			if(!word.includes(state.good_letters[i])){
				return false
			}
		}
		
		//keeps words that pass all tests
		return true
	})
	return retWords
}

state = new GameState(
	["S", "A", "R", "G"],
	["H", "D", "J", "N", "L", "M", "O", "Z"],
	["S", undefined, "G", undefined, undefined]
)