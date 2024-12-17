//Creo una frase en una variable
let frase = "vive tus sueños";

//Muestro la longitud de la frase
let longitudfrase = frase.length
document.write("Muesto la longitud de la frase: " + longitudfrase + "<br>");

//Muestto la frase en Mayuscula
let fraseMayuscula = frase.toUpperCase();
document.write("Frase en Mayuscula: " + fraseMayuscula + "<br>");

//Muestro la frase en minuscula
let fraseMinuscula = frase.toLowerCase();
document.write("Frase en minuscula: " + fraseMinuscula + "<br>");

//Reemplazar la frase por otra 
let nuevaFrase = frase.replace("desafiante ", "insuperable");
Document.write("Nueva frase: " + nuevaFrase + "<br>");