    
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

     - ${this.precio}€  ....................Precio sin iva sin unidad;|
     - ${precioTotal}€  .......................Unidad iva incluido;|
     - ${iva}% .................................IVA aplicado;|
     - ${precioJuego}€ ........Precio juego completo iva incluido;| 
     - ${precioPareja}€ ................Precio pareja iva incluido;|
     `
     return recibo
 } 


 const art1 =new Articulo('Michellin', 'ps4', 98)
 const art2 = new Articulo('Pirelli', 'p7', 80.5)
 console.log(art1)
 console.log(art1.calcularImporteUnitario())
 console.log(art1.mostrarTodo())
 console.log(art2)
 console.log(art2.calcularImporteUnitario())
 console.log(art2.mostrarTodo())

 