/**
 * @description: eliminar de un array los nombresqie empiecen por una letra seleccionada 
 * @param {string}letra
 * @param {array} aNombres
 * @returns {array}
  */
let aNombres = ['audi', 'alfa', 'bmw', 'honda','renault']


function limpiarArray(letra = '' , aNombres = []) {
    for (let i = 0; i < aNombres.length; i++) {
        const item = aNombres[i];
        if(item[0].toLowerCase() === letra.toLowerCase()) // item[0] esto es la primera letra de cada item  tambien tiene posiciones para la iteravilidad
            aNombres.splice(i,1)  
            i-- 
    }
}


let aUsuarios = ['rosa','raquel','elena','mario'] 
console.log(limpiarArray(aUsuarios, 'r'))
console.log(aUsuarios)