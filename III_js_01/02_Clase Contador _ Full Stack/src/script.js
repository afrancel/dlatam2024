//defino variables ppales
let quantity = 0;
const price = 10000;
let totalPrice = quantity * price

// Obtener elementos del DOM
const qupGet = document.getElementById('qup_field')
const qdownGet = document.getElementById('qdown_field')
var qGet = document.querySelector('#q_field')
let unitPriceGet = document.getElementById('uprice_field')
let totalPriceGet = document.getElementById('tprice_field')

// ASIGNO VALORES AL DOM
qGet.innerText = quantity;
unitPriceGet.innerText = price;
totalPriceGet.innerText = totalPrice;

// Evento de escuchar
qup_field.addEventListener('click', () => {
  quantity++
  totalPrice = quantity * price
  qGet.innerText = quantity;
  totalPriceGet.innerText = totalPrice;
})

qdown_field.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
    }else if(quantity === 1){
    console.log(alert("No se puede disminuir más"))}
    totalPrice = quantity * price
    qGet.innerText = quantity;
    totalPriceGet.innerText = totalPrice;
})