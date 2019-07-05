//objeto JSON literal

const saludo = 'hola amigo'
console.log('hola amigo')//mal 
console.log(saludo)//bien porque si lo quiero usar para mas cosas puedo llamar a la variable o modificarla para todos
const p1 = {
    nombre: 'Luis',
    edad: 23,
    altura: 178,
    pais:'España',
    
}
new Object()
new Array()
new Date()

function Persona(nombre, edad, altura, pais) { //lo pongo en mayus para saber que es constructora  
     // aqui defino las clases y despues todos los objeos se ajustan a las clases no podria tenr una new persona 5 con la clase hijos
    this.nombre = nombre
    this.edad = edad
    this.altura =altura
    this.pais =pais
    this.profesion = ''
    /* this.saludar = function (otro = 'amig@') {
        let mensaje = `Hola ${otro} soy ${this.nombre}` 
        console.log(mensaje)
    } */
    /* this.serContratado = function(puesto){
        this.porfesion = puesto
    } */
}
Persona.prototype.cerebro = true // puedo guardar una propiedad en el prototipo poruqe todos tienen cerebro si tengo una clase comun a todos la paso al prototipo. lo suyo es poner solo metodos 
Persona.prototype.saludar = function (otro = 'amig@') { //si meto en el prototipo los metodos funciones las guardo aqui y asi cualquiera la puede llmar pero no necesito que todas las personas duplique los metodos 
    let mensaje = `Hola ${otro} soy ${this.nombre}` 
    console.log(mensaje)
}
Persona.prototype.serContratado = function(puesto){
    this.porfesion = puesto
}
// la funcion constructora se crea asi por un lado arriba la fucion con mayus mas thisclase = clase y asi con todas y luego yo le paso paramatres a la p2 igualandoa a new persona 

const p2 = new Persona('pepe', 25 , 180 , 'fracia')
const p3 = new Persona('pepa', 29, 179, 'italia')
delete p2.cerebro //delete para quitar 
p2.IA = true // asi añadimos pero no son buenas practicas lo suyo es modificar el constructor 

p2.serContratado('medico') // asi si 
p3.profesion = 'CEO' // asi no ambas funcionan
p2.cerebro = false // una propiedad de istancia empacara la propiedad del prototipi en este caso esto es la instancia 
console.log(p1)
console.log(p2)
console.log(p3)


p2.saludar(p3.nombre)
p3.saludar(p2.nombre)

/* const x = []//new array x es un array y x. me saca los prototipos de array
x.forEach()
console.log(x) */
console.log(p2.cerebro)

// para mostrar mi objeto total sin llamar a cada prototip para comprobarlo seria un con

console.log(p2.__proto__) // y ya mirando en los metodos que aparecen me salen las calses ocultas en el proptitpe
//ver p`rototpito duncion
console.log(Persona.prototype)

for (const key in p2) {
    if (p2.hasOwnProperty(key)) {
        const element = p2[key];
        console.log(key,element)
    }
}

console.log('p1', p1 instanceof Persona) // false porque no esta instanciado en Persona

console.log('p2', p2 instanceof Persona) // esto me dice si alguien esta instanciado en alguna clase 

console.log('p3', p3 instanceof Persona)

console.log('p1', p1 instanceof Object)

console.log('p2', p2 instanceof Object)

console.log('p3', p3 instanceof Object)


