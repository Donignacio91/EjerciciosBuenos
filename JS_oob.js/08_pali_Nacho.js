
/** funciton pali
 * @description: funcion a la que le paso un string y el me devuelve true si lo es o false si no lo es
 * @param {string} s
 * @returns {boolean}
 */
/* if (cadenaOK === cadenaOK.reverse()) {
  return true
}
 */

/* function encadena(s) {
  let pali = s.split(' ').join('').toUpperCase()
  let pali2 = s.reverse()
  if (pali === pali2 ) {
    return true
  }
}console.log(encadena('ana lava lana'))*/
function pali(s=''){
    let arry = s.replace(/\s/g,"").toUpperCase().split('') //tambien es lo mismo s.replace(/ /g,'')
    let arry2 = s.replace(/\s/g,"").toUpperCase().split('').reverse()
  console.log(arry) 
  console.log(arry2)
    if (String(arry) === String(arry2)) {
      return true}
    return false
}
   console.log(pali('ana lava lana'))
   console.log(pali('1na lava lana'))
   
   

 /* 
console.log(encadena('ana lava lana'))
console.log(encadena('ana lava lana'))

function quitaSpace([x]) {
for (let i = 0; i <x.length; i++) {
  const item = x[i];

  if (item ===' ') {
    
  }
  
}
  
} */