
//  Here is a simple timer that ocntrols the game. 
// The timer starts 1 sec after the game html loads. 
// The timer then assigns 30 seconds for the entire game. 
// Then, it reminds the player than 10 seconds remains to go.
// Finally, it declared the time is over. 

setTimeout(fiveSeconds, 1000 * 1);
setTimeout(tenSeconds, 1000 * 30);
setTimeout(timeUp, 1000 * 30);


function fiveSeconds() {

  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
  console.log("30 seconds left");
}

function tenSeconds() {

  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

}


//Here is the code that controls the actual game. 

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Finfinne") {
		correct++;
}
	if (question2 == "Russia") {
		correct++;
}	
	if (question3 == "Canberra") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "It is okay", "You better work harder"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	