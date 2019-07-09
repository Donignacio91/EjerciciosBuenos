// this es una caracteristica de las funciones js depende de como se imboque dignifica una cosa u otra 
//tenemos 4 formas de ejecutar una funcion
//segun el patrones de ivocacion que usemos this sigunificara una cosa u otra

//function 
function algo() {
    console.log(this)
} // this es global.process en node o window en el navegador 
algo() 
// es el objeto de mas alto nivel en la jeraquia de objetos en el motor en el que estamos crome o node 

//Metodo this es el objerto al que pertenece el metodo 
const o = {nombnre:'pepe', edad: 34}
o.algo = algo //el primer algo podria llamarse como quiera = algo //algo hace ref a la funcion de arriba
o.algo()  // aqui el nuevo this dentro de algo me devuelve otra cosa

//constructora this es el nuevo objeto, el objeto construido 
const nuevo = new algo() // se crea un nuevo objeto vacio de la clase algo devueleve algo {}
//CAULQUIER FUNCION EJECUTADA CON UN NEW POR DELANTE CREA UN NUEVO OBJETO DE LA CLASE DEL NIMBRE DE LA FUNCION 

//indirectamente apply o call this el objeto que toma prestado la funcion 
const otro = {
    tipo: 'perro',
    nombre:'Enzo'
}
//algo.call()
algo.apply(otro) // cojo una funcion y se la presto a un objeto para que la utilice. en este caso this pasa sser otro quiero que esta funcion algo la utilice el objeto otro 
console.log('------------------------------------------')
const persona ={
    nombre:'Nacho'}
    persona.saludar = function () {
        console.log(`hola primi soy ${this.nombre}`)
    }
    persona.saludar()
 setTimeout(persona.saludar.bind(persona) , 2000) //con esto le digo que el dis no va ser el de process va a saer premantentemente el this persona // con el settimeout pierdo el dis pero al añadirle el bind le fijo el this a persona 
 
 console.log('------------------------------------------')

 //en las arrow this es consistente SIEMPRE es la propia fncion 
 persona.saludarArrow = () => {
    console.log(`hola primi soy ${this.nombre}`)
}
persona.saludarArrow()
 algoArrow = () => {
    console.log(this) // en un arrow la referencia this es a la propia funcion arrow 
} 
algoArrow()
setTimeout(algoArrow , 2000)




////////////////////////////////////////////
//                  this sara
///////////////////////////////////////////
/* This es una características de las funciones en js epende de como se invoque significa una cosa u otra. */
// Hay 4 formas de ejecutar una función. Patrones de invocación, cambian el significado de this:

function algo() {
    console.log(this) /* This siempre existe dentro de una función */
}

//Función

algo() /* this es el objeto de más alto nivel. Es process(en node, proceso principal del sistema, que residen propiedades) o window (navegador o browser, es la ventana de estos navegadores F12 copias y pegas eso en console para grabar esa función en ese entorno) */

//Método

const obj= {nombre:'Sara',edad:21}
obj.algo = algo /* No debería de tener paréntesis ya que la función está arriba y cuando hacemos unmétodo lo igualamos a una función. */
obj.algo(this) // Ejecutamos la función.  this depende del patron de ejecución.Va a salir todo el objeto cuando pongamos --> this: { nombre: 'Sara', edad: 21, algo: [Function: algo] }

//Constructor (new)

const nuevo = new algo(this) /* Se crea un objeto nuevo vacío, (está sin parámetros). Nos va a enseñar un objeto vacío --> algo {} . this es el nuevo objeto construído*/

// Indirectamente (Apply i Call)

const objetoNuevo = {
    especie: 'Pelicaniminus',
    nombre:'Pepi'
}

algo.apply(objetoNuevo) /* Esperan una función u objeto --> { especie: 'Pelicaniminus', nombre: 'Pepi' } . This el objeto que 'toma prestada' la función */

console.log('.............................................')
/* En las funciones arrow this es consistente:
SIEMPRE es la propia función */

const persona = {nombre: ' Sara',ojos:'verdes', pelo:'rubio'}

/* persona.saludar= function() {
    
} */

persona.saludarArrow() = () => {
    console.log(`Hola soy ${this.nombre}`)  /* this es el obejto al que pertenece el método */
}
//Función callback, le pasa el nombre de la función, no va a ser invocada por mi sino como callback, 5º modo de invoación, cuando la función no la invocas tu sino a otra función, en este caso a TimeOut
/* process. */global.setTimeout(persona.saludar, 2000) /* No se suelen poner process, porque el sistema lo encuentra por defecto, pero lo que nos proporciona esa capacidad para darle tiempo a las cosas es process. Hay que poner global para que salga. Nos sale --> Hola soy  Sara
                                    Hola soy undefined (después de dos segundos). Nos sale indefined porque 
                                    bing nos permite decirle quién queremos que use está función
                                    global.setTimeout(persona.saludar.bing(this), 2000) para que nos saque el nombre y pueda entrar en las propiedades del objeto. Estamos haciendo indirectamente un Apply */
  



