
$(document).ready(function(){
	
	/*--- Variable Declarations ---*/
	var randomNumber;
	var guessNum;
	var guessTest;
	var guessCount;
	var validGuess;

	/*--- Create random number ---*/
	function createNumber() {
		var createdNumber = Math.floor((Math.random() * 100) + 1);
		console.log('Random Number = ' + createdNumber);
		return createdNumber;
	}  

	/*--- Generate New Game ---*/
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/* Click 'New Game' to invoke New Game function */ 
  	$('.new').click(function(){
  		console.log('Clicked NEW GAME');
  		newGame();
  	})

  	/* newGame function invoked by clicking 'New Game' */
  	function newGame() {
  		randomNumber = createNumber(); /* Generate new random number */
  		setFeedback("Make your Guess!"); /* Return h2#feedback to original text */
  		guessCount = 0; /* Return span#count to 0 */
  		displayCount();
  		$('#guessList').empty(); /* Clear ul#guessList */
  		clearInput();

  	}

  	/*--- Form Submission ---*/
  	$('form').submit(function(event) {
  		event.preventDefault();
  		var guessVal = $('#userGuess').val();
  		var guessNum = +guessVal;
  		console.log('Users Guess: ' + guessNum);
  		validGuess = checkGuess(guessNum);
  		if (validGuess) {
  			guessTest = tempFeedback(Math.abs(randomNumber - guessNum));
  			guessCount++;
  			displayCount();
  			$('#guessList').append('<li>' + guessNum + '</li>');
  		}
  		clearInput();
  	})


  	/*--- Diplay number of guesses ---*/
  	function displayCount() {
  		$('#count').text(guessCount);
  	}

  	/*--- Clear input box ---*/
  	function clearInput() {
  		$('#userGuess').val('');
  	}

  	/*--- Check user has provided a valid input and give feedback ---*/
  	function checkGuess(x) {
  		if (isNaN(x)) {
  			setFeedback('Oops! Please guess with a number.');
  			return false;
  		}
  		else if (x != Math.floor(x)) {
  			setFeedback('Oops! Please guess with an integer. Not a decimal.');
  			return false;
  		}
  		else if (x < 1 || x > 100) {
  			setFeedback('Oops! Please guess with a number between 1 and 100.');
  			return false;
  		}
  		else {
  			return true;
  		}
  	}
  	

  	/* Post feedback on the user's guess */
  	function tempFeedback(num) {
  		console.log('Form has been submitted');
  		if (num == 0) {
  			setFeedback('Correct Answer! You Win!');
  		}
  		else if (num > 0 && num <= 5) {
  			setFeedback('Your Guess is Boiling Hot!');
  		}
  		else if (num > 5 && num <= 10) {
  			setFeedback('Your Guess is Very Hot');
  		}
  		else if (num > 10 && num <= 20) {
  			setFeedback('Your Guess is Hot');
  		}
  		else if (num > 20 && num <= 30) {
  			setFeedback('Your Guess is Warm');
  		}
  		else if (num > 30 && num <= 40) {
  			setFeedback('Your Guess is Cold');
  		}
  		else if (num > 40 && num <= 50) {
  			setFeedback('Your Guess is Very Cold');
  		}
  		else {
  			setFeedback('Your Guess is Freezing Cold');
  		}
  	}
  	

  	/* Setting feedback type */
  	function setFeedback(feedback) {
  		$('#feedback').text(feedback);
  	}

});


