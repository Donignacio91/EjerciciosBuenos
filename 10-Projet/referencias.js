'use strict'

//valores primitivos 
//number, string y boolean.

let a = 2
let b = a
console.log(b) 
console.log(a)
b = b * b 
a = a / 2
console.log(b) 
console.log(a)

//Valores Referenciados

let p1 = {nombre : 'pepe' , edad : 34}
let p2 = p1 
p1.nombre = 'juan'
console.log(p1)
console.log(p2)

let a1 = {nombre : 'pepa' , edad : 34}
let a2 = {nombre : 'pepe' , edad : 34}
let a3 = {nombre : 'peda' , edad : 34}


function inscribirMal () {
    a1.curso = 'JS'
}


function inscribirEnJS (alumno) {
    if(alumno) {
        alumno.curso = 'js'
    } 
}  

inscribirEnJS(a1)
console.log(a1)
inscribirEnJS(a3)
console.log(a3)
inscribirEnJS(a2)
console.log(a2)

let saldo = 1000
function invertir (x){
    x = x * 2
    return x;
}
saldo = invertir(saldo)

console.log(saldo)
