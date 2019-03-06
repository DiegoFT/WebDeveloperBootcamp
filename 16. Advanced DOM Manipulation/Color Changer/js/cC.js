var boton = document.querySelector("button");
// var fondo = document.querySelector("body");
// var isPurple = false;

// boton.addEventListener("click", function(){
//     if(!isPurple){
//         fondo.style.backgroundColor = "purple";
//     }
//     else{
//         fondo.style.backgroundColor = "white";
//     }
//     isPurple = !isPurple;
// });

boton.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});
