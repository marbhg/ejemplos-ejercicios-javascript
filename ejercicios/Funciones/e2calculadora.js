function suma(){

  let numero1 = document.getElementById("numero1").valueAsNumber;
  let numero2 = document.getElementById("numero2").valueAsNumber;

  //Mostramos el resultado 
  let resultado = numero1 + numero2;
  document.getElementById("resultado").textContent = ("Resultado de la suma: " + resultado);

  //Cambiamos el boton de color sumar 
  document.getElementById("botonSumar").style.color = "blue";
}
 
//Mostramos l a funcion y el resultado de la resta 
function resta(){

let numero1 = document.getElementById("numero1").valueAsNumber;
let numero2 = document.getElementById("numero2").valueAsNumber;

//Mostramos el resultado 
let resultado = numero1 - numero2;
document.getElementById("resultado").textContent = ("Resultado de la resta es " + resultado);

 //Cambiamos el boton de color sumar 
 document.getElementById("botonRestar").style.color = "blue";
}

// Mostramos la funcion Multiplicacion 
function multiplicar(){
  let numero1 = document.getElementById("numero1").valueAsNumber;
  let numero2 = document.getElementById("numero2").valueAsNumber;

  //Mostramos el resultado 
let resultado = numero1 * numero2;
document.getElementById("resultado").textContent("Resultado de la multiplicacion es " + resultado);

 //Cambiamos el boton de color sumar 
 document.getElementById("botonMultiplicar").style.color = "blue";

}

//Mostramos la funcion de la division 
function dividir(){
  let numero1 = document.getElementById("numero1").valueAsNumber;
  let numero2 = document.getElementById("numero2").valueAsNumber;

  //Mostramos el resultado 
  let resultado = numero1 / numero2;
  document.getElementById("resultado").textContent("Resultado de la division es " + resultado);

   //Cambiamos el boton de color sumar 
   document.getElementById("botonDividir").style.color = "blue";
}