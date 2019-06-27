function calcularSC(x,y, ...z) { /* rest operator() los 3 ...), a partir de ese momento los demás z me lo coge como un Array */
    return (x)^2 +(y)^2
}

calcularSC(1,5,7,8)

/**
 * @description  Calcular la suma de los cuadrados de n números
 * @param  {Array} z 
 * @returns {number, array}
 *     += sirve para acumular cosas
 */

function calcularN(...z) { /* Recoge un parámetro (un Array) */   
    let r =0
    for (let i = 0; i < z.length; i++) {
        const item = z[i]
        r += item * item;
    }
    /* return r; */
    return {sumaTotal: r, aCuadrados: aCuadrados}
}

console.log(calcularN(1,2,0))

/* DECONSTRUIR UNA FUNCIÓN */

/* let sumaTotal;
let aCuadrados; */
/* let aResultados = calcularSC(1,5,7,8)
sumaTotal = aResultados[0]
sumaTotal = aResultados[1] */

let [sumaTotal,aCuadrados] = calcularSC(1,5,7,8)
/* sumaTotal,aCuadrados= calcularSC(1,5,7,8) */
console.log(sumaTotal)
console.log(aCuadrados)

/* calcularSC(5,8)

let a = 3;
let b =1;

calcularSC(a,b)

let x = 3;
let y =1;

calcularSC(x,y) */
/*  console.log(calcularSC('pepe','juan')) NaN */
/*  console.log(calcularSC(y)) NaN */

 /* console.log(calcularSC(8,9,5,8)) *//* VA A CALCULAR CON LOS DOS PRIMEROS NÚMEROS  A LOS DEMAS NO LOS HACE CASO */


