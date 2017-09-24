$(document).ready(function() {

	//multiple choice questions object
	var questions = [
		{
			question: "1) A very small man can cast a very large shadow.",
			answerChoice1: "Petyr Baelish",
			answerChoice2: "Tyrion Lannister",
			answerChoice3: "Lord Varys",
			answerChoice4: "Davos Seaworth",
		}, {
			question: "2) Which of the following is not a name of Daenerys' dragons?",
			answerChoice1: "Drogon",
			answerChoice2: "Balerion",
			answerChoice3: "Viserion",
			answerChoice4: "Rhaegon",
		}, {
			question: "3) The Sword of the Morning is the nickname of which legendary swordsman?",
			answerChoice1: "Gerold Dayne",
			answerChoice2: "Barristan Selmy",
			answerChoice3: "Rhaegar Targaryen",
			answerChoice4: "Arthur Dayne",
		}, {
			question: "4) Member of the Brotherhood without Banners known for using a flaming sword in combat.",
			answerChoice1: "Sandor Clegane",
			answerChoice2: "Beric Dondarrion",
			answerChoice3: "Thoros of Myr",
			answerChoice4: "Tormund Giantsbane",
		}, {
			question: "5) Jorah Mormont forfeited his inheritance and was banished from Westoros for what reason?",
			answerChoice1: "Serving as a spy for Varys",
			answerChoice2: "Refusing to marry the daughter of the king",
			answerChoice3: "Refusing to join the Night's Watch",
			answerChoice4: "Selling poachers into slavery",
		}, {
			question: "6) The infamous slave soldiers known as the Unsullied are from which of the following cities?",
			answerChoice1: "Astapor",
			answerChoice2: "Pentos",
			answerChoice3: "Volantis",
			answerChoice4: "Braavos",
		}
	];

	//correct answers array for the quetions object
	var correctAnswers = [
		questions[0].answerChoice3,
		questions[1].answerChoice2,
		questions[2].answerChoice4,
		questions[3].answerChoice3,
		questions[4].answerChoice4,
		questions[5].answerChoice1,
	];

	//set up variables to be called on by diff functions
	var questionsIndex = 0;
	var countDown = 11;
	var questionsCorrect = 0;
	var questionsIncorrect = 0;
	var questionsUnanswered = 0;

	//function that will iterate through the all the questions in the questions object
	function questionDisplayer () {
			
		$("#questionHolder").html(
			questions[questionsIndex].question + "<br>" + "<br>" + 
			"<button class='answerButton'>" + questions[questionsIndex].answerChoice1 + "</button>" + "<br>" + 
			"<button class='answerButton'>" + questions[questionsIndex].answerChoice2 + "</button>" + "<br>" + 
			"<button class='answerButton'>" + questions[questionsIndex].answerChoice3 + "</button>" + "<br>" + 
			"<button class='answerButton'>" + questions[questionsIndex].answerChoice4 + "</button>"
		);
	};


	//button that will start the game and set the timer into motion
	$(".startButton").on("click", function () {
		$(this).parent().remove();
		questionDisplayer();
		var counter = setInterval(timer, 1000);
		answerChoiceClicker();
	});

	//boolean set up in order to be able to turn timer function off
	var runTimer = true;

	//timer function will press quiz forward if the timer countdown reaches 0
	function timer() {

		if(runTimer === true) {
			countDown = countDown - 1;

			$("#timeRemaining").html("Time Remaining: " + countDown);

			if (countDown === 0 && questionsIndex < 5) {
				questionsUnanswered++;
				countDown = 11;
				questionsIndex++;
				questionDisplayer();
				answerChoiceClicker();
			}

			//this if statement is when quiz reaches its end and class function to display answers correct/incorrect/unasnwered
			//will error if this is taken out
			if (countDown === 0 && questionsIndex === 5) {
				quizResults();
			}
		}
	};

	//click function so quiz moves forward when user clicks an answer choice
	function answerChoiceClicker () {

		var beenClicked = $(".answerButton").on("click", function () {

			//records if whether user got the incorrect answer by seeing if it appears in correct answer array
			//else count up questions correct variable
			if (correctAnswers.indexOf(($(this).html())) === -1) {
				questionsIncorrect++;
			} else {
				questionsCorrect++;
			}

			countDown = 11;
			questionsIndex++;

			//if its not the last question, display next question and enable click function
			if(questionsIndex < 6) {
				questionDisplayer();
				answerChoiceClicker();
			}

			//if the last question has been reached, then run quiz results function for user to see how well they did
			if (questionsIndex === 6) {
				quizResults();
			}

		});
	};

	//function that displays how many questions were correct, incorrect, or unanswered
	function quizResults () {

		//stops timer from running by turning off timer function
		runTimer = false;

		//empties timer div
		$("#timeRemaining").html("")

		$("#questionHolder").html(
			"Correct Answers: " + questionsCorrect + "<br>" +
			"Incorrect Answers: " + questionsIncorrect + "<br>" +
			"Unanswered: " + questionsUnanswered + "<br>" + "<br>"
		);

		//displays a reset button for user to click on
		$("#resetButton").html("<button class='btn btn-outline-warning resetButton'>Try Again</button>");
	};

	//when reset button is clicked, reset all values and run the game again
	$("#resetButton").on("click", function () {

		$("#resetButton").html("");

		questionsCorrect = 0;
		questionsIncorrect = 0;
		questionsUnanswered = 0;
		questionsIndex = 0;

		questionDisplayer();

		runTimer = true;
		timer();

		answerChoiceClicker();

	});

});






