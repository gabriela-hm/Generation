
const prompt = require('prompt-sync')();

function Vehiculo (marca, color,  modelo, ciudad, precio){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.ciudad = ciudad;
    this.precio = precio;

    this.darBienvenida = function() {
        console.log(`Bienvenido al sistema. Este ${this.marca} está listo para su venta en ${this.ciudad}.`);
    };

    this.mostrarInformacion = function() {
        console.log(`Vehículo: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Ciudad: ${this.ciudad}, Precio: $${this.precio}`);
    };

    this.cambiarPrecio = function(nuevoPrecio) {
        this.precio = nuevoPrecio; 
        console.log(`El precio del vehículo ${this.marca} ha sido actualizado a $${this.precio}`);
    };

    
}
const guardarVehiculos = []

for (let i = 0; i < 3; i++){
    console.log(`Registro de Vehículo ${i + 1}` )
    const marca = prompt("Ingrese la marca: ");
    const color = prompt("Ingrese el color: ");
    const modelo = prompt("Ingrese el modelo: ");
    const ciudad = prompt("Ingrese la ciudad: ");
    const precio = prompt("Ingrese el precio: ");

    const nuevoVehiculo = new Vehiculo (marca, color,  modelo, ciudad, precio);

    guardarVehiculos.push(nuevoVehiculo);
}

console.log("INFORMACIÓN DE LOS VEHÍCULOS")
for (let i = 0; i < guardarVehiculos.length; i++){
    console.log (`Acciones del vehículo ${i + 1}:`)
    guardarVehiculos[i].darBienvenida();
    guardarVehiculos[i].mostrarInformacion();
    
    
    guardarVehiculos[i].cambiarPrecio(Number(guardarVehiculos[i].precio) * 0.90);
}