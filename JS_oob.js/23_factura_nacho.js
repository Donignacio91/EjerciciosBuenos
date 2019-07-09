
function Factura(precio,unidades,empresa) {
    this.precio = precio
    this.unidades = unidades

   
}
Factura.prototype.iva= 0.21
Factura.prototype.nif= (Math.random())*10000000
Factura.prototype.fecha= new Date()
Factura.prototype.numFactura= (Math.random())*100

const f1 =new Factura(100,2,'recio')



function Cliente( nombre, direccion, telefono,nif){
    this.nombre= nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}
Cliente.prototype= new Factura
Cliente.prototype.constructor = Factura

function Direccion(calle, numero, ciudad, pais ){
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais 
}
const c1 = new Cliente('pepe',new Direccion('plaza roja','S/N','Moscú','Rusia'),'915839865','00485522-R')




function Trabajo (decripcion, precioU, cantidad ) {
 this.decripcion = decripcion
 this.precioU = precioU
 this.cantidad = cantidad
}
Trabajo.prototype= new Factura
Trabajo.prototype.constructor = Factura
const t1 = new Trabajo ('Angular 8.0', 30, 10)



Factura.prototype.getCalcImporte= function () {
    let importeNoIva = (this.precioU * this.cantidad)
    let importeTotal = (importeNoIva * this.iva)+ importeNoIva
    return importeTotal
}

Factura.prototype.mostrarTodo = function(){
    
}
