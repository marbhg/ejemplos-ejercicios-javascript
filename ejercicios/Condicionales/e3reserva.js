function calcularPrecioValidar() {
  let formulario = document.getElementById('formularioReserva');
  
  // Validar el formulario
  if (formulario.checkValidity()) {
       calcularPrecio();
  }
  else {
      document.getElementById('resultado').textContent = "Por favor, completa todos los campos obligatorios.";
     
  }

}
function calcularprecio(){
  const tipodehabitacion = document.getElementById("tipodehabitacion").ariaValueMax;
  const numerodenoches = document.getElementById("numerodenoches").value;
  
  // ocultamos el formulario 
  let formulario = document.getElementById("formularioReserva");
  formulario.style.display.none;

  //Precio por tipo de habitacion 
  let precioPorNoche;
  if(tipodehabitacion === "familiar" ){
    precioPorNoche = 100;
  }
 else if (tipodehabitacion === "doble"){
  precioPorNoche = 50;
 }
else if (tipodehabitacion === "individual"){
  precioPorNoche = 30;
}
  //Calculamos el precio total 
 let  precioTotal = precioPorNoche * numerodenoches;
 
 //Mostramos el precio total 
 let mensaje = ("Total " + precioTotal);

 if (numeroNoches > 5) {
  let  descuento = precioTotal * 0.2; 
  let precioDescuento = precioTotal - descuento;
  //Agregamos al mensaje el descuento.
  mensaje += " Descuento 20% aplicado: "+ descuento + " Precio Final " + precioDescuento;
}

 document.getElementById("resultado").textContent = mensaje;


}