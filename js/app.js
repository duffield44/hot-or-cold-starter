
$(document).ready(function(){
	
	/*--- Variable Declarations ---*/
	var randomNumber;
	var guessNum;

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
  		var randomNumber = createNumber(); /* Generate new random number */
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
  		tempFeedback();
  	})


  	/* User's Guess */
  	

  	/* Post feedback on the user's guess */
  	function tempFeedback() {
  		console.log('Form has been submitted');
  		if (guessNum == randomNumber) {
  			setFeedback('Correct Answer!')
  		}
  		else {
  			setFeedback('Make your Guess!')
  		}
  		


  	}
  	

  	/* Setting feedback type */
  	function setFeedback(feedback) {
  		$('#feedback').text(feedback);
  	}

});


