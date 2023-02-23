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