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