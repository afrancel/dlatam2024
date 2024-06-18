//operations
passVerify.addEventListener("click", () => {

    //dom
    let select1 = document.querySelector("#optiona");
    let select2 = document.querySelector("#optionb");
    let select3 = document.querySelector("#optionc");
    const passVerify = document.querySelector("#passVerify");
    let contrasenaUser = document.querySelector("#passRespuesta");
  
    //variables
    let opciona = select1.value;
    let opcionb = select2.value;
    let opcionc = select3.value;

    let combinacion = opciona+opcionb+opcionc;
    let passRespuesta = combinacion;

    if (combinacion == 911){
        passRespuesta = "Su respuesta es correcta (911)";
    }else if (combinacion == 714){
        passRespuesta = "Su respuesta es correcta (714)";
    }else{
        passRespuesta = "Su respuesta es Incorrecta";}

    //valores al dom
    contrasenaUser.innerHTML = passRespuesta;
  });
  