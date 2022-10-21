//create questionsArr variable to store questions in, needs to contain at least
// 5 question objects, options need to contain at least 2 choices
var questionsArr = [
    {
        question: 'Who is the author of Wuthering Heights?',
        answer: 'Emily Bronte',
        options: [
            'Shakespeare',
            'Jane Austen',
            'Emily Bronte',
            'Hannah Cole',
        ]
    },
    {
        question: 'Who directed Pulp Fiction?',
        answer: 'Quentin Tarantino',
        options: [
            'Alfred Hitchcock',
            'Steven Spielberg',
            'Martin Scorcese',
            'Quentin Tarantino',
        ]
    }
]

var score = 0;
var timer;
var total = questionsArr.length;
var currentQuestion = 0;
var timerId

//  create start quiz button
var quizButton = document.querySelector('button');
quizButton.setAttribute('id', 'start-quiz');
var quizGame = document.getElementById('quiz')
quizGame.appendChild(quizButton);

/*  create timer 
function startTimer() {
    var timerId = setInterval(function () {
        var time = Number(timer.textContent)
        if (time > 0) {
            timer.textContent = time - 1
        } else {
            stopTimer()
        }
    }, 1000);
}
*/

function stopTimer() {
    clearInterval(timerId)
    countEl.textContent = ""
}

// create quiz for each time user clicks a button, regardless of right or wrong answer 
quizButton.onclick = function quizGenerate() {
    quizGame.removeChild(quizButton);

    for (var i = 0; i < questionsArr.length; i++) {
        // create other variables 
        /// create p element 
        var paragraph = document.createElement('p');
        quizGame.appendChild(paragraph);
        //create div to contain answer buttons
        var containerDiv = document.createElement('div');
        quizGame.appendChild(containerDiv);

        //create 4 buttons for each div
        var answerButton1 = document.createElement('button');
        var answerButton2 = document.createElement('button');
        var answerButton3 = document.createElement('button');
        var answerButton4 = document.createElement('button');

        containerDiv.appendChild(answerButton1);
        containerDiv.appendChild(answerButton2);
        containerDiv.appendChild(answerButton3);
        containerDiv.appendChild(answerButton4);



        //create answer buttons 
        answerButton1.textContent = questionsArr[i].options[0]
        answerButton2.textContent = questionsArr[i].options[1]
        answerButton3.textContent = questionsArr[i].options[2]
        answerButton4.textContent = questionsArr[i].options[3]
        paragraph.textContent = questionsArr[i].question;

        //start timer and calculate score 
        var response = document.getElement('button'.textContent)
            if (response == questionsArr[i].answer) {
                score++
            } else { }

        
    }

    var finalScore = 100 * (score / total);


}

// on page load, display start quiz button (id user has never played game before)
//call #start-quiz id to start, identified in variables
//create functions to input into quiz function for if/else statements (one for first page load,
// other to display previous score)
function firstLoading() {
    if (localStorage.getItem('finalScore') === false) {
        //display the start button, and on button click you can start the quiz
        quizGenerate();
    }
}

function previousScore() {
    if (localStorage.getItem('finalScore') === true) {
        //show previous score and display the start button
    }

}


