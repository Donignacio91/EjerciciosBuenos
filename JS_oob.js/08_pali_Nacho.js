
/**
 * @description: funcion a la que le paso un string y el me devuelve true si lo es o false si no lo es
 * @param {string}
 * @returns {boolean}
 */


function palind(x = '') {
  
    if (x.split(' ').join('') === x ){
      return true}
       
     return false
      
    
}

console.log(palind('ana lava lana'))

 