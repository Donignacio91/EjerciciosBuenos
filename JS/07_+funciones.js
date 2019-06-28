'use strict'

/* Declaraion de funciones*/
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function sumaRaices(a=0 , b=0) {
    let r = Math.sqrt(a) +  Math.sqrt(b) //calcula las raices cuadradas
    return r
}
/* Asignacion de funciones */

let x = {}
let user = { user:'pepe', age: 25}
let restaRaices = function (a=0, b=0) {return Math.sqrt(a) - Math.sqrt(b)}



console.log(user)
console.log(sumaRaices(6,7))
console.log(restaRaices(6,7))

/* Asignacion de funciones arrow (flecha) */ 

let restaRaices = function (a=0, b=0) {return Math.sqrt(a) - Math.sqrt(b)} // es lo mismo que lo de debajo
let productoRaices = (a=0, b=0) =>  {return Math.sqrt(a) * Math.sqrt(b)} 

let productoRaices = (a=0, b=0) => Math.sqrt(a) * Math.sqrt(b) //la felcha es un ioerador que actua como fucion arrow y si ocupa una sola lnea me ahorro el return genera una funcion conlos parametros que vienen despues 

let mediaRaiz = a => Math.sqrt(a)/2