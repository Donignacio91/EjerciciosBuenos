/* 
Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de tactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/
const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')


const factura = {
    empresa: {
        nombre: 'Ediciones Tuatalug',
        direccion: 'c/ Pez 1, Madrid',
        telefono: '625875921',
        nif: 'T-34761234',
    },
    cliente: {
        nombre: 'Librería Boracai',
        direccion: 'c/ Carranza 5, Cádiz',
        telefono: '625493421',
        nif: 'F-76521743',
    },
    items : [
        {descripcion: 'Angular 8.0', precioU: 30, cantidad: 10},   
        {descripcion: 'JS para torpes', precioU: 32, cantidad: 12},   
        {descripcion: 'Typescrip Avanzado', precioU: 45, cantidad: 8},   
        {descripcion: 'Introducción a las aplicaciones Web', precioU: 37, cantidad: 11}],
    numFactura: '000000012',
    tipoIVA: 0.04,
    formaPago: 'Contado',
    fecha: new Date()
    }

function Empresa (nombre , direccion, telefono, nif) {
        this.nombre =nombre
        this.direccion=direccion
        this.telefono=telefono
        this.nif=nif
    }
    
    function Item (descripcion, precioU, cantidad ) {
        this.descripcion = descripcion
        this.precioU = precioU
        this.cantidad = cantidad
    
    }
    function Direccion (calle, num , ciudad , pais) {
        this.calle=calle
        this.num=num
        this.ciudad=ciudad
        this.pais=pais
    }
    

function Factura (empresa={},cliente ={}, items=[{}], numerFactura='', tipoIva= '', formaPago= '', fecha = new Date(), ) {
    this.empresa=empresa
    this.cliente=cliente
    this.items=items
    this.numerFactura = numerFactura
    this.tipoIva = tipoIva
    this.fomaPago= formaPago 
    this.fecha= new Date()
}
Factura.prototype.calcularImporte = function() {
    const importe = {} 
    importe.base = 
    this.items
    .map( libro => libro.precioU * libro.cantidad)
    .reduce( (total, item) => total + item ) 
importe.iva = importe.base * this.tipoIVA
importe.total = importe.base + importe.iva
return importe
}
Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30) //fija la longitud a 30 
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}
Direccion.prototype.toString = function() {
    return `
    ${this.calle}, ${this.num}, 
    ${this.ciudad}, ${this.pais} `
}
Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}
Factura.prototype.resumir= function () {
     
     console.log(`
     Factura :${this.numerFactura}, ${this.calcularImporte().total}`)}


     module.exports = {}
     module.exports.Factura =Factura
     module.exports.Empresa = Empresa
     module.exports.Direccion = Direccion
     module.exports.Item = Item
