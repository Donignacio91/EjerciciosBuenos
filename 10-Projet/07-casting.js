let x = 2
let y = 3
let z = x * y 

y = '3' //le cambio el valor 
z = x * y // solo durante la operación hara un casting a number () le pasamos Y en este caso 3

console.log(z) //6
console.log(z, typeof z) // 6 number
console.log(y, typeof y) // 3 string
console.log(x, typeof x) // 2 number

//sobre carga del simbolo + suma da valores positivos y concatena.
let w = x + y // aqui me concatenara los datos puesto que hay un valor con tipo string si pongo ambos en number me suma sin problema.
console.log(w) 

function sumar(a = 0,b = 0) {
    if (isNaN(a) ||isNaN(b) 
    || typeof a == 'boolean' || typeof b =='boolean'
    ||typeof a == 'object' || Array.isArray (b) //significan lo mismo mas preciso array
    ){
    return 'No se puede sumar'}
    let r = Number(a) + Number(b);
    return 'la suma es ' + r;}
   /*  if (typeof a != 'number' || typeof b != 'number' ){
        return 'No se puede sumar' // ! = no, not,,, || = ó, or,,,  && = y, and,,,,   */
          
    /* let r = parseFloat(a) + parseFloat(b) */ //convierte cualquier cosa a numero en coma flotante.
    
    /* let r = +a + +b */
 

    console.log(sumar(5))


console.log (sumar (2,2))
console.log (sumar (2,0))
console.log (sumar (0,'2'))
console.log (sumar (2,5))
console.log (sumar ('5','6'))
console.log (sumar (0,'pepe'))
console.log (sumar (2,true)) // true en casting actua como 1 y false como 0
console.log (sumar (2,false))
console.log (sumar (true,false))
console.log (sumar ({},{}))
console.log (sumar ([],[]))