


const {Direccion,Empresa,Factura,Item} = require('./25_modelos.js')
const {empresa,boracai,papiros} = require('./25_datos.js')
const {cursos,motores} = require('./25_pructos.js')

const items = [
    new Item('Angular 8.0', 30, 10),
    new Item('JS para torpes', 32, 12),
    new Item('Typescrip Avanzado', 45, 8),
    new Item('Introducción a las aplicaciones Web', 37, 11),
]

const factura12 = new Factura(empresa , boracai, items, '000000012', 0.04, 'Contado', new Date())



//factura12.render()
//console.log(factura13)

const cliente2 = new Empresa('Librería papiro',new Direccion( 'c/ Esperanza', '5', 'Madrid','España'), '625455421','F-76525555')


const items2 = [
    new Item('Angular 8.0', 30, 20),
    new Item('Typescrip Avanzado', 45, 12),
    new Item('Introducción a las aplicaciones Web', 37, 21),
]

const factura13 = new Factura(empresa , cliente2, items2, '000000013', 0.04, 'Tranferencia', 
'10-05-2019',)
