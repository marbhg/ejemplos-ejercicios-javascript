
function mostrarDatosMascotas(){
//Obtener los valores del formulario 
let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").valueAsNumber;
let tipo = document.getElementById("tipo").value;

//Clacular la edad en meses 
let edadenMeses = edad * 12;

//Mostrar los datos de las masctas
document.getElementById("resultado").textContent =
("Nombre de la mascota " + nombre + edadenMeses + tipo);

//Ocultar el formulario 
document.getElementById("registrodeMascotas").style.display = "none";

// Mostrar el resultado
    document.getElementById("resultado").style.display = "block";



}










