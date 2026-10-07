function Libro (nombre, autor, tipo){
    this.nombre = nombre;
    this.autor = autor;
    this.tipo = tipo;

    this.prestado = false

    this.prestar = function(){
        if (this.prestado){
            return `El libro ${this.nombre} ya está prestado. Intente nuevamente en unnos días`
        } else {
            this.prestado = true;
            return `El libro ${this.nombre} está disponible. Puedes pedirlo prestado`
        }
    }

    this.devolver = function(){
        if (this.prestado ){
            this.prestado = false;
            return `El libro ${this.nombre} se ha devuelto con exito  `
        } else {
            return `El libro ${this.nombre} no se puede devolver. No está prestado`
        } 
    }
}

const libro1 = new Libro ("Sobre la felicidad", "Séneca", "Filosofía");

console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro1.devolver());