/*  Ejercicio 2.2
const ele = document.getElementById("ele1");
pintar = function (elemento, color){
    elemento.style.backgroundColor = color;
}

ele.addEventListener("click", function(){
    pintar(ele, "yellow");
}); 

*/

// Ejercicio 2.3

const ele = document.getElementById(".ele1");
pintar = function (elemento, color){
    elemento.style.backgroundColor = color;
}
pintar(ele, "green")

ele.addEventListener("click", function(){
    pintar(ele, "yellow");
});