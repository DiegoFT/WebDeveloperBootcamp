var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var isBlue = false;

h1.style.color = "pink";

setInterval(function () {
    if (isBlue){
        body.style.background = "white";
    }
    else {
        body.style.background = "#3498db";
    }
    //isBlue = !isBlue;
}, 1000);
