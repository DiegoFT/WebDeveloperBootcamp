var p1Button = document.getElementById("one");
var p2Button = document.querySelector("#two");
var pReset = document.querySelector("#reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScore = document.getElementById("maxScore"); //input
var ScoreMax = document.getElementById("scoreMax"); //display
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
maxScore.value = winningScore;

maxScore.addEventListener("change", function () {
    winningScore = this.value*1;
    ScoreMax.textContent = winningScore; //Number
    reset();
    // console.log(winningScore);
});

p1Button.addEventListener("click", function () {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

pReset.addEventListener("click", reset);

// pReset.addEventListener("click", function(){
//  reset();
// });

function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}