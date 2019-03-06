function myForEach(arr, func) {
    //loop through array
    for(var i = 0; i < arr.length; i++){
        //call func for each item in array
        func();
    }
}

/////////////////////

Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

var friends = ["charlie", "dave", "maddy", "caitlyn"];

friends.myForEach(alert);