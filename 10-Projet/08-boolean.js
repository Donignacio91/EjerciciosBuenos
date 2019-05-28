let x = 34 // positivo
//x = -5 // negativo

console.log((x >= 0))
if (x >= 0) {
    console.log('Positivo')
}else{
    console.log('Negativo')
}


 //FALSY 
w = false
w = undefined
w = null
w = 0 
w = ''

//TRULY
w = 23
w = true
w = -28
w = ' '
w = 'Pepe'
w = []
w = {}

if (w){
//if (Boolean (w)) {
    console.log('Verdadero')
}else{
    console.log('Falso')
}

let q = 5
q = undefined
q = 0

//if(q != 0) { no es tipico de java
if (q){
    console.log('q tiene valor')
}else {
    console.log('q es 0')
}
if ( q === 0) { //=== significa identico 
    console.log ('q es exactamente 0')
}