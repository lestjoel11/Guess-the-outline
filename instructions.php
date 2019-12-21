<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("instructions");
    outputNavigation("How to play");
?>
<!--container box of the page containing instructions of the game-->
<div class="instructions-container">
    <!--ordered list with instructions of the game-->
    <ol>
        <!--instruction 1 with information and image-->
        <li class="steps step-1">Identify the outline, and with the help of a hint identify the terms related to the outline.</li>
        <div class="outline-thumnail-instruction">
            <img src="images/thumbnails/car-outline-thumbnail.jpg">
        </div>
        <!--instruction 2 with information and text box-->
        <li class="steps step-2">Guess the outline and 4 words related to the ouline displayed with in the time limit.</li>
        <div class="instruction-textbox">
            <input type="text" placeholder="Guess the outline & 4 terms">
        </div>
        <!--instruction 3 with information and submit button-->
        <li class="steps step-3">Submit your guesses to move on to the next level.</li>
        <div class="instruction-submit">
            <input type="submit" value="Submit Guess">
        </div>
    </ol>  
</div> 

<?php
    //Output the footer
    outputFooter();
?>