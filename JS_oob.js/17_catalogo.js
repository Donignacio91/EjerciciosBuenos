/**
 * @property {string} descripcion
 * @property {string} codigo
 * @property {number} precio
 * @property {number} iva
 * @method {object} calcularIVa
 * @method {void} mostrar 
 * 
 */

function Libro(descripcion,codigo,precio) {
    this.descripcion = descripcion
     this.codigo = codigo
     this.precio = precio
}
Libro.prototype.iva = 0.21
Libro.prototype.calcularIva= function (descuento= 0) {
    const precio = (this.precio * descuento)+ this.precio
    return {
       iva: precio * this.precio,
       total: (precio * precio) + this.precio

    } 
}
Libro.prototype.mostrar= function () {
    const importe = this.calcularIva()//importe llama a los resultados de calcularIva variable temporal como apoyo variable operativa no tiene ningun sgnificado pero me guarda los datos de calcula iva A 
    const cadena = `
    descripcion: ${this.descripcion}
    codigo: ${this.codigo}
    precio${this.precio}
    Iva. ${iva}
    Precio total: ${importe.total}`
    return cadena
 }
 const l1 = new Libro('las ranas', '1525', 20)
 const l2 = new Libro('los  sapos', '1478', 20)
 const l3 = new Libro('la culebrilla', '1298', 10)
 l3.iva = 0.12 
