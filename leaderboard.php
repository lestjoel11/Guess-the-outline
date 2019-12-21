<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Leaderboard");
    outputNavigation("Leaderboard");
?>
<!--main content of the page is the ranking table-->
<main class="main">
    <!--table class-->
    <table class="leaderboard-table sortable" id="leaderboard-table">
        <!--table heading in a row-->
        <thead>
        <tr>
            <th class="sorttable_nosort">Username</th>
            <th>Score</th>
        </tr>
        </thead>
        <tbody>
        <tr>

        </tr>
        </tbody>
    </table>
    </main>
    <!--Sort table library import-->
    <script src="js/sorttable.js"></script>
    <!--import script-->
<script src="js/script.js"></script>
<script>
    //function that prints out scores from localStorage and sorts it
window.onload = function rankingTable() {
    let table = document.getElementById('leaderboard-table');
    //Update leaderboard
    for (let x = 0, len = localStorage.length; x < len; x++) {
        let getScore = JSON.parse(localStorage.getItem(localStorage.key(x)));
        let key = localStorage.key(x);
        let value = localStorage[key];

        if(getScore.username !== undefined && getScore.score !== undefined) {
        
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        
        cell1.innerHTML = getScore.username;
        cell2.innerHTML = getScore.score;
    }
    }
    //Sort Code library
    let tableHeading = document.getElementsByTagName("th")['1'];
    sorttable.innerSortFunction.apply(tableHeading, [])
};
</script>
<?php
    //Output the footer
    outputFooter();
?>