
//Creo una lista de la compra 
let listaCompra = "Arandanos + Chocolate + Fresas ";

//Creo la longitud de la lista de la compra 
 let longitudLista = listaCompra.length;
document.write("Longitud de la cadena de la compra " + longitudLista + "<br>");

//Se muestra la lista de la compra en mayuscula 
let listaMayuscula = listaCompra.toLocaleUpperCase();
document.write("Lista de la compra en mayuscula " + listaMayuscula + "<br>");

//Se muestra la lista de la compra en minuscula
let listaMinuscula = listaCompra.toLocaleLowerCase();
document.write("Lista de la compra en minuscula " + listaMinuscula + "<br>");

//Se muestra TRUE si la lista contiene la palabra manzana
let palabraManzana = listaCompra.includes("Manzana");
document.write("La lista contiene la plabra: Manzana? " +  palabraManzana + "<br>");

//Reemplaza un articulo de la compra por otra. 
let nuevoVegetal = listaCompra.replace("Lechuga");
document.write("Nueva lista de la compra " + nuevoVegetal + "<br>");



