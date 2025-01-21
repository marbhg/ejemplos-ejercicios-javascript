function calcularPrecioAlquilerValidar(){
  const formulario = document.getElementById("alquiler");

  //Validad el formulario
 if  (formulario.checkValidity()){
  calcularPrecioAlquiler();
} else {
    document.getElementById('resultado').textContent = "Por favor, completa todos los campos obligatorios.";
}
}

