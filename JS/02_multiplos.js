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
for (let i = 0; i < limite; i++) {
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
    if (n%3 == 0) {
        return true
    } console.log(n)
}
isMul(aDatos)
 */


/** 
 * JSDoc 
 * @description  devuleve true si un  numero 'n' es multiplo de 'm'
 * @param {number}: m
 * @param {number}: n
 * @returns {boolean}
 */
 function isMultiplo (m = 0,n = 0){
    let r = true
    if (n%m) { //if( n%m == 0) if (!(n%m))
        r = false
    }
  
    return r
} 

//espectativa
console.log('isMultiplo(2,20)) debe dar true')
//Prueba
console.log(isMultiplo(2,20))

//espectativa
console.log('isMultiplo(20,2) debe dar false')
//Prueba
console.log(isMultiplo(20,2))

//espectativa
console.log('isMultiplo(2,21) debe dar false')
//Prueba
console.log(isMultiplo(2,21))

//espectativa
console.log('isMultiplo(3,23) debe dar false')
//Prueba
console.log(isMultiplo(3,23))

//espectativa
console.log('isMultiplo(2,-21) debe dar true')
//Prueba
console.log(isMultiplo(3,-21))




//let aDatos = [ 1,2,3,4,5,6,7,8,9]
//Saber si un numero es multiplo de 3
//seleccionar en un array los numeros multiplos de 3 guardarlos en otro array y
//mostrarlo por pantalla 

/**  Funcion extraerMultiplos
 * @description  Extraer de un array los multiplos de 'n'
 * @param {number}: n
 * @param {array}: aDatos 
 * @returns {array}
 */

function extraerMultiplos (n, aDatos) {
let r = [] 
return r
}
extraerMultiplos()