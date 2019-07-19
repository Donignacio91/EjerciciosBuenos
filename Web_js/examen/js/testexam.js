 
/**
 * aplicacion que me permita contar numero de letras de una frase numero de palabras numero de veces que sale cadad letra 
 * @param {} y 
 */

/**
 * contador letras
 * 
 * @param {string} y 
 * @return {string + Number}
 */

  function nLetras(y='') {
        let r = y.replace(/ /g, "")
        return `la frase " ${y} " posee ${r.length -1} letras`
        
        
   }


/**contador palabras
 * 
 * @param {string} y 
 * @return {string + Number}
 */
    function nPalabras(y='') {
        aPalabras= y.split(' ')
        return `la frase " ${y} " posee ${aPalabras.length} palabras`
        
    } 


/**
 * longitud media 
 * @param {string}y
 * @returns {number}
 * 
 */



let cadena = 'en un lugar mancha del cual'

function lMedia(cadena=''){

 let cadena2 = cadena.split(' ')

 let cadena3 = cadena.split(' ').join('')

 let cadena4 = cadena3.split('')

 let r = parseInt(cadena4.length / cadena2.length)

 
return `la longitud media de ${cadena} es igual a ${r}`
}
console.log(lMedia(cadena))

function frecuenci(cadena=''){

    let cadena2 = cadena.split(' ')
   
    let cadena3 = cadena.split(' ').join('')
   
    let cadena4 = cadena3.split('')
    
   let array= []

    for (let i = 0; i < cadena4.length; i++) {
        const item = cadena4[i];
        if (item === item) {
            array.push(item)
        }
        console.log(array)
    }
    
   return array
   }frecuenci(cadena)