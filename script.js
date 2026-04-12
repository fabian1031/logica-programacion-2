let input = document.getElementById("inputTemperatura");
let boton = document.getElementById("btn");
let result = document.getElementById("resultado");
let kelvin = document.getElementById("valorKelvin");
let fahrenheit = document.getElementById("valorFahrenheit");
let barra = document.getElementById("barraMovimiento");


function obtenerDescripcion(temp) {
  if (temp <= 0) {
    return "congelación";
  } else if (temp <= 10) {
    return "muy frío";
  } else if (temp <= 18) {
    return "frío moderado";
  } else if (temp <= 24) {
    return "templado / agradable";
  } else {
    return "caluroso";
  }
}

boton.addEventListener("click", () => {
  if (input.value === "") {
    result.textContent = "escribe un numero";

    return;
  }
  result.textContent = "";

  let numero = Number(input.value);
  let kelvinTemp = numero + 273.15;
  let fahrenheitTemp = (numero * 9) / 5 + 32;
  let porcentaje = ((numero - -50) / (200 - -50)) * 100;


  barra.style.height = porcentaje + "%";
  kelvin.innerHTML = kelvinTemp.toFixed(2);
  fahrenheit.innerHTML = fahrenheitTemp.toFixed(2);
  result.textContent = obtenerDescripcion(numero);

});
