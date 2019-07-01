'use strict'
// realizar un funcion que compruebe si una cadena es mezca de mayusculas y misnusculas, si es solo de mayusculas o si es solo de minusculas
/**
 * @description comprobar si la cadena tiene: 
 * solo mayus (1), 
 * solo minus (0), 
 * o una mezcla de ambas(2) los valores de r en un futuro 
 * @param {string} x 
 * @returns {number}
 */


function comprobarCadena(cadena = '') {
    let r = 2
    if (cadena === cadena.toUpperCase()) {  // solo mayusculas 
        r = 0
    }else if (cadena === cadena.toLowerCase()) { //solo minus
        r = 1
    }
    return r
}

function mostrarComprobacionCadena(cadena = '') {
   const msg = [
       'solo mayusculas',
       'solo minusculas',
       'mezcla de ambas']
        console.log(msg[comprobarCadena(cadena)])
}console.log(mostrarComprobacionCadena())

module.exports = {}
module.exports.comprobarCadena = comprobarCadena
module.exports.mostrarComprobacionCadena = mostrarComprobacionCadena