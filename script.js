let input = document.getElementById("inputTemperatura");
let boton = document.getElementById("btn");
let result = document.getElementById("resultado");


boton.addEventListener("click", () =>{
  
  if (input.value === "") {
    result.textContent= "escribe un numero"
    return;
  }

  let numero = Number(input.value)
  let kelvin = numero + 273.15;
  let Fahrenheit = (numero * 9/5)+32;
  result.innerHTML = `kelvin: ${kelvin} <br> Fahrenheit: ${Fahrenheit}`
})