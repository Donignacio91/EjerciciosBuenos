
const x = {}//New Object ()

const y = []//new Array()

let c = 'pepe'//new String (c)
c.toUpperCase() //hasta que no lo pongo c. no comienza el nuevo string // hasta que no lo quiero tratar como objeto .toupper esto hace que se vuelva obje un tiempo y me devuleve el string modificado 
let n = 223
n.toFixed(2) // implicitamente new number(n)
function algo() {} //new function


//OTROS OBJETOS

    const d = new Date()
    const e = new Error('msg')
    const r = new RegExp()
    const r1 = / / // crear una expresion de forma regular 

    // Objetos no instaciables 
 // lo puedo instaciar son grupos de propiedades que contienen funciones matematicas Math. ramdom raices esto y lo otro esto devuelve un valor //es una funcion costrutora en una clase no instaciable 
 /*    console.log(Math.PI)
    Math.random()
    JSON // es un agrupador de dos propiedades 
    JSON.stringify()
    JSON.parse()
 */
    
    //const d = new Date() //devueve la fecha
    /* const fecha = new Date() //me da la actual 
    const america = new Date(1492, 6, 4) //años mes dia
    const p = new Date(2252857518)//meter fecha a voleo
    const zx = ('1991-01-10')
    console.log(fecha.valueOf())//me da el numerito gigante que es el contadoeor desde 1970
    console.log(america.valueOf())
    console.log(zx)
    console.log(zx.valueOf())

    //Mostrar fechas 

    console.log(fecha.toString()) //fecha como string en formato iso hace un casting toString

    console.log(fecha.toUTCString()) // hora GMT 
    console.log(fecha.toJSON()) //formato jsonpodriamos enviar  a un servidor para uqe lo entendiarea
    console.log(fecha.toLocaleString())
    console.log(fecha.toLocaleDateString())
    console.log(fecha.toDateString())

    //operaciones con las fechas 

    //GET | GETTERS
    console.log(fecha.getTime())
    console.log(fecha.getHours())
    console.log(fecha.getMinutes())
    console.log(fecha.getMonth()) // como los meses estan en un array el 0 es enero
    console.log(fecha.getTimezoneOffset()) // cuna lejos estoy de gmt 
    console.log(fecha.getDay()) //tambien desde cero pero el domingo es el cero 
    
    console.log(fecha.getFullYear())
     */

    //SET | Coger un dato
        // son mutables cambian el valor de la fecha 
// console.log(fecha.setDate())


    /**
     * @description funcion a la que le psemos una fecha y nos la devuelva el enspañp el dia se la seana () , dek mes mes de () del año ()
     * @author 
     * @param {date} fecha 
     * @external aDias aMeses 
     * @copyright
     * @returns {string} 
     */  
 /*        let aDias = ['domingo',' lunes', 'martes', 'miercoles', 'jueves', 'sabado',  ]
        let aMeses = ['Enero', 'Febrero', 'marzo', 'Abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'nobiembre', 'y diciembre']

    const capitalize = cadena =>
    cadena[0].toUpperCase() + cadena.slice(1) 
    

    function fechaEsp(fecha = new Date()) { //asigna valor por defecto a al valor de entrada si no digo nada fecha actual 
            if (typeOf fecha === 'String' {
                fecha = new Date(fecha)
            }

      const nombreDia = capitalize(aDias[fecha.getDay()]) //me devuelve el numero dia de la semana 
        const dia = fecha.gerDate()
        const mes = capitalize(aMeses[fecha.getMonth()])
        const años =fecha.getFullYear()
        return nombreDia + ', ' + dia + 'de' + mes + 'del ' + año 
    }

    let f = new Date(1991, 1, 10)

    console.log(fechaEsp(f))
fechaEsp = (fecha = new Date())  => {
if (typeOf fecha === 'String') {}
    fecha = new Date(fecha)
}
          return capitalize(aDias[fecha.getDay()]) 
           + ', ' + fecha.gerDate()
           + 'de' + capitalize(aMeses[fecha.getMonth()])
            + 'del ' + fecha.getFullYear()
       */