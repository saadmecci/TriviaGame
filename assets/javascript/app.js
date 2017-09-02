$(document).ready(function() {

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
			answerChoice1: "Thoros of Myr",
			answerChoice2: "Beric Dondarrion",
			answerChoice3: "Sandor Clegane",
			answerChoice4: "Tormund Giantsbane",
		}, {
			question: "5) Jorah Mormont forfeited his inheritance and was banished from Westoros for what reason?",
			answerChoice1: "Serving as a spy for Varys",
			answerChoice2: "Refusing to marry the daughter of the king",
			answerChoice3: "Refusing to join the Night's Watch",
			answerChoice4: "Selling poachers into slavery",
		}, {
			question: "6) The infamous slave soldiers known as the Unsullied are from which of the following cities?",
			answerChoice1: "Braavos",
			answerChoice2: "Pentos",
			answerChoice3: "Volantis",
			answerChoice4: "Astapor",
		}
	];

	var questionsIndex = 0;

	function questionDisplayer () {
			
		$("#questionHolder").html(questions[questionsIndex].question + "<br>" + "<br>" + 
			"<button id='button'>" + questions[questionsIndex].answerChoice1 + "</button>" + "<br>" + 
			"<button id='button'>" + questions[questionsIndex].answerChoice2 + "</button>" + "<br>" + 
			"<button id='button'>" + questions[questionsIndex].answerChoice3 + "</button>" + "<br>" + 
			"<button id='button'>" + questions[questionsIndex].answerChoice4) + "</button>";
	};

	var countDown = 21;

	function timer() {

		countDown = countDown - 1;

		$("#timeRemaining").html("Time Remaining: " + countDown);

		if (countDown === 0) {
			countDown = 21;
			questionsIndex++;
			questionDisplayer();
		}
	};
	
	$(".startButton").on("click", function () {

		$(this).parent().remove();

		questionDisplayer();

		var counter = setInterval(timer, 1000);

	});
  
});


//every time question choice is clicked counter should be reset, 
//make answer choices buttons
//record answer, unasnwered, and incorrect







