
const movimientos= [20000, -20000, 50000, -25000, 100000, -45000];
let total = 0;
let cantidadRetiros= 0;
for (let i = 0; i < movimientos.length; i++){
    let valorActual = movimientos[i];
    total = total + valorActual;

    if(valorActual < 0 ){
        cantidadRetiros = cantidadRetiros + 1;
    }


}

    console.log("El total es:" + total, "la cantidad de retiros es :" + cantidadRetiros);