'use strict'

//let aDatos = [ 1,2,3,4,5,6,7,8,9]
// funcion que me diga que numero de eestos son multiplos de 3 
//1º quiero recorrer el array necesito un bucle el mas normal (for)
//for (let i = 0; i < (numero de vueltas); i++) {daria 10 vueltas } i++ =  i más 1
//ACUMULADOR
//ejemplo de iteracion y condicion que son las dos sentencias de control claves de programació
/* let limite = 10
let acumulador = 0 
let maximo = 100
let contador = 0
for (let i = 0; i < limite; i++) {    //el sniped de los buvles es for as sniped
    contador = i
    console.log(i)
    if (acumulador + ( i*i) > maximo){
        break
    }
    acumulador += acumulador + (i*i) // mas igual es lo mismo que poner igual a ti mismo mas algo (X = X+2) = (X += 2)
}
console.log(acumulador, contador) */

/* function isMul(aDatos) {
    let n = aDatos  const element = array[i]; {
    if ( n%3== 0) {
        return true
    } console.log(n)
}
isMul(aDatos)
 */







//let aDatos = [ 1,2,3,4,5,6,7,8,9]
//Saber si un numero es multiplo de 3
//seleccionar en un array los numeros multiplos de 3 guardarlos en otro array y
//mostrarlo por pantalla 

/** 
 * isMultiplo
 * @description  devuleve true si un  numero 'm' es multiplo de 'n'
 * @param {number} m
 * @param {number} n
 * @returns {boolean}
 */



 function isMultiplo (m = 0,n = 0){
     if(isNaN(m) || isNaN(n)){
    throw new Error('Cadaga max')
    }
    let r = true
    if (m%n) { //if( n%m == 0) if (!(n%m))
        r = false
    }
  
    return r
} 
  


/**  Funcion extraerMultiplos
 * @description  Extraer de un array los multiplos de 'n'
 * @param {number}: n
 * @param {array}: aDatos 
 * @returns {array}
 */

function extraerMultiplos (n = 0, aDatos = []) {
let r = [] 

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if (isMultiplo(item,n)) {
        //r[r.length] = item
        r.push (item)
    } 
}
return r
}
/**
 * @description Muestra un array con los multiplos de n
 * @param {number} n 
 * @param {array} aDatos 
 * @returns {void}
 */
function mostrarMultiplos (n, aDatos){
    console.clear()
    console.log(`los multiplos de ${n} `)
    console.log( `en el array ${aDatos} son: `)
    console.log(extraerMultiplos(n, aDatos))
}
 




module.exports = {};
module.exports.isMultiplo = isMultiplo;
module.exports.extraerMultiplos = extraerMultiplos
module.exports.mostrarMultiplos = mostrarMultiplos

{
let aDatos = [1,2,3,4,5,6,7,8,9]
mostrarMultiplos(5, aDatos)
}