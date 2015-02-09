
$(document).ready(function(){
	
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
  		console.log('Clicked .new');
  		newGame();
  	})

  	var num = 0;

  	/* newGame function invoked by clicking 'New Game' */
  	function newGame() {

  		/* Generate new random number */
  		var num = Math.floor((Math.random() * 100) + 1);
  		console.log(num);

  		/* Return h2#feedback to original text */
  		setFeedback("Make Your Guess");
  		/* Return span#count to 0 */
  		/* Clear ul#guessList */
  		$('#guessList').empty();

  	}


  	

  	/* Setting feedback type */
  	function setFeedback(feedback) {
  		$('#feedback').text(feedback);
  	}

});


