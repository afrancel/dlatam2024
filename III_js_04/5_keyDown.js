var keyColor = "Blanco";

document.addEventListener("keydown", function (event) {
  let merror = "No hay seleccionado un color correcto";
  let mok = "El color seleccionado es: " + keyColor;
  if (event.key === "a") {
    keyColor = "Rosado";
    document.getElementById("key").style.backgroundColor = "pink";
    document.getElementById("key").innerHTML = mok;
  } else if (event.key === "s") {
    keyColor = "orange";
    document.getElementById("key").style.backgroundColor = "orange";
    document.getElementById("key").innerHTML = mok;
  } else if (event.key === "d") {
    keyColor = "blue";
    document.getElementById("key").style.backgroundColor = "lightblue";
    document.getElementById("key").innerHTML = mok;
  } else if (event.key === "q") {
    createNewDiv("purple");
  } else if (event.key === "w") {
    createNewDiv("gray");
  } else if (event.key === "e") {
    createNewDiv("brown");
  } else {
    document.getElementById("key").style.backgroundColor = "white";
    document.getElementById("key").innerHTML = merror;
  }
});

/*Siguiendo con la lógica del punto anterior, al presionar
las teclas q, w o e se deberá crear un div nuevo de las mismas
dimensiones antes mencionadas con los colores morado, gris y café respectivamente"*/

document.addEventListener("keydown", function (event) {

});
function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.margin = "50px";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv); /*ESTO NO LO VIMOS*/
}
