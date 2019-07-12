
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
 //Math.sqrt(a) realiza la raiz cuadrada de a
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
let aKm = [30, 50, 80, 100, 130, 160]

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

/** 
 *      OBJETOS &  FORIN
*/


let coche1 = {
    marca: 'audi',
    modelo:  's3',
    año: '1999',
    motor: {
        cilindrada: '1800cc',
        potencia: '210cv',
        parMotor: '270nm'},
    peso:'1460kg',
    extras: ['A/C', 'QUATTRO', 'turbo']
}
let coche2 = {
    marca: 'Alfa Romeo',
    modelo:  '33',
    año: '1994',
    motor: {
        cilindrada: '1400cc',
        potencia: '88cv',
        parMotor: '116nm'},
    peso:'960kg',
    extras: [],
}
let prop='peso'
console.log(coche2['motor']) //lo pongo entre corchets para que no se piense que llamo a ninguna funcion 
console.log(coche2[prop])/* [] es una notación especial para acceder a una porpiedad de nombre desconocido (dentro de una variable) el corchete hace que INTERPOLE la variable */
console.log(coche2.extras)
console.log(`**********************`)

//El comportamiento del forin es similar al del for key actua como el index i  del for recorriendo el objeto en este caso las key son marca, modelo, año... Los nombres de los valores de la propiedades
for (const key in coche1) { 
    if (coche1.hasOwnProperty(key)) {
        const value = coche1[key];
        console.log(` EL ${key} de este vehiculo es: ${value}`)
    }
}  

for (const key in coche2) { 

    const value = coche2[key];
    console.log(` EL ${key} de este vehiculo es: ${value}`)
    
    if ((key == 'extras' || key =="super") && !coche2[key])
     {
        value = 'de este vehiculo no esta disponible.' 
    } //Pork no me hace ni caso
}

/** 
 * @description Función que recorre un objeto a tantos niveles como contenga y crea un String con la información
 * @param {Objeto}
 * @returns {String}
 */
function objectToString(object={}) {
    let cadena=``
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            if(typeof value == 'object' && !Array.isArray(value)){
                cadena+= `${key}: ${objectToString(value)}`  
            }else {
                cadena+= `${key}: ${value}` 
            }
        }
    }return `${cadena} `
}

console.log(objectToString(coche2))




/************** */
//   Funciones Flecha 
//         =>
//usado en emcs6 la flecha hace las veces de funcion y los parametros traseros tras funcion invierten el orden ahora se ponen por delante. solo se usa en funcionces cortas de una linea  podremos ahorrarnos los parentesis

//a la vieja usanza
function isentero( n = 0) {
    return (parseInt(n) === parseFloat(n)) }
//nueva usanza 
let isEnteroArrow = (n = 0) => parseInt(n) === parseFloat(n)
    // para utilizar la arrow necesito siempre declarar una variable??????????
console.log(isEntero(6))
console.log(isEnteroArrow('8'))
console.log(isEnteroArrow('pepe'))

//////////////////////////////////////////
        //CALLBACK
/**Un callback es una función. Esta función se la das como parámetro a otra función para que cuando termine de ejecutarse llame a tu callback.

Normalmente tu función callback hace algo con el resultado de la función a la que fue pasada. Así no tienes que esperar a que la función que llamas termine para continuar haciendo otras cosas, porque sabés que te va a "llamar de vuelta" cuando tenga los resultados.

Le dices a una función:

Función, toma estos parámetros y esta función callback, haz tu trabajo y cuando termines me avisas ejecutando esta función callback.
Un callback puede ser cualquier función, generalmente se usan funciones anónimas o lambdas pero no es necesario */
 
function hazAlgo(x, y, algo, callback){ 
    let quéHago = `El resultado de ${algo} con los numeros ${x} y ${y} es igual a: `;
    return quéHago + callback(x,y)
} 
console.log(hazAlgo(4,6,'sumar',(x,y) => x+y))

/*
tambien funciona con tres parametros incluso con dos a y callback para despues operar sobre a  
function hazAlgo(x, y, callback){ 
    let quéHago = `El resultado de operar con los numeros ${x} y ${y} es igual a: `;
    return quéHago + callback(x,y)
}
console.log(hazAlgo(4,6,(x,y) => x+y)) */