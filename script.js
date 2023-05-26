var timeEl = document.getElementById('time');
var startBtnEl = document.getElementById('start');
var submitBtnEl = document.getElementById('submit');
var startScrnEl = document.getElementById('start-screen')
var questionsEl = document.getElementById('questions');
var endScrnEl = document.getElementById('end-screen');
var initialsInputEl = document.getElementById('initials');
var initials;
var saveScoreBtn = document.getElementById('save-score');
var scoreEl = document.getElementById('score');
var scoreListEl = document.getElementById('score-list');
var li = document.createElement("li");
var score;
var timer;
var timeLeft = 0;
var storedScores = [];

function displayScores() {
    if(JSON.parse(localStorage.getItem("scoreList")) != null) {
        storedScores = (JSON.parse(localStorage.getItem("scoreList")));
    };
    if (storedScores.length == 0) {
        li.innerHTML = "No Scores";
        scoreListEl.appendChild(li);
    } else {
        for (var i=0; i < storedScores.length; i++){
            li.innerHTML = storedScores[i];
            scoreListEl.appendChild(li);
            li = document.createElement('li');
        };
    };
}

var questionsArr = [
    {
        title: "What Does HTML Stand For?",
        choices: ['Humperdink To Marry LadyButtercup', 'Hypocrites Try My Lobstertails', 'Hypertext Markup Language', 'How To Make Linguini'],
        answer: '3',
    },
    {
        title: "What Does CSS Stand For?",
        choices: ['Cascading Style Sneeze', 'Cascading Style Sheets', 'Coffee Should Stay', 'Cars Should Stop'],
        answer: '2',
    },
    {
        title: "What Does JavaScript Stand For?",
        choices: ['CoffeeWriting', 'Jam and Vanilla and Sugar Can Rip IntraPulmonary Tracts', 'EspressoPrint', 'JavaScript'],
        answer: '4',
    },
    {
        title: "What is a For Loop?",
        choices: ['A way to iterate over code a certain amount of times in JavaScript', 'A racetrack in France', 'A bracelet that is given as a gift', 'A CSS property that randomizes the styling of the application'],
        answer: '1',
    },
    {
        title: "Which is a For Loop?",
        choices: ['for (let i = 0; i < iterations; i++){code here}', 'for (let i = 0; i > iterations; i++){code here}', 'for (let i = 0; i > iterations; i--){code here}', 'A racetrack in France'],
        answer: '1',
    },
    {
        title: "What is a Class in HTML?",
        choices: ['An attribute used to reference single elements in CSS and JavaScript', 'A group of students in a school', 'An attribute used to reference multiple elements in CSS and JavaScript', 'A group of elements that share the same economic or social status'],
        answer: '3',
    },
    {
        title: "What is an ID in HTML",
        choices: ['An attribute used to reference single elements in CSS and JavaScript', 'An attribute used to reference multiple elements in CSS and JavaScript', 'A card that a person uses to identify themselves', 'A racetrack in France'],
        answer: '1',
    },
    {
        title: "What is the Selector Used to Reference IDs in CSS",
        choices: ['.', '#', '*', '$'],
        answer: '2',
    },
    {
        title: "What is the Selector Used to Reference Classes in CSS",
        choices: ['#', '*', '.', '$'],
        answer: '3',
    },
    {
        title: "Where is a Style Sheet Linked?",
        choices: ['In JavaScript', 'At the bottom of the body in HTML', 'In the header in HTML', 'In the head in HTML'],
        answer: '4',
    },
];

var currentQuestion = 0;

function startQuiz() {
    currentQuestion = 0;

    score = 0;

    initialsInputEl.value = "";

    startScrnEl.setAttribute('class', 'hide');

    questionsEl.setAttribute('class', 'questions');

    score = 0;

    timeLeft = 60;
    timeEl.innerHTML = 60;
    timer = setInterval(countdown, 1000);

    getQuestion();
}

function getQuestion() {
    if (currentQuestion < questionsArr.length) {
        document.getElementById('question').innerHTML = questionsArr[currentQuestion].title;
        document.getElementById('choice-one-text').innerHTML = questionsArr[currentQuestion].choices[0];
        document.getElementById('choice-two-text').innerHTML = questionsArr[currentQuestion].choices[1];
        document.getElementById('choice-three-text').innerHTML = questionsArr[currentQuestion].choices[2];
        document.getElementById('choice-four-text').innerHTML = questionsArr[currentQuestion].choices[3];
    } else {
        endQuiz()
    }
}

function nextQuestion() {
    var selected = document.querySelector('input[name="choice"]:checked').value;
    console.log(selected);
    if (selected == questionsArr[currentQuestion].answer) {
        score = score + 1;
        currentQuestion = currentQuestion + 1;
        getQuestion();
    } else {
        currentQuestion = currentQuestion + 1;

        timeLeft-=10;
        getQuestion();
    }
}

function countdown() {
    console.log(timeLeft);
    timeLeft -= 1;
    if  (timeLeft > 0) {
        timeEl.innerHTML = timeLeft;
    } else {
        timeEl.innerHTML = 0;
        endQuiz();
        clearInterval(timer);
    };
}

function endQuiz() {
    timeLeft = 0
    scoreEl.innerHTML = score + "/10";
    questionsEl.setAttribute('class', 'hide');
    endScrnEl.setAttribute('class', 'end-screen');
    saveScoreBtn.addEventListener('click', updateScores);
    countdown;
}

function updateScores(event) {
    event.preventDefault();
    initials = initialsInputEl.value;
    var scoreDisplay = initials + " " + score + "/10";
    storedScores.push(scoreDisplay);
    localStorage.setItem("scoreList", JSON.stringify(storedScores));
    storedScores = JSON.parse(localStorage.getItem("scoreList"));
    endScrnEl.setAttribute('class', 'hide');
    startScrnEl.setAttribute('class', 'start-screen');
    scoreListEl.innerHTML = "";
    displayScores();
}

displayScores();
submitBtnEl.addEventListener('click', nextQuestion);
startBtnEl.addEventListener('click', startQuiz);