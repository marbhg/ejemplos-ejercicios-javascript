function calcularPuntuacionValidar(){
  const formulario = document.getElementById("formularioPuntuacion");

//Validar el formulario 
if (formulario.checkValidity()){
  calcularPuntuacion();
} else {
document.getElementById("resultado").textContent = "El resultado obtenido no es correcto por favos introduzcalo de nuevo";
}

}

function calcularPuntuacion(){
const ganados = document.getElementById("partidosGanados").valueAsNumber;
const perdidos = document.getElementById("partidosPerdidos").valueAsNumber;
const empatados = document.getElementById("partidosEmpatados").valueAsNumber;

//Hacemos el calculo de la puntuacion 
const puntos = calcularPuntos(ganados, perdidos, empatados);
document.getElementById("resultado").textContent = "la puntuacion final del equipo es " + puntos + "puntos";

let color = colorResultado(puntos);
document.getElementById("resultado").style.color = color;

function calcularPuntos(ganados, perdidos, empatados){
  let puntosGanados = ganados * 3;
  let puntosPerdidos = perdidos * 0;
  let puntosEmpatados = empatados *1;
  
  let total = puntosGanados + puntosPerdidos + puntosEmpatados;
  return total;

}
}

function colorResultado(puntos) {
  // devolvemos el color que debe mostrar segun la puntuacion obtenida
  let color = 'blue';
  if (puntos > 20) {
      color = 'green';
  } else if (puntos < 5) {
      color = 'red';
  } else {
      color = 'blue';
  }
  return color;
}





