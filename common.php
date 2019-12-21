<?php
//function to output header of the html page and body with body class
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo "<title> GTO-$title</title>";
    echo '<meta charset="UTF-8">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<meta http-equiv="X-UA-Compatible" content="ie=edge">';
    echo '<link rel="stylesheet" type="text/css" href="css/styling.css">';
    echo '</head>';
    echo "<body class='$title-body'>";
}

/* funciton to output the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputNavigation($pageName){
    //Output banner and first part of navigation
    echo '<header class="navbar-header">';
    echo '<h1 class="heading">Guess the outline</h1>';

    //Array of pages to link to
    $linkNames = array("Home","How to play", "Game", "Leaderboard", "User");
    $linkAddresses = array("index.php","instructions.php", "game.php", "leaderboard.php", "user.php");
    
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        $y = $x+1;
        echo "<nav class='navbox$y'>";
        echo '<a ';
        if($linkNames[$x] == $pageName){
            echo 'id= "selected" ';
        }
        
        echo 'href="' . $linkAddresses[$x] . '" class="link">' . $linkNames[$x] . '</a> </nav>';
        }
    
    
    echo '</header>';
}


//function to output footer, closing body tag, closing div tag and closing HTML tag
function outputFooter(){
    echo '<footer class="end"> Thanks for Visiting. If you have any queries contact the <a href="mailto:lc1128@live.mdx.ac.uk">developer</a>.
     Copyright &copy; 2019 All rights reserved.';
    echo '</footer>';
    echo '</div>';
    echo '</body>';
    echo '</html>';
}

