
//      BUCLES

    /* OPERADORES

    *operadores de incremento o decremento muy importante  += o -= https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=796:ejemplos-javascript-operadores-incremento-y-decremento-asignacion-y-asignacion-compuesta-cu01118e&catid=78&Itemid=206


    /*COMPARACION https://es.stackoverflow.com/questions/331/diferencias-entre-y-comparaciones-en-javascript/402*/

    /*Los operadores === y !== son los operadores de comparación estricta. Esto significa que si los operandos tienen tipos diferentes, no son iguales. Por ejemplo*/
    1 === "1" // false
    1 !== "1"  // true
    null === undefined // false 

    /*Los operadores == y != son los operadores de comparación relajada. Es decir, si los operandos tienen tipos diferentes, JavaScript trata de convertirlos para que fueran comparables. Por ejemplo, */
    1 == "1" // true
    1 != "1" // false
    null == undefined // true
    /**No es muy fácil recordar todas las reglas de la comparación relajada, y a veces funciona en una manera contraintuitiva. Por eso, yo recomiendo usar === en vez de ==  */
        1 == "1" // verdadero    
        1 === "1" // falso
        '' == 0 // verdadero
        '' === 0 // falso

// FOR 

let aDatos = ['BMW','audi','seat','skoda','vw' ]

for (let i = 0; i < aDatos.length; i++) {
    let item = aDatos[i];
    
  
    if (i<1) {
        item =  item +' me enamora el ' + item;
    }
    else if (i>1,i<4) {
        item = item + ' no está mal el ' + item;
    } 
    else if (i>=4) {
        item = item + ' como contamina el ' + item;
    }  
 
   console.log(` tengo un ${item}`)
}

/**
 * @description Funcion que recorra un array dividiendo numero n  entre 2 y mostrando el numero n entre dos igual a 
 * @param  {Array} z 
 * @returns {number, array}
 * 
 */

let aNumeros = [75, 100, 50, 44, 120 ,24]

function recorrido() {
    
    for (let i = 0; i < aNumeros.length; i++) {
        let item =aNumeros[i];
        item =  ` El numero ${item} dividido entre 2 su resultado es ` + item/2 //aquí digo que el item va a ser el numero de la posicion del array aDatos en 0 será 75 en 1 será 100... de ahi el bucle for e igualo item a lo que yo quiero que suceda en este caso dividirlo por dos item = item/2 y como quiero que me lo muestre de una manera determinada le sumo por delante o por detras el texto deseado con comilas francesas
        
    console.log(item)
    }
    
    
}

recorrido(aNumeros)

/**
 * @description Funcion reciba un valor x en kilometros por hora y lo devuelva en mph  
 */
let aKm = [30, 50, 80, 100, 130 ,160]

function pasarAMillas() {
    for (let i = 0; i < aKm.length; i++) {
        let item = aKm[i];
        item = item/1.61 ; //si lo quito veo la inferior
        if (item>60) {
          item = item + ' ATENCION EXECE EL LIMITE DE VELOCIDAD' 
        } 
        console.log(item)
    } 
}
pasarAMillas(aKm)

/**
 * @description Funcion miValidNumber que comprueba si una expresión  es convertible a un número valido rechazando objects,Arrays, booleans, null undefined, '' y string no numéricos
 * @param {any} 
 * @returns {boolean}
 */
function miValidNumber(n) {
    let v = true 
    if (isNaN(n) || typeof n =='boolean' 
    || Array.isArray(n) || n === '' || n === null   ) {v = false
    }
        
        return v
    }
    aDatos = [50 , 25]
console.log(miValidNumber(aDatos))//False
//xk????
console.log(miValidNumber(25))//true

/*


PARSEFLOAT convierte su argumento, una cadena, y devuelve un número de punto flotante. Si encuentra un carácter diferente al signo (+ o -), numerales (0-9), un punto decimal o un exponente, devuelve el valor hasta ese punto e ignora ese carácter y todos los correctos siguientes. Se permiten espacios anteriores y posteriores.

Si el primer carácter no se puede convertir a número, parseFloat devuelve NaN. 
 */

function isEntero( n = 0) {
    return (parseInt(n) === parseFloat(n)) //Si el primer carácter no se puede convertir en número, parseInt devuelve NaN.
}
console.log(isEntero(25))//true
console.log(isEntero(30))//true
console.log(isEntero(25.1))//false