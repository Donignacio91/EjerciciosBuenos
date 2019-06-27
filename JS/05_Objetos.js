/* Si estamos en Java, Php, C# */
/* Los objetos dependen de las clases

class Persona {dentro lleva propiedades}
    p1=new Persona ();
    p2 = new Persona ;

*/

/* En js los objetos son independientes de las clases, tenemos objetos literales
se basan en la notación JSON (java script object note)

    let p1 = {
        defino las propiedades de mi objeto 
    }


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

p1.altura = 1.57
p2.colorPelo = 'rubio'

console.log(p1)
console.log(p2)

console.log(p1.direccion.pais)

console.log(p1.aficciones[2]) /* Notación por puntos */

console.log(p1['nombre']) /* se tiene que poner nombre estre comillas porque sino saldrá como no defined. Accedemos a las porpiedades a través de una variable porque si no lo pones entre comillas se piensa que es una función */

let prop = 'nombre';
console.log(p1[prop]) /* [] es una notación especial para acceder a una porpiedad de nombre desconocido (dentro de una variable) el coerchete hace que INTERPOLE la variable */

/* ITERAR OBJETOS: */

for (const key in p2) { /*key es el index [i] Recorre un objeto.Son sicesibamente cada uno de los nombres de los valores de las propiedades */
    const value = p2[key]; 
    console.log(`La propiedad ${key} vale: ${value}`)
}

console.log(`.................................................`)

console.log(`Mostrar` +p1) /* Casting a String de cualquier Objeto, por eso en la consola sale OBJECT. */

for (const key in p1) {
    const value = p1[key]; 
    console.log(`La propiedad ${key} vale: ${value}`)
    /* p1.direccion.toString(); */
}




