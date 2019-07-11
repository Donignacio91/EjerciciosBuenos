//ES5 o anteriores

/* 
function Coche(marca, modelo,color,combustible,precio) {
    this.marca = marca
    this.modelo = modelo 
    this.color = color
    this.combustible = combustible
    this.precio = precio 
}

Coche.prototype.arrancar = function () {
    console.log('run run')
    return this
}
Coche.prototype.ver= function(){
    console.log(this) // para ver el coche 
} */
/**
 * ES6 
 * 
 * Modulos import / export
 * Arrow functions
 * Template string comillas francesas
 * Spread y rest 
 * bucle for in * 
 * clases
 * promesas
 *  */
// esto hace lo mismo que lo que haciamos hasta ahora pero escrito en moderno ES6 
//la clas coche es la constructyora coche  los metoos se meten dentro sin igual ni function
class Vehiculo {
    constructor(marca,modelo,color,combustible,precio){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.combustible = combustible
        this.precio = precio
    }
    arrancar() {
        console.log('Run run')
        return this
         // Lo ponemos para concatenar el método. Así concatenamos todos los métodos que queramos
    }
    ver() {
        console.log(this)
    }
        
}

class Coche extends Vehiculo{// una clase que extiende los parametros de vehiculo a coche 
    constructor(marca,modelo,color,combustible,precio,volante, radio){
        super(marca,modelo,color,combustible,precio)//super hace referencia al padre al que aparece en extens y le pasa los valores 
        this.volante = volante
        this.radio = radio
    }
}
    
class Moto extends Vehiculo{
    constructor(marca,modelo,color,combustible,precio,manillar){
        super(marca,modelo,color,combustible,precio)
        this.manillar = manillar
    }
    arrancar() {
        super.arrancar() //de aqui hace el arranque del vehiculo RUN run y despues le paso su arranque Brun
        console.log('Brun brun')
        return this
    }
    ver() {
        console.log(this)
    }
    hacerCaballitos(){
        console.log('caballitos')
        return this
    }
}

const coche1 = new Vehiculo('Audi','A3','Rojo','Hybrid','20000','Deportivo','Pionner')
coche1.arrancar().ver()
const moto1 = new Moto('Kawasaki','Ninja','Verde','Gasolina','18000','Extra')
moto1.arrancar().hacerCaballitos().ver()



console.log(moto1 instanceof Moto)//True
console.log(moto1 instanceof Vehiculo)//True para ver si son estancias o no de quien yo le pida 
console.log(moto1 instanceof Object)//True
console.log(moto1 instanceof Coche)//False



