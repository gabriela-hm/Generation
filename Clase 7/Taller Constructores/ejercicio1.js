function Computador(marca, procesador, ram, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;

}

const computador1 = new Computador("Lenovo loq 15", "Intel Core i3", 8 , 4490000 );
const computador2 =  new Computador("Ascer aspire", "Intel Core i3", 8, 1530000 );
const computador3 = new Computador("Asus vivobook Go 15", "Ryzen 5", 8, 1999900 );

console.log(computador1);
console.log(computador2);
console.log(computador3);