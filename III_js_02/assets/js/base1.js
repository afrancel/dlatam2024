//variable
let img = document.querySelector("img");

//operations
img.addEventListener("click", () => {
  if (img.style.border) {
    img.style.border = "";
  } else {
    img.style.border = "5px solid green";
  }
});
