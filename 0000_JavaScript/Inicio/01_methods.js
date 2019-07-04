let sNombres = ['audi', 'alfa', 'bmw', 'honda']
let nombre = 'ford, hola pepe como estas '
console.log(nombre.charAt(0).toUpperCase())
// devolver la misma cadena empezando cada nombre por mayuscusla
/**
 *@description funcion que me permita pasar a mayusculas la primera letra de una cadena 
 * @param {String} s
 * @returns {String} sS
*/

function firstMayus( s = '') {
    let mayus = s.charAt(0).toUpperCase()+s.slice(1)
    return mayus
}
console.log(firstMayus('juanita'))

//lo mismo con array

function firstMayusArray(a= []) {
    for (let i = 0; i < sNombres.length; i++) {
        let item = sNombres[i];
         item =  item.charAt(0).toUpperCase()+item.slice(1)
        
       
    } return sNombres
}
//let sNombres = ['audi', 'alfa', 'bmw', 'honda']
console.log(firstMayusArray(sNombres))


// FIBONACCI
/**
 *  @description funcion que realice la serie de fibonacci utilizando do while y una función callbak
 * @param {number} n
 * @return {Array} fib
 */
// n = n +1 ...n veces



let n = 0
let x = 1 
let f = n + x 

// interneteada mas yo pero no es lo que me piden aunque funciona
function fibonacci2(n) {
    let fibArray = [0,1];
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray;
  }
  console.log(fibonacci2(3))