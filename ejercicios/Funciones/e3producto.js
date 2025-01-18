function calcularPrecio(){
  //Obtenemos los valores de cada producto 
  let nombreProducto = document.getElementById("nombreProducto").value;
  let precio = document.getElementById("precio").valueAsNumber;
  let cantidad = document.getElementById("cantidad").valueAsNumber;
  let descuento = document.getElementById("descuento").valueAsNumber;
  let iva = document.getElementById("iva").valueAsNumber;

//Obtenemos el resultado de cada producto
let precioBruto = precio * cantidad;
let totalDescuento = (precioBruto * descuento) / 100;
let precioConDescuento = precioBruto - totalDescuento;
let totalIVA = (precioConDescuento * iva) / 100;
let precioTotal = precioConDescuento + totalIVA;

//Mostramos el resultado 
document.getElementById("resultado").textContent = 
"El precio total de " + nombreProducto + " es: " + precioTotal + " euros.";
}