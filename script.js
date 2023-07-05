let hola = prompt("Escribe semaforo");
if (hola === "semaforo") {
  const intervalID = setInterval(semaforo, 2000)
}

let luces = ['rojo', 'amarillo', 'verde']
const semaforoLuz = document.querySelector('#semaforo-img')

function semaforo() {
  const color = luces.pop()
  console.log(color)
  if (!luces.length)
  luces = ['verde', 'amarillo', 'rojo']
  semaforoLuz.src = "img/" + color + ".png"
  return color
}