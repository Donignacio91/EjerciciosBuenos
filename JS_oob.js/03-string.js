'use strict'
let version = 'emsc6'

let cadena = "no es buena practica"
let otraCadena = 'si es una buena practica'
let nuevaCadena = `tambien es buena practica y esto es nuevo en ${version}`

console.log(cadena, otraCadena, nuevaCadena )
Math.trunc(3.67) //devueltve el entero pero espera un numero aqui da igual en ts no tanto
Math.round(5.7)  //redondea de 0'5 abajo de 0'51 arriba //6
Math.ceil(5.3)  // en cuanto pilla decimal salta al siguiente //6
Math.floor(5.9) // se va para abajo // 5
Math.random()


console.log(Math.trunc(Math.random()*10))