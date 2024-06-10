//variables
const precio = 400000;
var cantidad = 0;
var valorTotal = precio*cantidad;

//dom
let precioSpan = document.querySelector(".precio-inicial");
var getCantidad = document.querySelector('.cantidad');
var getplusud = document.getElementById('plus_units');
var getminusud = document.getElementById('minus_units');
let getvalorTotal = document.querySelector('.valor_total')

/*Hola Everto, gracias por tus observaciones siempre. Duda.
¿por qué uso en la línea 8 y 9 ".getElementById" ó "querySelector" y funciona igual
Entiendo que tengo en el html "id", pero intenté hacerlo con class, usando 
".querySelector" y ".querySelectorAll", pero no funcionó ninguno.

La duda me surge además, porque dupliqué la card,
para ver como se comportaba con múltiples elementos, y puff nada.

Atento a tu feedback para tener otra perspectiva. ¡Muchas gracias!
*/

//valores al dom
precioSpan.innerHTML = precio;
getCantidad.innerHTML = cantidad;
getvalorTotal.innerHTML = valorTotal;
mensaje = "Disculpa, no se puede disminuir más.\nYa estás en la cantidad mínima";

//operations
plus_units.addEventListener('click', () =>{
    cantidad++;
    valorTotal = precio*cantidad;
    getCantidad.innerHTML = cantidad;
    getvalorTotal.innerHTML = valorTotal;    
});

minus_units.addEventListener('click', () =>{
    if (cantidad > 0) {
        cantidad--;
      }else if(cantidad === 0){
      console.log(alert(mensaje))}
    
    valorTotal = precio*cantidad;
    getCantidad.innerHTML = cantidad;
    getvalorTotal.innerHTML = valorTotal;    
});