/*
---> FUNCIÓN ORIGINAL
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*/

/*
Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función (1 Punto).
Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
funcionando en conjunto con el código modificado

*/
/*
---> FUNCIÓN MODIFICADA
function pintar(event) {
  event.target.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);
*/

/*
Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color. (1 Punto).
*/

function pintar(event, color = "green") {
  event.target.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", (event) => pintar(event, (color = "yellow")));
