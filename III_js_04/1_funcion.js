/*Transforma esta declaración de función
a una función de expresión. El ejercicio
debe quedar en un archivo nombrado `1_funcion.js` (1 Punto)
*/

function example(a, b, c) {
  return a + b + c;
}

// Mi respuesta
console.log(example(2, 3, 4));

//Respuesta esperada
const example = (a, b, c) => {
  return a + b + c;
};
console.log(example(2, 3, 4));
