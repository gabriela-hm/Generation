const prompt = require('prompt-sync')();
let opcion;

do {
    console.log("-------MENÚ NEQUI-----------")
    console.log(" Ver saldo");
    console.log(" Enviar dinero");
    console.log(" Recargar");
    console.log(" Salir");
    opcion = prompt("Elija una opción: ");
    

    console.log (opcion);
    if (opcion == "Ver saldo"){
        console.log("Su saldo es: $500.000")
    } else if (opcion == "Enviar dinero"){
        console.log("¿A quién le quieres enviar dinero?")
    } else if (opcion == "Recargar"){
        console.log ("¿Cuánto quieres recargar?")
    } else if (opcion == "Salir"){
        console.log ("Gracias por usar Nequi, Vuelva pronto.")
    }else {
        console.log("Opción no válida, intente de nuevo.");
    }
}while (opcion != "Salir");
