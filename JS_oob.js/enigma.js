
/**
 * Una función que recibe una string  y un número entre 1 y 10 y codifica y decodifica el string en funcion de ese numero
 * 
 * @param {string}: x
 * @param {number}: y
 * 
 * @returns {string}: msg
 */

function decode (x = '',y = 0) {
let aCode = []
let code = ''
if(y < 0 || y > 10) {
 throw new Error ('El código debe de ser un valor entre 0 y 10')
} 
else {   for (let i = 0; i < x.length; i++)

    aCode.push(x.charCodeAt(i)+y)
      console.log(aCode)
  }
  for (let i = 0; i < aCode.length; i++) {
      code += String.fromCharCode(aCode[i]);
      
  }   

  return code
}

console.log(decode('pepe come pasta',5))



function decode (x = '',y = 0) {
    
    let decode = ''
    let aCode = []

    if(y < 0 || y > 10) {
     throw new Error ('El código debe de ser un valor entre 0 y 10')
    } 

    else {   for (let i = 0; i < x.length; i++)
    
        aCode.push(x.charCodeAt(i)+y)
          console.log(aCode)
      }
      for (let i = 0; i < aCode.length; i++) {
          decode += String.fromCharCode(aCode[i]);
          
      }   
    
      return decode
    }

    console.log(decode([ '117, 106, 117, 106, 37, 104, 116, 114, 106, 37, 117, 102, 120, 121, 102' ], 5))



 function code0(x = '', y = Number) {
let code = ''
let aCode = []
if (y < 0 || y > 10) {
    throw new Error ('El código debe de ser un valor entre 0 y 10')
}
for (i = 0 ; i < x.length ; i++) { 
    aCode.push(x.charCodeAt(i)+y)
    console.log(aCode)
} 

return aCode
}
 
//let x = cadena.split().join()


//console.log(String.fromCharCode())
console.log(code0('pepe come pasta',5))

/* 
console.log()

let x =112
console.log(String.fromCharCode(x))
  */