
function outlineOneHard() {
    let phoneArray = ['samsung', 'huawei', 'apple', 'oneplus', 'xiaomi'];
    let guess.toLowerCase() = document.getElementById("guess.toLowerCase()Box-hard").value;
    if (guess.toLowerCase().toLowerCase() === phoneArray[0] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("main-answer-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
    }
    else if (guess.toLowerCase().toLowerCase() === phoneArray[1] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer1-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }

    else if (guess.toLowerCase().toLowerCase() === phoneArray[2] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer2-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase().toLowerCase() === phoneArray[3] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer3-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase().toLowerCase() === phoneArray[4] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hint-answer4").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (answersArray.includes(guess.toLowerCase()) == true) {
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Answer already guess.toLowerCase()ed";
    }
    else {
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Wrong guess.toLowerCase()";
        scoreValue -= 50;
        document.getElementById("score-number-hard").innerHTML = scoreValue;


    }
    if (answersArray.length === phoneArray.length) {
        answersArray = [];
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Click next to go to Round 2";
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess.toLowerCase()Box-hard").select();
        document.getElementById("next-button").disabled = false;
    }

}

function round2Hard() {
    document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Round 2";
    document.getElementById("hints").innerHTML = '"shows"';
    scoreImage.style.backgroundImage = images[0];
    document.getElementById("main-answer-hard").innerHTML = "_____";
    document.getElementById("hine-answer1-hard").innerHTML = "______";
    document.getElementById("hine-answer2-hard").innerHTML = "____";
    document.getElementById("hine-answer3-hard").innerHTML = "_______";
    document.getElementById("hint-answer4").innerHTML = "____";
    document.getElementById("submit-button").onclick = outlineTwo;
}

function outlineTwoHard() {
    document.getElementById("next-button").disabled = true;
    let clockArray = ['clock', 'minute', 'hour', 'second', 'time'];
    let guess.toLowerCase() = document.getElementById("guess.toLowerCase()Box-hard").value;

    if (guess.toLowerCase() === clockArray[0] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("main-answer-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;


    }
    else if (guess.toLowerCase() === clockArray[1] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer1-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }

    else if (guess.toLowerCase() === clockArray[2] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer2-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === clockArray[3] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer3-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === clockArray[4] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hint-answer4").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (answersArray.includes(guess.toLowerCase()) == true) {
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Answer already guess.toLowerCase()ed";
    }
    else {
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Wrong guess.toLowerCase()";
        scoreValue -= 50;
        document.getElementById("score-number-hard").innerHTML = scoreValue;


    }
    if (answersArray.length === clockArray.length) {
        answersArray = [];
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Click next to go to Round 3";
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("next-button").onclick = round3;
        document.getElementById("guess.toLowerCase()Box-hard").select();
        document.getElementById("next-button").disabled = false;

    }
}

function round3Hard() {
    document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Round 3";
    document.getElementById("hints").innerHTML = '"contains"';
    scoreImage.style.backgroundImage = images[1];
    document.getElementById("main-answer-hard").innerHTML = "_____";
    document.getElementById("hine-answer1-hard").innerHTML = "______";
    document.getElementById("hine-answer2-hard").innerHTML = "_____";
    document.getElementById("hine-answer3-hard").innerHTML = "_______";
    document.getElementById("hint-answer4").innerHTML = "____";
    document.getElementById("submit-button").onclick = outlineThree;
}


function outlineThreeHard() {
    document.getElementById("next-button").disabled = true;
    let earthArray = ['earth', 'land', 'water', 'animals', 'humans'];
    let guess.toLowerCase() = document.getElementById("guess.toLowerCase()Box-hard").value;

    if (guess.toLowerCase() === earthArray[0] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("main-answer-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";


    }
    else if (guess.toLowerCase() === earthArray[1] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer1-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";

    }

    else if (guess.toLowerCase() === earthArray[2] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer2-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";

    }
    else if (guess.toLowerCase() === earthArray[3] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hine-answer3-hard").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";

    }
    else if (guess.toLowerCase() === earthArray[4] && answersArray.includes(guess.toLowerCase()) == false) {
        answersArray.push(guess.toLowerCase());
        document.getElementById("hint-answer4").innerHTML = guess.toLowerCase();
        document.getElementById("guess.toLowerCase()Box-hard").value = '';
        scoreValue += 100;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Correct guess.toLowerCase()";

    }
    else if (answersArray.includes(guess.toLowerCase()) == true) {
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Answer already guess.toLowerCase()ed";
    }
    else {
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Wrong guess.toLowerCase()";
        scoreValue -= 50;



    }
    if (answersArray.length === earthArray.length) {
        answersArray = [];
        document.getElementById("guess.toLowerCase()-status-hard").innerHTML = "Click next to go to Round 3";
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("submit-button").onclick = round3;
        document.getElementById("guess.toLowerCase()Box-hard").select();
        document.getElementById("next-button").disabled = false;


    }
}