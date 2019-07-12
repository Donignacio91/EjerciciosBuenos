const Factorial = require("./01_factorial.js")

/**
 * 1 - Funcion booleana que comprueba 
 *      que un valor puede ser tratado como número
 * 
 * 2 - Función que comprueba que es un número válido
 *      para poder calcular un factorial
 * 
 * 3 - Función que calcula el factorial de un número
 *      En caso de valores no válido, gemera un error    
 * 
 * 4 - Función que muestra (renderiza) los resultados por pantalla
 * 
 * Al menos para las 3 primeras, realizar tests unitarios
 *  
 */
try {
    const n = 21
    const f_21 = new Factorial(n)
    f_21.renderizar()
    
    const e = 'Pepe'
    const f_Pepe = new Factorial(e)
    f_Pepe.renderizar()
} catch(error){
    console.log(error.message)
}

let cadena= (x < 1e20) // condicion si tiene menos de 20 ceros lo pasas a ? localstring
//si no cumple lo pasa a : exponental 
? x.toLocalString()
: x.toExponential() 
