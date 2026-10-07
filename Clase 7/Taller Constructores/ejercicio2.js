function Mascota (nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function(){
    return `${this.nombre}, ${this.especie}, ${this.edad}, ${this.peso} `;
}
}



const mascota1 = new Mascota ("Ruperto", "Perro", 5, 3.5);
const mascota2 = new Mascota ("Michigan", "Gato", 8, 5.5);
const mascota3 = new Mascota ("Pecas", "Perro", 2, 12);

console.log("Mascota 1: ", mascota1.presentarse());
console.log("Mascota 2: ", mascota2.presentarse());
console.log("Mascota 3: ", mascota3.presentarse());
