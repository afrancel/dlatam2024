//operations
passVerify.addEventListener("click", () => {

    //dom
    let select1 = document.querySelector("#optiona");
    let select2 = document.querySelector("#optionb");
    let select3 = document.querySelector("#optionc");
    const passVerify = document.querySelector("#passVerify");
    const contrasenaUser = document.querySelector("#passRespuesta");
  
    //variables
    let opciona = select1.value;
    let opcionb = select2.value;
    let opcionc = select3.value;

    let combinacion = opciona+opcionb+opcionc;
      
    if (combinacion === 911){
        passRespuesta = "Correcto";
    }else if (combinacion === 714){
        passRespuesta = "Correcto dos";
    }else{
        combinacion = "Incorrecto";} 

    let passRespuesta = combinacion;        

      //valores al dom
    contrasenaUser.innerHTML = passRespuesta;
  });
  