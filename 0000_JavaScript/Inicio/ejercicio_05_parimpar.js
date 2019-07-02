
/**
 * @description: Realizar una función que detecte numeros pares e impares
 * @param {number} n 
 * @returns {string}
 */


function parImpar(n) {

 let r = 0
       if (isNaN(n)) { //Porque no funcionaba con n === NaN
       r = `lo siento el número ${n} no es un número o no está escrito en valor numérico`   
    }
   else if (n % 2 != 0) {
        r = `El número ${n} es impar`
    } 
  else if (n % 2 === 0) {
    r = `El número ${n} es par`
    } 
   
       return r }


console.log(parImpar(7))
console.log(parImpar(0))
console.log(parImpar('pepe'))
console.log(parImpar(8))
console.log(parImpar(-7))