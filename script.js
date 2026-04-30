let habitaciones = [
    habitacion = {
        id: 1,
        numero: "1",
        tipo: "individual",
        precio: 50,
        disponible: true
    },
    habitacion = {
        id: 2,
        numero: "2",
        tipo: "doble",
        precio: 80,
        disponible: false
    },
    habitacion = {
        id: 3,
        numero: "3",
        tipo: "individual",
        precio: 50,
        disponible: false
    },
    habitacion = {
        id: 4,
        numero: "4",
        tipo: "doble",
        precio: 85,
        disponible: true
    },
    habitacion = {
        id: 5,
        numero: "5",
        tipo: "suite",
        precio: 150,
        disponible: true
    },
    habitacion = {
        id: 6,
        numero: "6",
        tipo: "individual",
        precio: 55,
        disponible: false
    },
    habitacion = {
        id: 7,
        numero: "7",
        tipo: "doble",
        precio: 82,
        disponible: true
    },
    habitacion = {
        id: 8,
        numero: "8",
        tipo: "suite",
        precio: 160,
        disponible: false
    },
    habitacion = {
        id: 9,
        numero: "9",
        tipo: "individual",
        precio: 48,
        disponible: true
    },
    habitacion = {
        id: 10,
        numero: "10",
        tipo: "doble",
        precio: 88,
        disponible: false
    }
];

const {disponible, numero} = habitaciones

function cambiarEstado(callback){
    let numeroHabitacion = prompt("Ingrese el número de la habitación a cambiar su estado: ")
    console.log("Esperando al personal del hotel...")
    setTimeout(()=>{
        const habitacion = habitaciones.find(h => h.numero === numeroHabitacion)
        if (habitacion.disponible === true){
            estadoInicial = "disponible"
        }else{
            estadoInicial = "ocupada"
        }
        
        if (habitacion){
            console.log("Estado actual de la habitación:",estadoInicial)
            let estado = prompt("Ingrese el nuevo estado de la habitación (disponible, ocupado): ")
            estado.toLocaleLowerCase()
            if(estado === "ocupado" || estado.toLocaleLowerCase() === "ocupada"){
                habitacion.disponible = false
            }else if(estado === "disponible"){
                habitacion.disponible = true
            }else{
                console.log("Estado no válido use: 'disponible' o 'ocupado'")
            }
            console.log("El estado de la habitación",habitacion.numero,"ha sido actualizado a",estado)        
        }else{
            console.log("La habitación",habitacion.numero,"no se encuentra registrada.")
        }
        setTimeout(()=>{
            callback()
        },2000)
    }, 3000)
}

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
            break
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
            registrarNuevaHabitacion(menu)
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
            cambiarEstado(menu)
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