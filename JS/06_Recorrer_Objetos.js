/**
 * 
 * @description Función que recorre un objeto a tantos niveles como contenga y crea un String con la información
 * @param {Objeto}
 * @returns {String}
 *  
 */

let p1 = {
    nombre: 'pepe',
    edad: 33,
    isAlumno: true,
    direccion: {
        calle: 'opieu',
        nº: 3,
        ciudad: 'Madrid',
        pais:'España'
    },
    aficciones: ['pintar','Ajedrez','musica']
}

let p2 = {
    nombre: 'eva',
    edad: 23,
    isAlumno: false
}

function objectToString(object={}) {
    let cadena=``
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            if(typeof value == 'object' && !Array.isArray(value)){
                cadena+= `${key}: ${objectToString(value)} /* Llamas a la función para que la ejecute infinitamente, de esta manera, cogerá todos los objetos que estén dentro de un objeto. Cuando ya haya encontrado a todos los objectos que estén dentro parará. "!Array.isArray(value)" lo hemos puesto para que la función no coja los arrays como objetos, y no los numere. Un array es un tipo de objeto. Por ello se usa una función especial para saber si un objeto es un array con "is Array()" */
`                
            }else {
                cadena+= `${key}: ${value} 
`
            }
            
        }
    }
    return `${cadena} `
    
}



console.log(objectToString(p1))


function objectToString(object={}) {
    let cadena=``
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            if(typeof value == 'object'){
                cadena+= `${key}: ${objectToString(value)} /* nombre global del objeto = key */
`      
            }else {/*if(Array.isArray(value)){  Cuando quitamos la key quitamos aficciones no el contador al final siempre va a pintar el ${key}: ${value} */

                /* else */ {
                    if(!isNaN(key)){
                        key++
                    } 
                    cadena+= `${key}: ${value} `
                }
            }
    }
    return `${cadena} `
    
}
}