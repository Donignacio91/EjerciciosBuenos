    
/**
 * @description Crear un objeto usado para representar un artículo de una tienda. El artículo va a tener:
 *  -Descripción
 *  -Código
 *  -Precio
 * y debe permitir el cálculo de su correspondiente IVA y ser capaz de mostrar los datos por pantalla (2 Métodos).
 * DETALLES: en lugar de incorporar las funciones directamente en el objeto se incorporarán en la función constructora.
 * OBJETIVO: Conocer la técnica para declarar objetos e inicializar una serir de propiedades y métodos
 * @param
 * @return
 */


 function Articulo(descripcion,codigo,precio) {
     this.descripcion= descripcion
     this.codigo=codigo
    this.precio=precio
 }
 Articulo.prototype.IVA=0.21
 Articulo.prototype.calcularImporteUnitario =function(precio) {
     let ivaTotal = (this.precio * this.IVA)
     let importeTotal= ivaTotal + this.precio
     return importeTotal
     //console.log(importeTotal)
 }
  Articulo.prototype.mostrarTodo=function() {
     const precioTotal =  (this.precio*this.IVA)+ this.precio
     const precioJuego = precioTotal * 4
     const precioPareja = precioTotal * 2
     let iva = this.IVA *100
     const recibo = 
     `
     Neumatico ${this.descripcion} ${this.codigo}

    |  - ${this.precio} €  ......................Precio sin iva sin unidad;   |
    |  - ${precioTotal} €  .......................Unidad iva incluido;      |
    |  - ${iva}% .............................IVA aplicado;           |
    |  - ${precioPareja} € ................Precio pareja iva incluido;      |
    |  - ${precioJuego} € .......Precio juego completo iva incluido;       |
     `
     return recibo
 } 


 const art1 =new Articulo('Michelin', 'ps4', 99)
 const art2 = new Articulo('Pirelli', 'p7', 70)
 const art3 =new Articulo('Dunlop', 'sport maxx', 86)
 const art4 = new Articulo('Nankang', 'NS-2', 70)

 console.log(art1)
 console.log(art1.calcularImporteUnitario())
 console.log(art1.mostrarTodo())
console.log('***************************************************************')
 console.log(art2)
 console.log(art2.calcularImporteUnitario())
 console.log(art2.mostrarTodo())
 console.log('***************************************************************')
 console.log(art3)
 console.log(art3.calcularImporteUnitario())
 console.log(art3.mostrarTodo())
 console.log('***************************************************************')
 console.log(art4)
 console.log(art4.calcularImporteUnitario())
 console.log(art4.mostrarTodo())
 console.log('***************************************************************')

 