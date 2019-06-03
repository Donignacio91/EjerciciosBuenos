/**
 * JSDoc
 * @description Programa que calcula y muestra si un numero es par o impar
 * requisitos de un proyecto
 */
/**
 * @description Función que calcula si un número es par
 * @param {number}: n
 * @returns {boolean}
 */

/**
 * @description Función que comprueba si una función es convertible a un numero valido rechazando los valores no validos 
 *  boolean null strings no numéricos undefine ''
 *  @param {number}: n
 *  @returns {boolean}
 */


/**
* @description Función que calcula si un número es par
* @param {number}: n
* @returns {boolean}
*/

function isPar(n) {

    let r = true

    if (isValidNumber(n)) {
        throw 0 //antes m-2 //excepcion: n no es un numero)
        
    } else if (!isEntero(n)) { //2º excepción
        throw 1 //antes -1
       
    }
    else if (n % 2) /*resto de la división entre 2*/
     {
        r = false
    }

    return r

}

/*//let x = 1
console.log (!(x%2))
x = 2
console.log (!(x%2))
x = 3
console.log (!(x%2))
x = 4
console.log (!(x%2))
isPar (x)*/

/**
 * @description Función que muestra si un numero es par o impar 
 * @param {number: n}
 * @returns {void}
 */

function mostrar(n) {
    let i = 0
    let output = '';
        let mensajes = [
            `El Número ${n}  es impar`,
        `El Número ${n}  es par`,
        ]
        let excepciones =[
        `El Número ${n} no es entero`,
        `${n} no es un Número`,
    ]
    try {
        i = Number(isPar(n))  // esto solo puede return 0,1 o throw -1,-2
        output = mensajes[i]
    } catch (error) { //error -1,-2
       // i= -error +1
       //output = excepciones[error]
       output= excepciones[i]
    }
    console.log(output)
}
mostrar(4)

/**
 * @description Función que calcula si un número entero
 * @param {number}: n
 * @returns {boolean}
 */

function isEntero(n = 0) {
    return (parseInt(n) === parseFloat(n))
}
/**
* @description Función que comprueba si una función es convertible a un numero valido rechazando los valores no validos 
*  boolean null strings no numéricos undefine ''
*  @param {number}: n
*  @returns {boolean}
* */


function isValidNumber(n) {
    r = true
    if (isNaN(n) || typeof n == 'boolean'
        || Array.isArray(n) || n === '' || n === null) {
        r = false
    }
    return r
}

function probar() {
    let x
    x = 1

    // console.log(isEntero(x))
    mostrar(x)
}
//probar()

/*function errores() {
  
}

errores()*/


  /* 
  const x = 67
  let z = 45 
    try {
        
        //x = 51
        throw 'probando error' /* con el throw lanzamos un erro cuando se produce un error ya sea proboado por mi o casual pasa por el catch y ya le digo que hacer en caso de error*/
       /* z = z + x
        console.log(z)
    }/* z pasa por el try y al no haber problema pasa del catch*/
     /*catch (error) {
        console.log('op´s se ha producido un error') /*throw enlaza con la variable de catch ene ste caso e el contenido del throw*/
       /* if(error.name){
            console.log(error.name, error.message) */
      /*  } else{console.log(error)}  
    }
    console.log(x) */
    module.exports= isPar;
  