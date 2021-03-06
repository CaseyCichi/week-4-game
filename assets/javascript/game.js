$(document).ready(function() {

	var crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = (Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true;
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}		

for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		   if (counter == numberToGuess){
		      $('#status').text('Nice Going!');
		      wins ++;
		      $('#win').text(wins);
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } 
			else if ( counter > numberToGuess){
		        $('#status').text('Better Luck Next time!')
		        losses ++;
		        $('#loss').text(losses);
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }



		});
	}

});


