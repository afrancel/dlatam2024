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

  } else {
    document.getElementById("key").style.backgroundColor = "white";    
    document.getElementById("key").innerHTML = merror;
      
  }
});