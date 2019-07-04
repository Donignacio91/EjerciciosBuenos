let sNombres = ['audi', 'alfa', 'bmw', 'honda']
let nombre = 'ford, hola pepe como estas '
console.log(nombre.charAt(0).toUpperCase())
// devolver la misma cadena empezando cada nombre por mayuscusla
/**
 *@description funcion que me permita pasar a mayusculas la primera letra de una cadena 
 * @param {String} s
 * @returns {String} mayus
*/

function firstMayus( s = '') {
    let mayus = s.charAt(0).toUpperCase()+s.slice(1)
    return mayus
}
console.log(firstMayus('juanita'))

//lo mismo con array
let aNombres = ['audi', 'alfa', 'bmw', 'honda']

function firstMayusArray(aNombres) {
   let nombres = [] //decalro la variable donde quiero que me guarde los cambios realizdos por el for 
    for (let i = 1; i < aNombres.length; i++) {
        let item = aNombres[i];
        item =  item.charAt(0).toUpperCase()+item.slice(1)
        nombre.push(item)
       
    } return nombres
}
//let aNombres = ['audi', 'alfa', 'bmw', 'honda']
console.log(firstMayusArray(aNombres))


// FIBONACCI
/**
 *  @description funcion que realice la serie de fibonacci utilizando do while y una función callbak
 * @param {number} n
 * @return {Array} fib
 */
//numero1 = [el n en (i-1) + el numero en (i-2)]
//                     +
//numero2= [el n en (i-1) + el numero en (i-2)]

//0 1 1 2 3 5 8 13

//  no es lo que me piden aunque funciona
function fib(n) {
    let fibArray = [0,1];
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray;
  }

  console.log(fib(7))