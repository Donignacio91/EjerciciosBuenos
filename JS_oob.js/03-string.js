'use strict'

let version = 'emsc6'

let cadena = "Esto no es buena practica"
let otraCadena = 'si es una buena practica'
let nuevaCadena = `tambien es buena practica y esto es nuevo en ${version}`

console.log(cadena, otraCadena, nuevaCadena )
Math.trunc(3.67) // devueltve el entero pero espera un numero aqui da igual en ts no tanto
Math.round(5.7)  // redondea de 0'5 abajo de 0'51 arriba //6
Math.ceil(5.3)  // en cuanto pilla decimal salta al siguiente //6
Math.floor(5.9) // se va para abajo // 5
Math.random() // aleatorio
console.log(cadena.toLocaleUpperCase()) //al poner cadena . ke dugo al sistema que cadena es un onjeto y se crea un bojeto envolvente al string de forma automatica y temporal ese objeto muere,pero mistras tanto tiene a disposicion todos los metodos que existene ene ese tipo de objeto (como por ejemplo touppercase0) 
//si lo quisiera guarda le tengo que pone let algo igual a eso porque sino se guarda 
console.log(cadena)

console.log(cadena.length) //devuelve numero de caracteres sin parentesis es una propiedad 
console.log(cadena[0])
    for (let i = 0; i < cadena.length; i++) {
        const item = cadena[i];
        console.log(item)}
    
let x = cadena.split(' ').join // convierte una cadena en un array y en el split pongo el tipo de separador que euiero (' ')  dentro del array si viene con guiones lo elgio si viene con comas las elijo si quiero que separe por la a por el espacio por lo que yo quiere dentro del array 
console.log(x[3] + ' ' + x[4])
//let x = cadena.split(' ').join('').toUpperCase //  con el punto añado más metodos disponibles JOIN Une arrais en string 



 cadena.slice(inicio ,final) 
cadena.substring(inicio, final)
cadena.substr(inicio, desplazamiento)

cadena.match() //El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
cadena.search() //ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.
cadena. replace() //busca lo que yo le pido y lo sustituye por lo que yo le digo
cadena.indexOf(clave) //me devuelve en que posicion esta la clave 
cadena.lastIndexOf() // lo mismo pero por detras detecta la ultima clave
cadena.charAt(posicion) // cadena[3] hace ki musmi  // le paso la posicion en number y me deuelve lo que haya alli  
cadena.charCodeAt(posicion) // me devuelve el codifo del caracter buscar codigos utf por que con esto distingo acentuadas y cosas de esas 
String.fromCharCode(num) // yo le paso un number y lo combierte a codigo  // tiene que cver con cadenas pero no con una concreta
 
let numero = 23.75897
console.log(numero)
console.log(numero.toString())
console.log(numero.toFixed(4)) // le estoy diciendo que tega 4 decimalesafecta al formato de salida 
console.log(numero.toPrecision(4)) // me saca cuatro per no distingue entre enteros y parte decimal si le doy 1000.19 no me mostraria la parte decimal y si es un numero muy grande me sacaria solo una parte 
console.log(numero.toExponential()) // cocg el num y lo devuelve multiplicado por 10 eleveado a 1 NOTACION CIENTIFICA 
console.log(numero.toLocaleString('es',{style:'currency', currency: 'EUR'}))