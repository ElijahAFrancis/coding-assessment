var timeEl = document.getElementById('time');
var startBtnEl = document.getElementById('start');
var submitBtnEl = document.getElementById('submit');
var startScrnEl = document.getElementById('start-screen')
var questionsEl = document.getElementById('questions');
// var selected = document.querySelector('input[name="choice"]:checked').value;

var questionsArr = [
    {
        title: "This is a Test",
        choices: ['This', 'is', 'a', 'test'],
        answer: '1',
    },
    {
        title: "This is 2 Test",
        choices: ['This', 'is', '2', 'test'],
        answer: '3',
    },
    {
        title: "This is 3 Test",
        choices: ['This', 'is', '3', 'test'],
        answer: '2',
    },

];

var currentQuestion = 0;

function startQuiz() {
    startScrnEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class', 'hide');

    getQuestion();

    startTime();
}

function getQuestion() {
    document.getElementById('question').innerHTML = questionsArr[currentQuestion].title;
    document.getElementById('choice-one-text').innerHTML = questionsArr[currentQuestion].choices[0];
    document.getElementById('choice-two-text').innerHTML = questionsArr[currentQuestion].choices[1];
    document.getElementById('choice-three-text').innerHTML = questionsArr[currentQuestion].choices[2];
    document.getElementById('choice-four-text').innerHTML = questionsArr[currentQuestion].choices[3];
}

function nextQuestion() {
    var selected = document.querySelector('input[name="choice"]:checked').value;
    console.log(selected);
    if (selected == questionsArr[currentQuestion].answer) {
    currentQuestion = currentQuestion + 1;
    getQuestion();
    } else {
        startScrnEl.setAttribute('class', 'start-screen');
        questionsEl.setAttribute('class', 'hide');

        clearInterval(timer);
    }
}

function startTime() {
    var timeLeft = 50;
    timeEl.innerHTML = 50;
    var timer = setInterval(countdown, 1000);
    function countdown() {
        timeLeft -= 1;
        if (timeLeft > 0) {
            timeEl.innerHTML = timeLeft;
        } else {
            timeEl.innerHTML = 0;
            clearInterval(timer);
        };
    };
}

submitBtnEl.addEventListener('click', nextQuestion);
startBtnEl.addEventListener('click', startQuiz);