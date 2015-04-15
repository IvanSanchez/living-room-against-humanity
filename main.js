


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
		text = "Make a haiku."
		numAnswers=3;
	}
	
	text = text.replace(/_/g, "_____________");
	text = text.replace(/  /g, "<br/>");
	
	document.getElementById('question').innerHTML = text;
	
	if (numAnswers === 2) { document.getElementById('pick2').style.display='block'; }
	if (numAnswers === 3) { document.getElementById('pick3').style.display='block'; }
	
	
	
	if ('requestFullScreen' in document.body)
		document.body.requestFullScreen();
	
	if ('mozRequestFullScreen' in document.body)
		document.body.mozRequestFullScreen();
	
	if ('webkitRequestFullScreen' in document.body)
		document.body.webkitRequestFullScreen();
}

document.addEventListener('keyup', drawNextQuestion);
document.addEventListener('click', drawNextQuestion);


document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('question').innerHTML = "Press any key or click anywhere to become a horrible person.";
});


