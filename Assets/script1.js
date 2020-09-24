// Assignment code
var scoresList = document.querySelector("#scoresList");
var clearScores = document.querySelector("#clear-scores");
var highScores, scoresItem, scorePlace;

// Function code
function updateScores() {
    highScores = JSON.parse(localStorage.getItem("High Scores"));
    console.log(highScores);     
    for (var i = 0; i < highScores.length; i++) { 
        scorePlace = i + 1;
        scoresItem = document.createElement("li");
        scoresItem.innerHTML = highScores[i].User + "&#8212;" + highScores[i].Score;
        scoresItem.setAttribute("id", scorePlace + "-place")
        scoresList.append(scoresItem);
    }
    localStorage.setItem("High Scores", JSON.stringify(highScores));
}

function eraseScores(parentEl, childEl){
    while (document.getElementById(childEl)) {     
        var child = document.getElementById(childEl);
        var parent = document.getElementById(parentEl);
        parent.removeChild(child);
    }
}

// Execution code
document.addEventListener("load", updateScores());
clearScores.addEventListener("click", function() {
    eraseScores("parent-table", "child-table");
    localStorage.removeItem("High Scores");
});