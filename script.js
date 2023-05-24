var timeEl = document.getElementById('time');
var startBtnEl = document.getElementById('start');
var submitBtnEl = document.getElementById('submit');
var startScrnEl = document.getElementById('start-screen')
var questionsEl = document.getElementById('questions');

var questionsArr = [
    {
        title: "This is a Test",
        choices: ['This', 'is', 'a', 'test'],
        answer: 'this',
    },
    {
        title: "This is 2 Test",
        choices: ['This', 'is', '2', 'test'],
        answer: '2',
    },
    {
        title: "This is 3 Test",
        choices: ['This', 'is', '3', 'test'],
        answer: '3',
    },

];

function startQuiz() {
    startScrnEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class', 'hide');

    getQuestions();

    startTime();
}

function getQuestions() {
    for (var i=0; i<questionsArr.length; i++) {
        document.getElementById('question').innerHTML = questionsArr[i].title;
        document.getElementById('choice-one-text').innerHTML = questionsArr[i].choices[0];
        document.getElementById('choice-two-text').innerHTML = questionsArr[i].choices[1];
        document.getElementById('choice-three-text').innerHTML = questionsArr[i].choices[2];
        document.getElementById('choice-four-text').innerHTML = questionsArr[i].choices[3];
    }
    submitBtnEl.addEventListener('click', i++)
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

startBtnEl.addEventListener('click', startQuiz);