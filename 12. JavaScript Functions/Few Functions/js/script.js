//var list = [1,2,3,4,5];
var list = ["a", "b", "c"];
var list2 = ["a", "a", "a"];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var num = [-5, 100];

function printReverse(lista) {    
    for(var i = lista.length - 1; i>=0; i--){
        console.log(lista[i]);
    }
}

function isUniform(lista) {
    var first = lista[0];
    for(var i = 1; i<lista.length; i++){
        if(lista[i] !== first){
            return false;
        }
    }
    return true;
}

function sumArray(list) {
    var suma = 0;
    numbers.forEach(function (element) {
        suma+=element;
    });
    return suma;
}

function max(list) {
    var mayor = 0;
    list.forEach(function (element) {
        if(element>mayor){
            mayor=element;
        }
    });
    return mayor;
}

