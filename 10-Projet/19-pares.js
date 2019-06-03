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
 * @returns {*}
 */

 function isPar(n) {

    let r = true

    if(isValidNumber(n)){ //excepcion: n no es un numero)
        return -1
    } else if(!isEntero(n)){//2º excepción{
        return -2
    }
     else if (n%2) /*resto de la división entre 2*/  {

     r = false}

    return r
      
 }

 let n = 1
 console.log (!(n%2))
 n = 2
 console.log (!(n%2))
 n = 3
 console.log (!(n%2))
 n = 4
 console.log (!(n%2))
 isPar (n)

 /**
  * @description Función que muestra si un numero es par o impar 
  * @param {number: n}
  * @returns {void}
  */

  function mostrar(n) {
      mensajes = [
          `El Número ${n}  es impar`,
          `El Número ${n}  es par`,
          `El Número ${n} no es entero`,
          `${n} no es un Número`,
          ]
        let i = Number(isPar(n))
        if (i < 0) {
            i = -i + 1
        }
        
        console.log(mensajes[i]) 
  } 
  
 
/**
 * @description Función que calcula si un número entero
 * @param {number}: n
 * @returns {boolean}
 */

function isEntero(n=0){
    return(parseInt(n)===parseFloat(n))
}
    /**
 * @description Función que comprueba si una función es convertible a un numero valido rechazando los valores no validos 
 *  boolean null strings no numéricos undefine ''
 *  @param {number}: n
 *  @returns {boolean}
 * */


 function isValidNumber(n){
    r = true
    if (isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === '' || n===null) {
        r = false
    }
    return r
}

function probar() 
    {let x 
        x = 1
        
       // console.log(isEntero(x))
    mostrar (x)
    }
    probar()

    module.exports = isPar;