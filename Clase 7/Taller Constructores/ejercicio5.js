
const prompt = require('prompt-sync')();

function Vehiculo (marca, color,  modelo, ciudad, precio){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.ciudad = ciudad;
    this.precio = precio;

    
    
}

for (let i = 0; i < 3; i++){
    console.log(`Registro de Vehículo ${i + 1}` )
    const marca = prompt("Ingrese la marca: ");
    const color = prompt("Ingrese el color: ");
    const modelo = prompt("Ingrese el modelo: ");
    const ciudad = prompt("Ingrese la ciudad: ");
    const precio = prompt("Ingrese el precio: ");

    const nuevoVehiculo = new Vehiculo (marca, color,  modelo, ciudad, precio);
}