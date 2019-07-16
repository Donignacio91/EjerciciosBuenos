
console.log('app on') //prueba de que todo esta

function saludar() {
    console.log('hola, desde una función')
}
console.log(document)
console.dir(document) //nos permite ver los obj del dom como nodos

console.dir() //apy de quierry selector no permite hacer selecciones de objetos gracias a los de csss 
document.querySelector('#btn-super').onclick =  saludar // le paso el nombre de la function sin () 