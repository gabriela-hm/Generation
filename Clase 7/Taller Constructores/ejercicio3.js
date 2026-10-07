function Estudiante (nombre, curso, nota){
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
   

    this.aprobado = this.nota >= 3.0;

    this.mostrarResultado = function(){
        if (this.aprobado ){
            return `${this.nombre} Aprobó`
        } else {
            return `${this.nombre} No aprobó`
        }
    }

}
    const estudiante1 = new Estudiante ("Samuel", "A1", 2.8, )
    const estudiante2 = new Estudiante ("Jorge", "A2", 4.8, )
    const estudiante3 = new Estudiante ("Hanna", "A1", 3.8, )
    const estudiante4 = new Estudiante ("Sara", "A5", 0.8, )
 console.log (estudiante1.mostrarResultado());
  console.log (estudiante2.mostrarResultado());
   console.log (estudiante3.mostrarResultado());
    console.log (estudiante4.mostrarResultado());