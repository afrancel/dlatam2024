//operations
verificarBtn.addEventListener("click", () => {

  //dom
  let input1 = document.querySelector("#opcion1");
  let input2 = document.querySelector("#opcion2");
  let input3 = document.querySelector("#opcion3");
  const verificarBtn = document.querySelector("#verificarBtn");
  const totalProductos = document.querySelector("#productosIngresados");

  //variables
  let opcion1 = parseInt(input1.value);
  let opcion2 = parseInt(input2.value);
  let opcion3 = parseInt(input3.value);
  const resultado = opcion1 + opcion2 + opcion3;
  const qMax = 10;

  respuesta = ''
  if (resultado <= qMax){
    respuesta = "Llevas " + resultado + " bicis"}
    else{
      respuesta = "Llevas demasiadas bicis";
    }
  
  //valores al dom
  totalProductos.innerHTML = respuesta;
});
