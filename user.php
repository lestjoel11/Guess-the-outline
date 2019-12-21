<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("User");
    outputNavigation("User");
?>
<!--class containing login and signup form-->
<div class="login-signup" id="login-signup">
    <!--login form with two textboxes and submit button. 
    on submission of data it will take user to index page-->
    <form class="login" id="login" method="POST">
        <h1>Login</h1>
        <input type="text" name="username" id="username-login" required placeholder="Username">
        <input type="password" name="password" id="password-login" required placeholder="password">
        <input type="submit" name="submit" value="Login" onclick="loginUser()">
    </form>
    <!--signup form with three textboxes and submit button. 
    on submission of data it will take user to index page-->
    <form class="signup" id="signup" method="POST">
        <h1>Sign Up</h1>
        <input type="text" id="username-signup" name="username" required placeholder="Username">
        <input type="text" id="email-signup" name="email" required placeholder="email">
        <input type="password" id="password-signup" name="password" required placeholder="password">
        <input type="password" id="password-signup-confirm" name="password" required placeholder="confirm password">
        <input type="submit" name="submit" value="Sign Up" onclick = "registerUser()">
    </form>
</div>
    <input type="submit" name="submit" id="logout-button" value="Log out" onclick = "logout()">
<script src="js/script.js"></script>
<?php
    //Output the footer
    outputFooter();
