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
    - el número de dactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/

const oFactura ={
    Empresa: {
        nombre:'Enteprise comunity',
        direccion:'poligono industrial las mercedes nº 7',
        telefono:'914876862',
        nif:'8956245',
    },
    Clientes: {
          empresesa:'Paco e hijos', 
            nombre:'Paco Junqueras',
            direccion:'cuenca',
            telefono:'687895456',
            nif:'8656259-n',
    },
     items:[
        {descripcion: 'servicios de asesoria', precio : 3500, cantidad :2},
        /*{descripcion: 'servicios de asesoria', precio : 3500, cantidad :'1 mes',},
        {descripcion: 'servicios de asesoria', precio : 3500, cantidad :'1 mes',},
        {descripcion: 'servicios de asesoria', precio : 3500, cantidad :'1 mes',}, */
    ],
    numeroFactura:'00001',
    tipoIva: 21,
    formaPago:'Efectivo',
    fecha: new Date(),
    }

 oFactura.calcularImporte = function () {
     const importe= {}
     let importe =  
     this.items 
    .map(item => item.precio * item.cantidad) //hace un arrai con la multiplicadionde la cantiadd por precio
    .reduce ((total , item) => total + item)  // esto ya hace la suma de todo 
    let iva = totalBase * this.tipoIva
    let total = totalBase +tipoIva
    importe.tipoIva = importe.base + importe.base
    return importe
    
 }
    oFactura.listaritems()= function () {
        
    }
    oFactura.prepararfactura()= function () {
        const importe = this.calcularImporte ()
        const factura = 
    }


    

/* function impTT(z, y) {
    let zupa = oFactura.Elementos.precio
    let yuoe = oFactura.infoBasica.tipoIva
    let resul = ((zupa * yuoe)/100) + zupa 
    

    console.log(`El palo asciende a  ${resul}€`)
    
}
console.log(impTT(1,1)) */
//console.log(impTT( 1, 1))
//console.log(oFactura)
//console.log(calculaImpTotal())