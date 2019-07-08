const aDatos = [ 'Lluis', 'juan', 'rosa', 'Maria' ]
console.log(aDatos.__proto__)
console.log(Array.prototype)
aDatos.push('Pepe')
Array.prototype.saludar =function() {
    console.log('allo soy un argay')
}
Array.prototype.saludar =function() {//todos mis arrays saludan Afecta a todos los array porque estoy tocando el prototipo de todos los Array 
    console.log('allo soy un argay')
} 
Array.prototype.push =function() { //esto afecta a todos los array y ya me ha jodido el push del resto 
    console.log('hola'+ nombre)
}