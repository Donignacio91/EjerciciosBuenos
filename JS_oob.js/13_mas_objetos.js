// serializacion
//proceso para manadar datos en serie a un servidor 


const oDatos = {
    user : 'pepe',
    edad: 23,
    curso : 'Front',
    direccion: {
        calle: 'niño jesus',
        ciudad: 'madrid'
    },
    nacin: new Date
}//Proceso inmutable // nos crea un string con una structura de determianda que es lo que hace que despues podamos recuerar el objeto
let cadena = JSON.stringify(oDatos) // de un objeto a una cadena y lo opuesto es .parse 

console.log(cadena) 

console.log(typeof cadena) // ya es string

console.log(oDatos)

let oNuevosDatos = JSON.parse(cadena) // vuelvo a convertirlo en cadena 

console.log(typeof oNuevosDatos)

// pra clonar
const clon = JSON.parse(JSON.stringify(oDatos)) // cclon ya seria un objeto igual que el anterior pero clonado 
clon.nacin = new Date(clon.nacin)
oDatos.direccion.ciudad = 'huelva'
clon.direccion.ciudad = 'barcelona'
// los cambios que hagi antes de clonar obvio cambio todos pero si hago cambios en oDatos tras el clon el clon no varia
console.log(oDatos)
console.log(clon)

const oAlumnos = {
    user : 'pepe',
    edad: 23,
    curso : 'Front',
    direccion: {
        calle: 'niño jesus',
        ciudad: 'madrid'
    },
    nacin: new Date
}
const oAlumno2 = Object.assign({}, oAlumnos) //devuelve los valores de un objeto copiadolos en un nuevo objeto que pasa a ser un clon // se le pasa un objeto vacio y rellenalo con el obejto que te paso 
// ASSIGN solo lon el objeto de primer nivel objetos dentro de objetos 
console.clear()

oAlumno2.user ='Nacho'
oAlumno2.direccion.ciudad='Toledo'

console.log(oAlumnos)
console.log(oAlumno2) //ambos coparten ciudiad porq es de 2º nivel 