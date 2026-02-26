document.addEventListener("DOMContentLoaded",function () {
    let buttons = document.getElementsByTagName("button");
})

for (let button of buttons) {
    
}

function runGame() {

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function saveScoreToDjango(correct, incorrect) {
    fetch('/save-score/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'), // Django security requirement
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `correct=${correct}&incorrect=${incorrect}`
    }).then(response => console.log("Score Saved!"));
}
