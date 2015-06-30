
$(document).ready(function() {

	// Global variables
	var count = 0;
	var randomNumber;

	// Computer generates a random number
  	function getRandomNumber() {
  		randomNumber = Math.floor((Math.random() * 100) + 1);
  		console.log(randomNumber);
  	};

  	getRandomNumber();

  	// Tracks user's guesses
  	function keepTrack() {
  		var userInput = $('input#userGuess').val();
  		count++;
  		$('#count').text(count);
  		$('#guessList').prepend('<li>' + userInput + '</li>');
  		$('input#userGuess').val('');
  	};

  	// Starts Hot or Cold game
  	function giveFeedback(num) {
  		if( num == 0 ) {
  			$('#feedback').text('CORRECT!');
  			$('#guessButton').attr('disabled', true);
  			$('#userGuess').attr('disabled', true);
  		}
  		else if( num <= 5 ) {
  			$('#feedback').text("I'm SWEATIN'! Keep going!");
  		}
  		else if( num <= 10 ) {
  			$('#feedback').text('So hot!');
  		}
  		else if( num <= 20 ) {
  			$('#feedback').text("It's getting hot in here!");
  		}
  		else if( num <= 30) {
  			$('#feedback').text('Warmer!');
  		}
  		else if( num <= 40) {
  			$('#feedback').text('Still cool...');
  		}
  		else if( num <= 50) {
  			$('#feedback').text('Cold!');
  		}
  		else {
  			$('#feedback').text('Frozen! Try again!');
  		}
  	};

  	//Evaluates user input
  	$('#guessButton').click(function(){
  		var userInput = $('input#userGuess').val();
  		if (userInput >= 1 && userInput <= 100) {
  			keepTrack();
  			giveFeedback(Math.abs(userInput - randomNumber));
  			return false;
  		}
  		else {
  			alert('Please enter a number between 1 and 100!');
  			$('input#userGuess').val('');
  			return false;
  		}
  	});

	// New game
	function newGame() {
		count = 0;
		getRandomNumber();
		$('#feedback').text('Make Your Guess!');
		$('#guessList').empty();
		$('#count').text(count);
		$('#userGuess').attr('disabled', false);
		$('#guessButton').attr('disabled', false);
	};
  	
  	$('.new').click(function() {
  		newGame();
  	});

	// Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	// Hide information modal box
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});