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
var timeLeft = 30;
var total = questionsArr.length;
var i = 0

//  create start quiz button
// on page load, display start quiz button (id user has never played game before)
//call #start-quiz id to start, identified in variables
var quizButton = document.querySelector('button');
quizButton.setAttribute('id', 'start-quiz');
var quizGame = document.getElementById('quiz')
quizGame.appendChild(quizButton);


//function for generating the quiz values and accessing the DOM
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

    containerDiv.appendChild(answerButton1)
    containerDiv.appendChild(answerButton2)
    containerDiv.appendChild(answerButton3)
    containerDiv.appendChild(answerButton4)

    //set answer button classes to all be the same 
    answerButton1.setAttribute('class', 'btn')
    answerButton1.textContent = questionsArr[i].options[0]

    answerButton2.setAttribute('class', 'btn')
    answerButton2.textContent = questionsArr[i].options[1]

    answerButton3.setAttribute('class', 'btn')
    answerButton3.textContent = questionsArr[i].options[2]

    answerButton4.setAttribute('class', 'btn')
    answerButton4.textContent = questionsArr[i].options[3]

    //create timer p element so the time can be stored and counted down within
    var timerId = document.createElement('p')
    quizGame.appendChild(timerId)
    timerId.textContent = timeLeft
    var timerId = setInterval(function () {
        var timeLeft = Number(timerId.textContent)
        if (timeLeft > 0) {
            timerId.textContent = timeLeft - 1
        } else {
            clearInterval(timerId)
            setTimeout(function () {
            }, 1000)
        }
    }, 30000);
1
}



// erase button and then generate the quiz values
quizButton.onclick = function eraseButton() {
    quizGame.removeChild(quizButton);
    quizGenerate()
    for (var i = 0; i < questionsArr.length; i++) {
        var btn = document.getElementsByClassName('btn');
        for (var btn of btn) {
            btn.addEventListener('click', function onClick() {
                console.log('click')
            });
        }
        if (btn.clicked == true || timeLeft == 0) {
            console.log('done')
            i++

        } 
    }

}

var finalScore = 100 * (correct / total);

//create functions to input into quiz function for if/else statements (one for first page load,
// other to display previous score)
function firstLoading() {
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
previousScore()

