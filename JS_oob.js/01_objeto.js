/* const obj = new Object() //mayus por se un constructor 
const persona1 = {//objeto literal 
    nombre: 'Pepe',
    edad: 23,
    mascota: [animal1]
} 
const animal1 = {
    nombre: 'Enzo',
    edad: 10,
    parasitos: [pulga, garrapata]
}
animal1.peso = '26kg'

animal2 = ['piolin',8, '240kg', ] // una cagada asi porque no diferencio que es qué. rentan para guardar listas homogeneas.
const animales = ['Tano', 'Odin', 'Enzo']



console.log(animal1)
console.log(animal1.nombre)
console.log(animal1['nombre'])
let propiedad = 'raza'
console.log(persona[propiedad]) */ //hago esto puesto que si la raza la obtengo tras un proceso que me devuelve la raza el usuario elige su raza y yo tengo tres opciones el resultado es igual a prop y yo muestro prop

/* objeto Meses donde las propiedades son los meses en español y los valores son los nombres sorrespondientes en un segundo idioma 
queremos un buvle que diga mes en tal idioma se dice .. */
function meses (){ }
let oMeses = {
    enero : 'january',
    febrero : 'february',
    marzo : 'march',
    abril: 'april',
    mayo: 'Mayu',
    junio: 'June',
    julio: 'july',
    agosto: 'august',
    octubre: 'october',
    noviembre: 'novembrer',
    diciembre: 'dicember',
}



for (const key in oMeses) {
    if (oMeses.hasOwnProperty(key)) {
        const item = oMeses[key];
     console.log(`la traducion del mes  ${key} al ingles es ${item}`)   
   }
}
