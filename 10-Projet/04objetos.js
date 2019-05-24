'use strict'


//*Variable de ambito global.
var antes = 2
let a = 2
let b = 4


function prueba() {
    //*variable de hambito local a la función prueba
    var int = 3
    let i = 6
    let b = 9

        if (true) {
            //* variable de habito local a if
            let w = 7
            var z = 4 //* si pongo var lo reconoce tanto dentro del if como en la función, que recoge al if si es un let solo dentro de las llaves  si es un var dentro de la funcion independientemente de los bloques de código. Mejor no usarlo es código antiguo

            console.log('es verdad')
            console.log('desde el if', a)
            console.log('desde el if', b)
            console.log('desde el if', w)
          }

    console.log('desde la funcion', a)
    console.log('desde la funcion', b)
    //console.log('desde la funcion', w) error
    console.log('desde la funcion', z)
}

prueba()

 //*console.log(a)

//* c = 2 daría error por el uso de use strict del principio (mala praxia) 
console.log('desde el programa', a)
console.log('desde el programa', b)
    let v = 45
    function ejemplo() {
        let v =3
        console.log(v)
    }
    console.log(v)
    function sample () {
        console.log(v)
    }

ejemplo()
sample()