
/** IS PALI
 * @description: funcion a la que le paso un string y el me devuelve true si lo es o false si no lo es
 * @param {string} cadena
 * @returns {boolean}
 */
function isPali(cadena='') {//const isPali =(cadena = '')=> {return r}
    let r = false 
    const cadenaSinEspacios = cadena.split(' ').join('').toUpperCase()
    //const cadenaSinEspacios = cadena.replace(/ /,''/*y reiterar o lo que he encontrado yo)*/ ).toUpperCase()
    console.log(cadenaSinEspacios)
    const cadenaInversa= cadenaSinEspacios.split(' ').reverse().join('')
    console.log(cadenaInversa)
    if (cadenaSinEspacios === cadenaInversa) {
        return true
    }
    return false
    
} console.log(isPali('aLi tomo tila'))

module.exports = {}
module.exports.isPali = isPali