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
    }, {
        question: 'Who is the creator of the Mona Lisa?',
        answer: 'Leonardo DaVinci',
        options: [
            'Vincent VanGogh',
            'Leonardo DaVinci',
            'Sandro Botticelli',
            'Michelangelo de Ludovici'
        ]
    },
    {
        question: 'How many emperors ruled the Roman Empire?',
        answer: '71',
        options: [
            '56',
            '12',
            '32',
            '71',
        ]
    },
    {
        question: 'What is the planet closest to the sun?',
        answer: 'Mercury',
        options: [
            'Venus',
            'Neptune',
            'Mars',
            'Mercury',
        ]
    },


    {
        question: 'Which of these famous TV characters starred in the TV show, "Breaking Bad"?',
        answer: 'Walter White',
        options: [
            'Walter White',
            'Betty White',
            'Tim White',
            'Mike White',
        ]
    },
]

var correct = 0;
var total = questionsArr.length;
var i = 0;
var timeLeft = 30;


var quizButton = document.querySelector('button');
quizButton.setAttribute('id', 'start-quiz');
quizButton.setAttribute('class', 'btn')
var quizGame = document.getElementById('quiz')
quizGame.appendChild(quizButton);

var btn = document.getElementsByClassName('btn')

btn.onclick = function isClicked() {
    console.log('clicked')
}

quizButton.onclick = function eraseButton() {
    quizGame.removeChild(quizButton);
    startTimer();
    startQuiz()
}

function startQuiz() {
    for (i = 0; i < questionsArr; i++) {
        if ((btn.isClicked()) || (timeLeft = 0)) {
            i++;
        } 
    }

}

function startTimer() {
    var timerId = setInterval(function () {
        if (timeLeft > 0) {
            timerId.textContent = timeLeft - 1
        } else {
            timerId.textContent = ""
            clearInterval(timerId)
            setTimeout(function () {
            }, 1000)
        }
    }, 30000);
}

function quizGenerate() {
    // create paragraph for question content
    var paragraph = document.createElement('p');
    quizGame.appendChild(paragraph);
    paragraph.textContent = questionsArr[i].question;
    //create div to contain answer buttons
    var containerDiv = document.createElement('div');
    quizGame.appendChild(containerDiv);

    var answerButton1 = document.createElement('button');
    var answerButton2 = document.createElement('button');
    var answerButton3 = document.createElement('button');
    var answerButton4 = document.createElement('button');

    containerDiv.appendChild(answerButton1);
    containerDiv.appendChild(answerButton2);
    containerDiv.appendChild(answerButton3);
    containerDiv.appendChild(answerButton4);

    //set answer button classes to all be the same 
    answerButton1.setAttribute('class', 'btn');
    answerButton1.textContent = questionsArr[i].options[0];

    answerButton2.setAttribute('class', 'btn');
    answerButton2.textContent = questionsArr[i].options[1];

    answerButton3.setAttribute('class', 'btn');
    answerButton3.textContent = questionsArr[i].options[2];

    answerButton4.setAttribute('class', 'btn');
    answerButton4.textContent = questionsArr[i].options[3];

    var timerId = document.createElement('p');
    quizGame.appendChild(timerId);
    timerId.textContent = timeLeft;

}


var finalScore = 100 * (correct / total);

//create functions to input into quiz function for if/else statements (one for first page load,
// other to display previous score)

/*function firstLoading() {
    if (localStorage.getItem('finalScore') === false) {//display the start button, and on button click you can start the quiz
        quizGenerate();
    }

}
firstLoading()

function previousScore() {
    if (localStorage.getItem('finalScore') === true) {
        paragraph.textContent = 'finalScore'
        //show previous score and display the start button
    }
}

previousScore()*/
