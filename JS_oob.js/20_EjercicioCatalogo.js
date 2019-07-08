    
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
     this.descripcion = descripcion
     this.codigo = codigo
     this.precio = precio
 }
 Articulo.prototype.iva=0.21
 Articulo.prototype.calcularImporteTotalUnitario =function(precio) { 
     let ivaTotal = (this.precio * this.iva)
     let importeTotalUnitario= ivaTotal + this.precio
      const precioTotal =  (this.precio*this.iva)+ this.precio
     const precioJuego = precioTotal * 4
     const precioPareja = precioTotal * 2
     let iva1 = this.iva * 100 

      return {importeTotalUnitario,precioTotal, precioJuego ,precioPareja, iva1}
     //console.log(importeTotal)
 }
  Articulo.prototype.mostrarTodo=function() {
      const {precioTotal, precioJuego ,precioPareja, iva1} = this.calcularImporteTotalUnitario()//declaro que  en esa constante me guarde los resultados de calcular importe total unitario.
     
      const recibo = 
     `
     Neumatico ${this.descripcion} ${this.codigo}

    |  - ${this.precio.toFixed(2)} €  ......................Precio sin iva unidad;     |
    |  - ${precioTotal.toFixed(2)} €  .......................Unidad iva incluido;      |
    |  - ${iva1}% .............................IVA aplicado;            |
    |  - ${precioPareja.toFixed(2)} € ................Precio pareja iva incluido;      |
    |  - ${precioJuego.toFixed(2)} € .......Precio juego completo iva incluido;       |
     `
     return recibo
 } 


 const art1 = new Articulo('Michelin', 'ps4', 99)
 const art2 = new Articulo('Pirelli', 'p7', 70)
 const art3 = new Articulo('Dunlop', 'sport maxx', 86)
 const art4 = new Articulo('Nankang', 'NS-2', 70)

 console.log(art1)
 console.log('***************************************************************')
 console.log(art1.calcularImporteTotalUnitario())
 console.log('***************************************************************')
 console.log(art1.mostrarTodo())
 console.log('***************************************************************')
 /* console.log(art2)
 console.log(art2.calcularImporteTotalUnitario()) */
 console.log(art2.mostrarTodo())
 console.log('***************************************************************')
 /* console.log(art3)
 console.log(art3.calcularImporteTotalUnitario()) */
 console.log(art3.mostrarTodo())
 console.log('***************************************************************')
 /* console.log(art4)
 console.log(art4.calcularImporteTotalUnitario()) */
 console.log(art4.mostrarTodo())
 console.log('***************************************************************')

 