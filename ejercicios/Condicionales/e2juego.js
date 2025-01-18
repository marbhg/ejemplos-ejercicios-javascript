function mostrarMensaje(){
const nombre = document.getElementById("nombre").ariaValueMax;
mensaje="";

//Paamos el nombre en mayusculas 
let nombreMayuscula = nombre.toUpperCase();

//Validar que el campo no este vacio
if (nombre.length > 20){
  mensaje= "Tu nombre es largo y poderoso, ¡destinas a hacer grandes cosas";
}
 else if (nombreMayuscula.includes("B")) {
  mensaje = "Tu nombre contiene la letra 'B', lo que significa que tienes una personalidad fuerte y decidida.";
} else if (nombreMayuscula.includes("ANA")) {
  mensaje = "¡Vaya! Tu nombre tiene 'ANA', lo que indica que eres una persona amable y cariñosa.";
} else {
  mensaje = "Tienes un nombre único y especial, ¡reflejas una personalidad auténtica y diferente!";
}

// Mostrar el mensaje en el párrafo
document.getElementById('resultado').textContent = mensaje;

}