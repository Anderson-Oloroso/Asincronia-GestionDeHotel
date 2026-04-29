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

function cambiarEstado(callback){
    let numeroHabitacion = Number(prompt("Ingrese el número de la habitación a cambiar su estado: "))
    setTimeout(()=>{
        console.log("Esperando al personal del hotel...")
    }, 3000)
    
    const habitacion = habitaciones.find(habitacion => habitacion.numero === numeroHabitacion)
    if (habitacion.disponible === true){
        estadoInicial = "disponible"
    }else{
        estadoInicial = "ocupada"
    }
    if (habitacion){
        console.log("Estado actual de la habitación:",estadoInicial)
        let estado = prompt("Ingrese el nuevo estado de la habitación (disponible, ocupada: ")
        if(estado.toLocaleLowerCase() === "ocupado" || estado.toLocaleLowerCase() === "ocupada"){
            habitacion.disponible = false
        }else if(estado.toLocaleLowerCase() === "disponible" || estado.toLocaleLowerCase() === "disponible"){
            habitacion.disponible = true
        }else{
            console.log("Estado no válido")
        }
        console.log("El estado de la habitación",habitacion.numero,"ha sido actualizado a",estado)        }else{
        console.log("La habitación",habitacion.numero,"no se encuentra registrada.")
    }
    setTimeout(()=>{
        callback()
    },2000)
}