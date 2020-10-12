const questions = [
    ["What is Devin's middle name?", "ANNE"],
    ["What month was Devin born?", "MAY"],
    ["What state was Devin born in?", "INDIANA"],
    ["What color is Devin's hair?", "RED"]
];

let correctAnswers = 0;
let html = `<h2>You got ${correctAnswers} questions right!</h2>`;
let fail = `<h2>Sorry you did not pass.</h2>`;

for (i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    if (response.toUpperCase === answer) {
        correctAnswers++;
    }
}
document.querySelector('div').innerHTML = html;
console.log(correctAnswers);