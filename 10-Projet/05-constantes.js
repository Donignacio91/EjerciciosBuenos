let a = 4
console.log(a)
a = 5
console.log(a)
a = 9 
console.log(a)
a = 13
console.log(a)

//es6 Las constantes tienen el mismo habito que let (solo dentro de funcion o conjunto no global ) si lo declaro como const se mantiene como referencia estable si decido cambiarlo o por error lo cambio me avisa el console por como almacena la info

const b = 6
    if(true) {
        const c = 7
        console.log(b)
        console.log(c)
    }
    console.log(b)
    //console.log(c)

    let aDatos = [22, 10, 36] //* al ponerle el const impido que si luego intento añadir otra variable desde fuera del array me lo cargue si quiero añadirla sin joder necesito hacer un LOQUESEA.push (5) y ñando un dato al final de array con un valor de 5 ( el array podra crecer o decrecer pero no lo destruyo)
    let persona = {nombre : 'Pepe', edad : 20}
        console.log(aDatos[1]) //entre corchetes el numero de posicion del dato que quiero que me devuelca empezamos en cero 
        console.log(persona)
    aDatos[aDatos.length] = 63,
    aDatos.push(43)
    aDatos.unshift(5)

    persona.altura = 178,

console.log(persona)
console.log(aDatos)
