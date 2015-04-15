


// Filter cards: we only want questions from the "Base" expansion


for (var i in masterCards) {
	var card = masterCards[i];
	
	if (card.expansion !== "Base" || card.cardType !== "Q") {
		delete masterCards[i];
	}
}


// Squash the data
var questions = masterCards.filter(function(i){return i!==undefined});


// Shuffle the cards
function shuffle(array) {
	var tmp, current, top = array.length;

	if(top) while(--top) {
		current = Math.floor(Math.random() * (top + 1));
		tmp = array[current];
		array[current] = array[top];
		array[top] = tmp;
	}

	return array;
}

shuffle(questions);

var count = 0;



function drawNextQuestion(){
	var text;
	var numAnswers = 1;
	
	document.getElementById('pick2').style.display='none';
	document.getElementById('pick3').style.display='none';
	
	if (count in questions) {
		text = questions[count].text;
		numAnswers = questions[count].numAnswers;
		count++;
	} else {
		text = "You have played the entire deck of questions, and you are horrible people. Take a break."
	}
	
	text = text.replace(/_/g, "_____________");
	
	document.getElementById('question').innerHTML = text;
	
	if (numAnswers === 2) { document.getElementById('pick2').style.display='block'; }
	if (numAnswers === 3) { document.getElementById('pick3').style.display='block'; }
}

document.addEventListener('keyup', drawNextQuestion);
document.addEventListener('click', drawNextQuestion);

// Load first question when the thing loads
document.addEventListener("DOMContentLoaded", drawNextQuestion);


