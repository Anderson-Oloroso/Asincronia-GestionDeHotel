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
