const prompt = require('prompt-sync')();
let pinCorrecto = 1234;
let intento = prompt("Ingrese el pin:");
console.log(intento);
while (intento != pinCorrecto){
    console.log("El pin es incorrecto");
    intento = prompt("Intentelo de nuevo:");
}
console.log("El pin es correcto! , Bienvenido a Nequi")
