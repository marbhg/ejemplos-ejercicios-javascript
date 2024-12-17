///Crea un programa que almacene una dirección de correo electrónico. Luego realiza lo siguiente:
let correo = "mar@gmail.com";

//Muestra la longitud de la direccion del correo
let longitudCorreo = correo.length;
document.write("Ver la longitud del correo: " + longitudCorreo + "<br>");

//Muestra la direccion de correo en mayuscula
let correoMayuscula = correo.toUpperCase();
document.write("Direccion de correo en mayusculas: " + correoMayuscula + "<br>");

//Muestra la direccion de correo en minuscula
let correoMinuscula = correo.toLowerCase();
document.write("Direccion de correo en minuscula: " + correoMinuscula + "<br>");

//Reemplaza el dominio del correo por email.es y muestra el nuevo correo
let correoRemplazo = correo.replace("mar@gmail.com ", "mar@email.es");
document.write("Nuevo Correo: " + correoRemplazo + "<br>");

