<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 

    //Output header and navigation bar
    outputHeader("index");
    outputNavigation("Home");
?>
<!--content class containing all the content-->
<div class="content">
    <!--left sided grid containiner containing all the content-->
    <div class="grid-container1">
        <!--heading-->
        <h3 class="heading-left">Outline Gallery</h3>
            <!--gallery container-->
            <div class="outline-gallery">
                <!--divs containing all images in the gallery-->
                <div>
                    <img src="images/thumbnails/car-outline-thumbnail.jpg" alt="Image 1 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/clock-outline-thumbnail.jpg" alt="Image 2 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/earth-outline-thumbnail.jpg" alt="Image 3 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/phone-outline-thumbnail.jpg" alt="Image 4 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/pigeon-outline-thumbnail.jpg" alt="Image 5 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/rocket-outline-thumbnail.jpg" alt="Image 6 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/shoes-outline-thumbnail.jpg" alt="Image 7 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/sofa-outline-thumbnail.jpg" alt="Image 8 outline thumbnail"
                    class="image">
                </div>

                <div>
                    <img src="images/thumbnails/sunflower-outline-thumbnail.jpg" alt="Image 9 outline thumbnail"
                    class="image">
                </div>
            </div>
    </div>
    <!--right sided grid container containing an image and description-->
    <div class="grid-container2" >
        <!--image-->
        <div class="top-picture">
            <a href="game.php"><img src="images/play-now.jpg" alt="Image link to play" style="width:100%"></a>
            <!--description-->
            <div class="bottom-description">
                <p>Convert the outline into the original picture by identifying the outline and answering 4 selected terms related to the guessed outline.</p> <br>
            </div>
        </div>
        <!--sidebar-->
        <aside class="sideinfo">
            <span class="sideinfo1">Fun &ensp;</span><br><br><br><br>
            <span class="sideinfo2">Challenging</span><br><br><br><br>
            <span class="sideinfo3">Interesting</span><br><br><br><br>
            <span class="sideinfo4">Enticing</span><br><br><br><br>
            <span class="sideinfo5">Satisfying</span><br><br><br><br>
        </aside>
    </div>
</div>

<script src="js/script.js"></script>;
<?php
    //Output the footer
    outputFooter();
?>