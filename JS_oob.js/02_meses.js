
function prepararMeses () {

    /* const m = require('./02_data.js')
    console.log(m) */
//lo mismo pero en fin seria let {aMeses, aMesesRusos, aMesesIngles} =require('./02_data.js') y ya las llamaria sin m.mesesRusos sino solo por su nombre 
//tambien si en el fichero que importo tengo muchas funciones solo me importo las que quiero
let {aMeses, aMesesRusos, aMesesIngles} =require('./02_data.js')
    let oMeses = {}

    if (m.aMeses.length !== m.aMesesRusos.length) {
        throw new Error('Error de entrada de datos')}//si los dos arrays no miden lo mismo dame error 
    

    for (let i = 0; i < m.aMeses.length; i++) {
        const item = m.aMeses[i];
        oMeses[item] = m.aMesesRusos[i]
    }


    return oMeses
} 

console.log(prepararMeses())

let meses1 
let meses2

function mostrarMeses(id1, id2){
    //elige 2 entre 'es', 'ru', ingles'
    let oMeses = prepararMeses(es, en)
    let cadena = '' 
    for (const key in oMeses) {
    
            const item = oMeses[key];
          cadena += ` el mes ${key} en ruso se dice ${item} \n` //sato de linea terminal
            
        }
        console.log(cadena)
    }
    mostrarMeses()

    try {  ///control de errores
        mostrarMeses()
    } catch (err) { //caputar el errore ya producido y luego el throw con los las condiciones if el elige cualdevuelve
        console.error('disculpe las molestias')
        console.error(err.message)
        
    }
    console.log('gracias por venir')