function menu(){
    let opc = prompt("============= HOTEL STITCH =============\n"+
                    "1. Registrar habitaciones\n"+
                    "2. Listar habitaciones\n"+
                    "3. Buscar habitación por numero\n"+
                    "4. Cambiar estado de una habitación\n"+
                    "5. Eliminar habitación\n"+
                    "6. Salir")

    switch(opc){
        case "1":
            console.log("----- RESGISTRAR HABITACIONES -----")

            break
        case "2":
            console.log("----- LISTAR HABITACIONES -----")
            listarHabitaciones(menu)
            break
        case "3":
            console.log("----- BUSCAR HABITACIÓN POR NÚMERO -----")
            break
        case "4":
            console.log("----- CAMBIAR ESTADO DE UNA HABITACIÓN -----")
            break
        case "5":
            console.log("----- ELIMINAR HABITACIÓN ------")
            break
        case "6":
            console.log("------ SALIENDO DEL PROGRAMA ... -----")
            return
        default:
            console.log("INGRESE UNA OPCION VÀLIDA")
    }
}

function listarHabitaciones(callback){
    if (habitaciones.length === 0){
        console.log("Aun no hay registros")
    }else{
        habitaciones.forEach(habitacion=>{
            console.log(habitacion)
        })
    }
    setTimeout(()=>{
        callback()
    },2000)
}

menu()

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


//Buscar habitacion por numero.

function habitacionNumero(callback) {

    let busqueda = parseInt(prompt('ingrese el numero de la habitacion a buscar: '))
    
    
    console.log("consultando base de datos del hotel ...")

    setTimeout(function(){
        let encontrada = habitaciones.find(function(cuarto){
            return cuarto.numero === busqueda;
        })
        if (encontrada){
            if (encontrada.disponible){
                console.log("La habitacion ",encontrada.numero," esta OCUPADA")
            }else {
                console.log("el cuarto numero ", encontrada.numero," esta DISPONIBLE")
            }
            
        }else{
            console.log("Habitacion no encontrada, intente de nuevo")
        }
    },2000)
}
