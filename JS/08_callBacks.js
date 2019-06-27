function calcular(a, b, operacion, callback) {
    let msj = ` El resultado de una ${operacion} con los ${a} y ${b} es `;
    return msj + callback(a , b)
}

function producto(a, b) { return a*b }

console.log(calcular( 4, 6, 'suma', function (x,y) { return x + y})) //el callback es pasarse a una 
//console.log(calcular( 4, 6, 'suma', (x,y) =>  x + y))
console.log(calcular( 4, 6, 'resta', function (x,y) { return x - y}))
console.log(calcular( 4, 6, 'producto', producto))
