let obj = {} //newObject()
let aDatos = [5, 7, 9,]//newArray()
//aDatos[aDatos.length] = 87 //forma de hacer crecer un array //esto situa lo que quiero al final del array en la primera posicion vacia
aDatos.push(87) //lo mismito
aDatos[0] = 9 //me cambia el valor 5 por el 9 por que le digo que me cambie la posicion 0 
aDatos[100] = 9 // me hace crecer el array hasta 101 pero con un monton vacias
console.log(aDatos)
let aADatos = [6,3,0]
aADatos[aADatos.length]=3 //Añade al final
aADatos.push(6) //Añade al final
aADatos.unshift(9) //Añade al principio
console.log(aADatos)//[9 6 3 0 3 6]
console.log('aADatos =' + aADatos)

// funcion que me devuelve un array de n numeros aleatorios  enteros y psotivos menores o iguales a 100
/**
 * @description
 * @param  {Nmber}  
 * @returns {Array}
 */
function dameArrayAleatorio(n = 0) {
    let r = []
    for (let i = 0; i < n; i++) {
   r[i]= parseInt( Math.random()*100) }// genera numero aleatoriso entre 1 y 100 
    return r
}


console.log(String(dameArrayAleatorio(5)))

// array letra DNI 

function letraDNi(dni) {
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    r = aLetras [darFormatoDNi(dni) % 23]
    return aLetras[dni % 23] // devuelveme la posicion que corresponde al modulo de n/23
}

console.log(letraDNi('51129537'))
console.log(letraDNi('51 129 537'))
console.log(letraDNi('51.129.537'))
console.log(letraDNi('51-129-537'))
console.log(letraDNi('00787118'))
/**
 * @description dar formato al nº dni
 * @param {number||string} dni
 * @return {string}
 */
function darFormatoDNi(dni) {
    if(typeof dni === 'number') {
        return dni
    }
    let cadenaDni = ''  //String(dni).split('')  convierte en string
    for (let i = 0; i < dni; i++) {
        const caracter = dni[i];
        if (caracter != ' ' && isNaN(caracter)) {
            cadenaDni += caracter
        }
    }
    return Number(cadenaDni)
}
console.log(letraDNi('51129537'))
console.log(letraDNi('51 129 537'))
console.log(letraDNi('51.129.537'))
console.log(letraDNi('51-129-537'))
console.log(letraDNi('00787118'))

