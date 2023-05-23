var time = document.getElementById('time');
var startBtn = document.getElementById('start');
var startScrn = document.getElementById('start-screen')
var questions = document.getElementById('questions');

function startQuiz(event) {
    event.preventDefault();
    // startScrn.setAttribute('class', 'hide');

    // questions.removeAttribute('class', 'hide');
    var timeLeft = 10;
    var timer = setInterval(clock, 1000);
    function clock() {
        if (timeLeft <= 0){
            clearInterval(timer);
            time.innerHTML = "0";
        } else {
            time.innerHTML = timeLeft + "";
        }
        timeLeft -= 1;
    }
}

startBtn.addEventListener('click', startQuiz);