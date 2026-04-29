
let habitaciones = [
  {
    id: 1,
    numero: "1",
    tipo: "individual",
    precio: 50,
    disponible: true
  },
  {
    id: 2,
    numero: "2",
    tipo: "doble",
    precio: 80,
    disponible: false
  }
];

function registrarNuevaHabitacion (callback) {
  let numero = prompt("Ingrese el número de habitación:");
  let tipo = prompt(" de la habitacion (individual o doble):")
  let precio = Number(prompt("ingrese el precio de la habitacion:"))

  console.log("validando informacion de habitacion...")

  const nuevahabitacion={
    id : habitaciones.length + 1,
    numero: numero,
    tipo :tipo,
    precio : precio,
    disponible : true
  }
  
  habitaciones.push(nuevahabitacion)

  console.log("habitacion registrada correctamente")

}

console.log(registrarNuevaHabitacion());



