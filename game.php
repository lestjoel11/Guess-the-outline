<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Game");
    outputNavigation("Game");
?>
<!--intro screen for game-->
<div id="intro-screen">
    <h1 id="game-title">Let's Play</h1>
    <button type="button" class="submit-guess" id="play-button" onclick="difficulty()">Play Game</button>
    <button type="button" class="submit-guess" id="instructions-button" onclick= "rediretInstructions()">Instructions</button>
    

<!--difficulty options that displays on selection of start game-->
<button type="button" class="submit-guess" id="easy-button" style="display:none;" onclick="gameAnimationEasy()">Easy: Vovels will be displayed</button>
<button type="button" class="submit-guess" id="hard-button" style="display:none;" onclick="gameAnimationHard()">Hard: More complex words with stingy amount of consonants</button>

    
        
<!--game container-->
<div class="game-area" id= "game-area">
    <div class="game-frame">
        <!--picture container-->
        <div class="left" id="outline-picture-game"></div>    
            <!--hint-->
            <div class="right">
                <label class="hint">hint of relation to outline: <span id="hints">"parts" </span></label>
                <br>
                <!--textbox for guessing-->
                <input class="guess" type="text" placeholder="Guess" id="guessBox" required autocomplete= "off">
                <!--submit button to submit guess-->
                <button type="button" class="submit-guess" onclick="outlineOne()" id="submit-button">Submit</button>
                <button type="button" class="submit-guess" id="next-button" onclick="round2()"disabled>Next</button>
                <button type="button" class="submit-guess" id="submit-score" onclick="gameEnd()">Give Up</button>
            
        <!--word outline for guessing-->
        <label class="game-words" id="main-answer">main word: ___</label>
        <label class="game-words" id="hint-answer1">_u__e__io_</label>
        <label class="game-words" id="hint-answer2">e__i_e</label>
        <label class="game-words" id="hint-answer3">_oo_</label>
        <label class="game-words" id="hint-answer4">___e</label>
    </div>
    <!--scoring container-->
    <div class="scoring">
        <center>
            <h1>Counter</h1>
            <br><br>
            <p id = "guess-status"></p>
            <br><br>    
            <h3>Score: <span id="score-number"> 0 </span></h3>
        </center>
    </div>
</div>
</div>
    <!--hard game mode display-->
    <div class="game-area-hard" id= "game-area-hard">
        <div class="game-frame-hard">
            <!--container for left side of the game-->
            <div class="left-hard" id="outline-picture-game-hard">    
                </div>    
                    <!--container for right side of the game-->
                    <div class="right">
                    <!--hint-->
                        <label class="hint">hint of relation to outline: <span id="hints-hard">"brands" </span></label>
                        <br>
                        
                        <!--textbox for guessing-->
                        <input class="guess" type="text" placeholder="Guess" id="guessBox-hard" required autocomplete= "off">
                        <!--submit button to submit guess-->
                        <button type="button" class="submit-guess" onclick="outlineOneHard()" id="submit-button-hard">Submit</button>
                        <button type="button" class="submit-guess" id="next-button-hard" onclick="round2Hard()"disabled>Next</button>
                        <button type="button" class="submit-guess" id="submit-score-hard" onclick="gameEnd()">Give Up</button>
        
                        <!--word outline for guessing-->
                        <label class="game-words" id="main-answer-hard">Main word: _____p__n_</label>
                        <label class="game-words" id="hint-answer1-hard">h_____</label>
                        <label class="game-words" id="hint-answer2-hard">___l_</label>
                        <label class="game-words" id="hint-answer3-hard">_n_p___</label>
                        <label class="game-words" id="hint-answer4-hard">__m__n_</label>
                    </div>
    <!--scoring container for counting points-->
        <div class="scoring">
            <center>
            <h1>Counter</h1>
            <br><br>
            <p id = "guess-status-hard"></p>
            <br><br>    
            <h3>Score: <span id="score-number-hard"> 0 </span></h3>
            </center>
        </div>
    </div>  
</div>
    
<?php
    //Output the footer
    outputFooter();
?>
<script src="js/script.js">
</script>