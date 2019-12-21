//Define global veriables used in functions throughout the script file
let scoreValue = 0;
let totalScore;
let scoreImage = document.getElementById("outline-picture-game");
let scoreImageHard = document.getElementById("outline-picture-game-hard");
let images = ["url('/csd-game-website/images/outline-pictures/clock-outline.jpg')", "url('/csd-game-website/images/outline-pictures/earth-outline.jpg", "url('/csd-game-website/images/outline-pictures/pigeon-outline.jpg", "url('/csd-game-website/images/outline-pictures/rocket-outline.jpg", "url('/csd-game-website/images/outline-pictures/shoes-outline.jpg", "url('/csd-game-website/images/outline-pictures/sofa-outline.jpg", "url('/csd-game-website/images/outline-pictures/sunflower-outline.jpg"]
let answersArray = [];

//Function for first outline in the game with validation of answer and adding answers to array with scoring done at the end.
function outlineOne() {
    let carsArray = ['car', 'suspension', 'engine', 'door', 'tyre'];
    let guess = document.getElementById("guessBox").value;
    if (guess.toLowerCase() === carsArray[0] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("main-answer").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;
    }
    else if (guess.toLowerCase() === carsArray[1] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer1").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }

    else if (guess.toLowerCase() === carsArray[2] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer2").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === carsArray[3] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer3").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === carsArray[4] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer4").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }
    else if (answersArray.includes(guess) == true) {
        document.getElementById("guess-status").innerHTML = "Answer already guessed";
    }
    else {
        document.getElementById("guess-status").innerHTML = "Wrong Guess";
        scoreValue -= 50;
        document.getElementById("score-number").innerHTML = scoreValue;


    }
    if (answersArray.length === carsArray.length) {
        answersArray = [];
        document.getElementById("guess-status").innerHTML = "Click next to go to Round 2";
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("guessBox").select();
        document.getElementById("next-button").disabled = false;
    }

}
//function to switch display to second outline 
function round2() {
    document.getElementById("guess-status").innerHTML = "Round 2";
    document.getElementById("hints").innerHTML = '"shows"';
    scoreImage.style.backgroundImage = images[0];
    document.getElementById("main-answer").innerHTML = "Main word: __o__";
    document.getElementById("hint-answer1").innerHTML = "_i_u_e";
    document.getElementById("hint-answer2").innerHTML = "_ou_";
    document.getElementById("hint-answer3").innerHTML = "_e_o__";
    document.getElementById("hint-answer4").innerHTML = "_i_e";
    document.getElementById("submit-button").onclick = outlineTwo;
}

//Function for second outline in the game with validation of answer and adding answers to array with scoring done.
function outlineTwo() {
    document.getElementById("next-button").disabled = true;
    let clockArray = ['clock', 'minute', 'hour', 'second', 'time'];
    let guess = document.getElementById("guessBox").value;

    if (guess.toLowerCase() === clockArray[0] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("main-answer").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;


    }
    else if (guess.toLowerCase() === clockArray[1] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer1").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }

    else if (guess.toLowerCase() === clockArray[2] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer2").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === clockArray[3] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer3").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === clockArray[4] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer4").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        document.getElementById("guess-status").innerHTML = "Correct Guess";
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;

    }
    else if (answersArray.includes(guess) == true) {
        document.getElementById("guess-status").innerHTML = "Answer already guessed";
    }
    else {
        document.getElementById("guess-status").innerHTML = "Wrong Guess";
        scoreValue -= 50;
        document.getElementById("score-number").innerHTML = scoreValue;


    }
    if (answersArray.length === clockArray.length) {
        answersArray = [];
        document.getElementById("guess-status").innerHTML = "Click next to go to Round 3";
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("next-button").onclick = round3;
        document.getElementById("guessBox").select();
        document.getElementById("next-button").disabled = false;

    }
}
//function to switch display to second outline 
function round3() {
    document.getElementById("guess-status").innerHTML = "Round 3";
    document.getElementById("hints").innerHTML = '"travel"';
    scoreImage.style.backgroundImage = images[1];
    document.getElementById("main-answer").innerHTML = "Main word: ea___";
    document.getElementById("hint-answer1").innerHTML = "_a__";
    document.getElementById("hint-answer2").innerHTML = "_a_e_";
    document.getElementById("hint-answer3").innerHTML = "a_i_a__";
    document.getElementById("hint-answer4").innerHTML = "_u_a__";
    document.getElementById("submit-button").onclick = outlineThree;
}

//Function for third outline in the game with validation of answer and adding answers to array with scoring done.
function outlineThree() {
    document.getElementById("next-button").disabled = true;
    let earthArray = ['earth', 'land', 'water', 'animals', 'humans'];
    let guess = document.getElementById("guessBox").value;

    if (guess.toLowerCase() === earthArray[0] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("main-answer").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("guess-status").innerHTML = "Correct Guess";


    }
    else if (guess.toLowerCase() === earthArray[1] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer1").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("guess-status").innerHTML = "Correct Guess";

    }

    else if (guess.toLowerCase() === earthArray[2] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer2").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("guess-status").innerHTML = "Correct Guess";

    }
    else if (guess.toLowerCase() === earthArray[3] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer3").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("guess-status").innerHTML = "Correct Guess";

    }
    else if (guess.toLowerCase() === earthArray[4] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer4").innerHTML = guess;
        document.getElementById("guessBox").value = '';
        scoreValue += 100;
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("guess-status").innerHTML = "Correct Guess";

    }
    else if (answersArray.includes(guess) == true) {
        document.getElementById("guess-status").innerHTML = "Answer already guessed";
    }
    else {
        document.getElementById("guess-status").innerHTML = "Wrong Guess";
        scoreValue -= 50;
    }
    if (answersArray.length === earthArray.length) {
        answersArray = [];
        document.getElementById("guess-status").innerHTML = "Congrats you have completed the game's easy level";
        document.getElementById("score-number").innerHTML = scoreValue;
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("submit-score").innerHTML = "Submit Score"
        document.getElementById("guessBox").select();
        document.getElementById("next-button").style.display = "none";
        document.getElementById("submit-score-hard").onclick = "redirectLeaderboard"

    }
}



//Function for first hard outline in the game with validation of answer and adding answers to array with scoring done.
function outlineOneHard() {
    let phoneArray = ['smartphone', 'huawei', 'apple', 'oneplus', 'samsung'];
    let guess = document.getElementById("guessBox-hard").value;
    if (guess.toLowerCase() === phoneArray[0] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("main-answer-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
    }
    else if (guess.toLowerCase() === phoneArray[1] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer1-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }

    else if (guess.toLowerCase() === phoneArray[2] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer2-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === phoneArray[3] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer3-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === phoneArray[4] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer4-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (answersArray.includes(guess) == true) {
        document.getElementById("guess-status-hard").innerHTML = "Answer already guessed";
    }
    else {
        document.getElementById("guess-status-hard").innerHTML = "Wrong Guess";
        scoreValue -= 50;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
    }
    if (answersArray.length === phoneArray.length) {
        answersArray = [];
        document.getElementById("guess-status-hard").innerHTML = "Click next to go to Round 2";
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guessBox-hard").select();
        document.getElementById("next-button-hard").disabled = false;
    }
}
//function to switch display to round 2 of the hard game mode
function round2Hard() {
    document.getElementById("guess-status-hard").innerHTML = "Round 2";
    document.getElementById("hints-hard").innerHTML = '"body parts"';
    scoreImageHard.style.backgroundImage = images[2];
    document.getElementById("main-answer-hard").innerHTML = "Main word: __g___";
    document.getElementById("hint-answer1-hard").innerHTML = "___l";
    document.getElementById("hint-answer2-hard").innerHTML = "___t";
    document.getElementById("hint-answer3-hard").innerHTML = "__l_";
    document.getElementById("hint-answer4-hard").innerHTML = "___g_";
    document.getElementById("submit-button-hard").onclick = outlineTwoHard;
}
//Function for second hard outline in the game with validation of answer and adding answers to array with scoring done.
function outlineTwoHard() {
    document.getElementById("next-button").disabled = true;
    let pigeonArray = ['pigeon', 'tail', 'feet', 'bill', 'wings'];
    let guess = document.getElementById("guessBox-hard").value;

    if (guess.toLowerCase() === pigeonArray[0] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("main-answer-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;


    }
    else if (guess.toLowerCase() === pigeonArray[1] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer1-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }

    else if (guess.toLowerCase() === pigeonArray[2] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer2-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === pigeonArray[3] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer3-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (guess.toLowerCase() === pigeonArray[4] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer4-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;

    }
    else if (answersArray.includes(guess) == true) {
        document.getElementById("guess-status-hard").innerHTML = "Answer already guessed";
    }
    else {
        document.getElementById("guess-status-hard").innerHTML = "Wrong Guess";
        scoreValue -= 50;
        document.getElementById("score-number-hard").innerHTML = scoreValue;


    }
    if (answersArray.length === pigeonArray.length) {
        answersArray = [];
        document.getElementById("guess-status-hard").innerHTML = "Click next to go to Round 3";
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("next-button-hard").onclick = round3Hard;
        document.getElementById("guessBox-hard").select();
        document.getElementById("next-button").disabled = false;

    }
}
//function to switch display to the third outline
function round3Hard() {
    document.getElementById("guess-status-hard").innerHTML = "Round 3";
    document.getElementById("hints-hard").innerHTML = '"components"';
    scoreImageHard.style.backgroundImage = images[3];
    document.getElementById("main-answer-hard").innerHTML = "Main rocket: ___k__";
    document.getElementById("hint-answer1-hard").innerHTML = "p_______e";
    document.getElementById("hint-answer2-hard").innerHTML = "____t_r";
    document.getElementById("hint-answer3-hard").innerHTML = "f___ t___";
    document.getElementById("hint-answer4-hard").innerHTML = "_x____ __n_";
    document.getElementById("submit-button-hard").onclick = outlineThreeHard;
}

//Function for third hard outline in the game with validation of answer and adding answers to array with scoring done.
function outlineThreeHard() {
    document.getElementById("next-button").disabled = true;
    let rocketArray = ['rocket', 'parachute', 'booster', 'fuel tank', 'oxygen tank'];
    let guess = document.getElementById("guessBox-hard").value;

    if (guess.toLowerCase() === rocketArray[0] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("main-answer-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";


    }
    else if (guess.toLowerCase() === rocketArray[1] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer1-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";

    }

    else if (guess.toLowerCase() === rocketArray[2] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer2-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";

    }
    else if (guess.toLowerCase() === rocketArray[3] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer3-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";

    }
    else if (guess.toLowerCase() === rocketArray[4] && answersArray.includes(guess) == false) {
        answersArray.push(guess);
        document.getElementById("hint-answer4-hard").innerHTML = guess;
        document.getElementById("guessBox-hard").value = '';
        scoreValue += 200;
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("guess-status-hard").innerHTML = "Correct Guess";

    }
    else if (answersArray.includes(guess) == true) {
        document.getElementById("guess-status-hard").innerHTML = "Answer already guessed";
    }
    else {
        document.getElementById("guess-status-hard").innerHTML = "Wrong Guess";
        scoreValue -= 50;
    }
    if (answersArray.length === rocketArray.length) {
        answersArray = [];
        document.getElementById("guess-status-hard").innerHTML = "Congrats you have completed the game's hard level";
        document.getElementById("score-number-hard").innerHTML = scoreValue;
        document.getElementById("submit-button-hard").style.display = "none";
        document.getElementById("guessBox-hard").select();
        document.getElementById("next-button-hard").style.display = "none";
        document.getElementById("submit-score-hard").innerHTML = "Submit Score";

    }
}
//function to redirect to leaderboard page
function rediretLeaderBoard() {
    window.location.href = "leaderboard.php";
}

//function to store total score in local storage
function gameEnd() {
    console.log(scoreValue);
    totalScore = scoreValue;
    if (sessionStorage["loggedin"] === "True") {
        for (let x = 0, len = localStorage.length; x < len; x++) {
            let totalScores = {};
            let score = totalScore;
            let key = localStorage.key(x);
            let value = localStorage[key];
            totalScores.score = totalScore;

            let lsScore = JSON.parse(localStorage[sessionStorage['username']]);

            if ((scoreValue > lsScore.score) || (lsScore.score === undefined)) {
                totalScores.username = sessionStorage['username'];
                let usernameGiven = sessionStorage['username'];
                let getsKey = JSON.parse(localStorage[usernameGiven]);
                totalScores.password = getsKey.password;
                localStorage[totalScores.username] = JSON.stringify(totalScores);
                localStorage.setItem('score', score);
            }


        }

    }
    window.location.href = "leaderboard.php";
}
function rediretInstructions() {
    window.location.href = "instructions.php";
}
//Login and registration    
//function to store user detials in the local storage
function registerUser() {
    let userObject = {};
    userObject.username = document.getElementById("username-signup").value;
    userObject.email = document.getElementById("email-signup").value;
    userObject.password = document.getElementById("password-signup").value;
    userObject.password_confirm = document.getElementById("password-signup-confirm").value;
    if (userObject.password != userObject.password_confirm) {
        alert("passwords dont match");
    }
    else {
        document.getElementById("username-signup").value = "";
        document.getElementById("email-signup").value = "";
        document.getElementById("password-signup").value = "";
        document.getElementById("password-signup-confirm").value = "";
        localStorage[userObject.username] = JSON.stringify(userObject);
        alert("Successfully signed up, please log in")
    }
}
//function to validate user login 
function loginUser() {
    let username = document.getElementById("username-login").value;
    let password = document.getElementById("password-login").value;
    if (localStorage[username] === undefined) {
        alert("Your account does not exist, please create an account.");
    }
    else {
        let stored = JSON.parse(localStorage[username]);
        if (password == stored.password) {
            alert("Successfully Logged In");
            sessionStorage["loggedin"] = "True";
            sessionStorage["username"] = username;

        }
        else {
            alert("Incorrect Password.");
        }
    }
}
//function to remove session storage to logout user from the website 
function logout() {
    sessionStorage['loggedin'] = "false";
    sessionStorage["username"] = undefined;
    location.reload();

}
//function that automates on the login page, hiding login form and displaying logout button
window.onload = function hidebutton() {
    if (sessionStorage["loggedin"] == "True") {
        let login_and_signup = document.getElementById("login-signup");
        login_and_signup.style.display = "none";
        let logout = document.getElementById("logout-button");
        logout.style.display = "block";
    }
    else {
        let logout = document.getElementById("logout-button");
        logout.style.display = "none";
        let login_and_signup = document.getElementById("login-signup");
        login_and_signup.style.display = "grid";

    }
}

//function to display difficulty options in the game
function difficulty() {
    document.getElementById("play-button").style.display = "none";
    document.getElementById("instructions-button").style.display = "none";
    document.getElementById("game-title").innerHTML = "Choose Difficulty";
    document.getElementById("easy-button").style.display = "flex";
    document.getElementById("hard-button").style.display = "flex";
}
//function to display animation when easy game mode is chosen 
function gameAnimationEasy() {
    let introScreen = document.getElementById("intro-screen");
    introScreen.style.width = "85%";
    introScreen.style.height = "450px";
    document.getElementById("game-title").style.display = "none";
    document.getElementById("easy-button").style.display = "none";
    document.getElementById("hard-button").style.display = "none";
    document.getElementById("game-area").style.display = "flex";
}

//function to display animation when hard game mode is chosen 
function gameAnimationHard() {
    let introScreen = document.getElementById("intro-screen");
    introScreen.style.width = "85%";
    introScreen.style.height = "450px";
    document.getElementById("game-title").style.display = "none";
    document.getElementById("easy-button").style.display = "none";
    document.getElementById("hard-button").style.display = "none";
    document.getElementById("game-area-hard").style.display = "flex";
}
