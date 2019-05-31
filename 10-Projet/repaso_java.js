/* DATOS 
INDEFINIDOS
    -Undefine
PRIMITOS
   - Number
   - String
   - Boolean
REFERENCIADOS
    - Objetos
        Array
        Date
        Error
        RegEXP
        Math
        JSON
        Function
        

VARIABLES
    - Declaración; Inicialización (darle un valor); Asignación
    x = 45 Asignacion
    x = x * 2 Asignación por expresiones
    
AMBITO
    -Goblal
    -local
        -al bloque => Let/const
        -a la función => var 
    */
let a = 31 //globla

function prueba(){
    let a = 12 //Local a la función
    if (true) {
        let a =78 //local al bloque y el bloque es el if 
    }
}
/*
ALZAMIENTO (HOISTING de funciones declaradas) y variables var
si llamo a la función antes de donde esta situada la función me la contesta */

izar()
function izar(){
console.log(izado) 
console.log( 'vale z',z)
    var z = 5;
}
/* CONSTANTES

*/ 
const user = { nombre: 'pepe' , edad: '34'}

constantes referenciadas -> Es constante la referencia 

/* CASTING
Cambio de tipo temporal durante una operacion
un numero pase a ser un string.
/*
BOOLEAN
*/
 //FALSY 
w = false
w = undefined
w = null
w = 0 
w = ''

//TRULY
w = 23
w = true
w = -28
w = ' '
w = 'Pepe'
w = []
w = {}

if (w) = {}

//OPeradores ARITMETICOS (+-*/)

