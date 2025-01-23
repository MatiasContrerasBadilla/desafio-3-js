let divAzul = document.getElementById("div1")
let divRojo = document.getElementById("div2")
let divVerde = document.getElementById("div3")
let divAmarillo = document.getElementById("div4")

function pintar (elemento, color){
    elemento.style.backgroundColor = color;
}

divAzul.addEventListener("click", function(){
    pintar(divAzul, "black")
});

divRojo.addEventListener("click", function(){
    pintar(divRojo, "black")
});

divVerde.addEventListener("click", function(){
    pintar(divVerde, "black")
});
divAmarillo .addEventListener("click", function(){
    pintar(divAmarillo , "black")
});


let cambioColor = document.getElementById("key")
function cambiar(color){
cambioColor.style.color = color
}
document.addEventListener("keydown", function(event){
    if (event.key == "a"){
        cambiar("pink")
    }  
    else if (event.key == "s"){
        cambiar("orange")
    }
    else if (event.key == "d"){
        cambiar("skyblue")
    }
 
});

function crearDiv (color){
    nuevoDiv = document.createElement("div")
    document.body.appendChild(nuevoDiv)
    nuevoDiv.style.backgroundColor = color

    nuevoDiv.style.width = "200px"
    nuevoDiv.style.height = "200px"
    nuevoDiv.style.margin = "100px"
    nuevoDiv.style.border = "2px solid black"

}
document.addEventListener("keydown", function(event){
    if (event.key == "q"){
        crearDiv("purple")
    }

    else if (event.key == "w"){
        crearDiv("grey")
    }

    else if (event.key == "e"){
        crearDiv("brown")
    }

});
