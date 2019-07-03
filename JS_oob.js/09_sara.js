/**
 * @description Devulve un array eliminando  los nombres que empiecen por una letra determinada del array que ecive 
 * @param {Array}: aNombres 
 * @param {string}: letra
 * @returns {Array}
 */

function limpiarArray(aNombres= [], letra= '') {
    const datos = aNombres.slice()
    for (let i = 0; i < datos.length; i++) {
        const element = datos[i];        
        if(element[0].toLowerCase() === letra.toLowerCase()) { /* Podemos poner tolowercase porque element es un String */
            datos.splice(i,1) /* Le tenemos que decir la posición le tenemos que quitar, a partir de la que es,1 */
        }
    }

    return datos
}
let usuarios = ['Rosa', 'Raquel', 'Elena', 'Sara','Ramon']
limpiarArray(usuarios, 'r')

console.log(usuarios)

/* No pasa por Raquel porque es 1, 1 */

/* function palindromo2(letra='', aNombres=[]) {
    for (let i = 0; i <aNombres.length; i++) {
        const item = aNombres[i];
        if (item[0].toLowerCase()=== letra.toLowerCase()) { 
            aNombres.splice(i,1)
            i--
        }
    }
}

let l ='r'
palindromo2(l,usuarios)
console.log(usuarios)
// Parametros y ELEMENTALES
function algo(h) {
    h = h * h
    return h
}
let z = 4//h hereda el valor de z pero z siempre vale 5
console.log(algo(z))
console.log(z) */
//Parametros Y referencias 

let x = [1,2,3]
 function cuadrados(a) {
     for (let i = 0; i < a.length; i++) { //al pasarle x a, a le paso la referencia de x para wu realice camnios sobre el contenido 
         const item = a[i];
         a[i]= a[i] * a[i] //en cada vuelta item es igual a item por item
         
     }return a
     
 }
cuadrados(x)
console.log(x)
