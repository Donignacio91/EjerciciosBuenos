

function Triangulo(lado1,lado2,lado3) {
    this._lado1=lado1
    this._lado2=lado2
    this._lado3=lado3
}

const tri1 = new Triangulo(5,10,15)
const tri2 = new Triangulo(10,10,15)
const tri4 = new Triangulo(5,10,10)
const tri5 = new Triangulo(10,5,10)
const tri3 = new Triangulo(10,10,10)


Triangulo.prototype.getLados= function () {
    let mostrarLados = `

    Los lados del siguiente triangulo miden: 
    Lado 1 => ${this._lado1} cm
    Lado 2 => ${this._lado2} cm
    Lado 3 => ${this._lado3} cm
    `
    return mostrarLados
  
}
Triangulo.prototype.getPerimetro= function() {
    let perimetro = this._lado1 + this._lado2 + this._lado3
    let re = 
    `
    El perimetro de este triandulo mide ${perimetro}cm.
    `
    return re
}

Triangulo.prototype.getTipo = function () {
    let r =
    `Este triangulo es escaleno. `
    if (this._lado1 == this._lado2 && this._lado1 == this._lado3 ) {
        let x = `Este triangulo es equilatero. `
        return x
    }
    if(this._lado1 == this._lado2 && this._lado1 != this._lado3 || this._lado1 != this._lado2){
        let y =
    `Este triangulo es isosceles.`
        return y
    }
    return r
}
Triangulo.prototype.verTodo= function () {
    /* let a = this.getTipo()
    let b = this.getLados()
    let c = this.getPerimetro()
    return a + b + c */
    return  this.getTipo() + this.getLados() + this.getPerimetro()
}

/* console.log(tri1)
console.log(tri1.getLados())
console.log(tri1.getPerimetro())
console.log(tri1.getTipo())
console.log('***************************************************')
console.log(tri2)
console.log(tri2.getLados())
console.log(tri2.getPerimetro())
console.log(tri2.getTipo())
console.log('***************************************************')
console.log(tri3)
console.log(tri3.getLados())
console.log(tri3.getPerimetro())
 console.log(tri3.getTipo())*/
console.log('***************************************************')
console.log(tri1.verTodo())
console.log('***************************************************')
console.log(tri2.verTodo())
console.log('***************************************************')
console.log(tri3.verTodo())
console.log('***************************************************')