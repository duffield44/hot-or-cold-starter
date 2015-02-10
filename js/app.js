
$(document).ready(function(){
	
	/*--- Variable Declarations ---*/
	var randomNumber;
	var guessNum;
	var guessTest;

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

  	/*------- 'New Game' button Functionality -----------*/

  	/* Click 'New Game' to invoke New Game function */ 
  	$('.new').click(function(){
  		console.log('Clicked NEW GAME');
  		newGame();
  	})

  	/* newGame function invoked by clicking 'New Game' */
  	function newGame() {
  		randomNumber = createNumber(); /* Generate new random number */
  		setFeedback("Make your Guess!"); /* Return h2#feedback to original text */
  		/* Return span#count to 0 */
  		$('#guessList').empty(); /* Clear ul#guessList */
  	}

  	/*--- Form Submission ---*/
  	$('form').submit(function(event) {
  		event.preventDefault();
  		var guessVal = $('#userGuess').val();
  		var guessNum = +guessVal;
  		console.log('Users Guess: ' + guessNum);
  		guessTest = tempFeedback(Math.abs(randomNumber - guessNum));
  	})


  	/* User's Guess */
  	

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


