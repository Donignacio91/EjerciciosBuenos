
/**
 * @description: funcion a la que le paso un string y el me devuelve true si lo es o false si no lo es
 * @param {string}
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
/* let s = '1na lava lana' */
    let arry = s.replace(/\s/g,"").toUpperCase().split('')
    let arry2 =arry.slice()
    arry2 = s.replace(/\s/g,"").toUpperCase().split('').reverse()
  console.log(arry)
  console.log(arry2)
    if (String(arry) === String(arry2)) {
      return true
    }
    return false
 
}
   console.log(pali('ana lava lana'))
   
   

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