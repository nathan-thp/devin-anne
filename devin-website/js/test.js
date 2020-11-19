//Fills in the question div
function questionIndex() {
    if (currentItemIndex === 4 || points === 4 ) {
        document.getElementById("question").innerHTML = `You got ${points} questions correct!`;
        document.getElementById("points").innerHTML = `Points: ${points}`;
        replay();
} else {
    document.getElementById("question").innerHTML = questions[currentItemIndex][0];
    document.getElementById("points").innerHTML = `Points: ${points}`;
    return console.log(currentItemIndex);
}
}

//Variables
const questions = [
    ["Devin was born in June.", "false"],
    ["Devin has red hair.", "true"],
    ["Devin was born in Indiana.", "true"],
    ["Devin's middle name is Lynn", "false"]
]

let points = 0;
let currentItemIndex = 0;
let answer = questions[currentItemIndex][1];
let btn = document.getElementsByClassName("button");
let btnTrue = document.getElementById("btnTrue");
let btnFalse = document.getElementById("btnFalse");

questionIndex();


//Listens for button click, checks if button value is equal to answer.
for (var i = 0 ; i < questions.length; i++) {
    btn[i].addEventListener('click', event => {
    if (event.target.value === questions[currentItemIndex][1]) {
        console.log("Correct");
        points++;
        currentItemIndex++;
        console.log(points);
        questionIndex();
    } else {
        console.log("Wrong");
        currentItemIndex++;
        console.log(points);
        questionIndex();
    }
}
);
}


function replay() {
    document.getElementById("btnTrue").innerHtml = "Replay?"
    }