

//Relaciones
//relcion de asociacion

function Direccion(calle, numero, ciudad, pais ){
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais 
}
function Persona(nombre, edad, direccion,) {
    this.nombre = nombre
    this.edad = edad 
    this.direccion = direccion  // asociacion a novel de atributo El atr dir de la case pers corresponde a un objeto de otra clase
    this.mascotas = []
}
function Mascota(nombre, especie) {
    this.nombre = nombre
    this.especie = especie 
    
}
Persona.prototype.comprarMascota = function(mascota) {
    this.mascotas.push(mascota)
}//relaccion de dependencia a nivel de metodos 
//const d1 = new Direccion( 'plaza niño jesús',15,'Madrid','España',) //es lo mismo pasarle a p1 d1 o ponerlo en su sitio 

function Alumno(nombre, edad, direccion,curso) {
    this.curso = curso
    Persona.prototype.constructor.call(this,nombre, edad, direccion ) // esto se hace por cojones para que los datos del alumno que son de persona se guarden en persona (el obj padre del hijo)
}
Alumno.prototype = new Persona()//aqi le digo alumno que su prototipo apunte al de objeto pasando por persona pero me cargo el constructor
Alumno.prototype.constructor= Alumno //para recuperar al cstructor Alumno 
const a1 = new Alumno('Pepe', 34, new Direccion( 'plaza niño jesús',15,'Madrid','España',),'JavaScript')
//console.log(Alumno.prototype.constructor)

 console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)


console.log('****************************************************************************')
const p1 = new Persona ('Pepe', 34, new Direccion( 'plaza niño jesús',15,'Madrid','España',))
const m1 = new Mascota('Enzo','Perro')
const m2 = new Mascota('Paco','Mono')
a1.comprarMascota(m1)
console.log(a1)
p1.comprarMascota(m1) // inyeccion de dependencia coger el objeto mascota que era independe y hacer que dependa de persona
/* console.log(p1)
console.log(m2.nombre)
console.log(p1.mascotas[0].nombre) */

//herencia => la clse hija tiene accesoa a todas las propiedades de sus padres 

