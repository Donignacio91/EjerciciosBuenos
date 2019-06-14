/* let limite = 10 
for (let i = 0 ; i < limite ; i++  = i+2 ){
  console.log(i;i+i)
     El bucle mas tipico */

let limite = 10
let suma= 0
for (let i = 0 ; i < limite ; i++ /* = i+2 */){
    let cuad =(i*i)
    console.log(i, cuad)
    suma = suma + cuad
}
console.log(suma)

const aDatos = [
    'Perro',
    'Gato',
    'Caballo',
    'Oso'
]
for (let i = 0; i < aDatos.length; i++) {
    let item = aDatos[i];
    if( i>0){
        item = item + 's'
    }
    console.log(`Tengo un ${i+1} ${item}`)
    
}