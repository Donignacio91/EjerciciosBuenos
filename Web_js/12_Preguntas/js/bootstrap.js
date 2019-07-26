//console.log('Holi. Todo ok');
//console.dir('Cargada app')
//console.error('Error provocado')
//console.tabla([1,2,3,4])

/* function saludar() {
    console.log('Hola desde una función')
} */
/*console.log(document)
console.dir(document)  Nos permite ver los objetos del DOM como nodos  */

/* document.querySelector('#btn-super') = saludarApy de query selector no permite haces selecciones de objetos gracias a los de css */

/* Ponemos un igual para que llame a la función saludar e hiciera el evento */


import {app} from './app.js'

document.addEventListener('DOMContentLoaded',app)