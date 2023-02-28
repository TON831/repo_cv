// Calcula edad
function getEdad() {
    let hoy = new Date()
    let fechaNacimiento = new Date("1989/10/02")
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--
    }
    document.getElementById('edad').innerHTML = edad;
}

// Modo Oscuro
document.getElementById('btn_oscuro').onclick=function(){
  document.body.style.backgroundColor = '#454545';
  document.body.style.color = '#FFFFFF';
}

// Modo Claro
document.getElementById('btn_claro').onclick=function(){
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.color = '#000000';
}


// Boton cerrar
document.getElementById("btn_salir").onclick = function(){
  alert("Gracias por visitar esta pagina");
  window.close();
}