
// todas utilizan una funcion callback que recie el valor del item el index en el que estamos y opcionalemnte el array ejecutan la funcion una vez por vuelta 

//no tengo porque porner siempre los tres parametros item e i suele ser que si 
const aDatos = [2,3,7,4,9,5]

/*
aDatos.forEach((item, i, array)=> { } ) RECORRIDO o PROCESADO del Array, hace lo mismo que el bucle for pero tenemos una funcion que define lo que queremos que pase en cada vuelta permite procesar recorrer cada uno de los elemntos del array 

aDatos.map((item, i, array) => { } ) //Crea un array nuevo de las mismas posciones donde cada elemnto se contruye aplicando una funcion determindada al elemnto correspondiente del array aterior  // es importante que map tenga un return // te devuelve una proyeccion array mismo largo mismo todo pero en este caso ya realizada la operacion

aDatos.filter((item, i, array)=> { } )

aDatos.some((item, i, array)=> { } )

aDatos.every((item, i, array)=> { } )


aDatos.reduce((item, i, array)=> { } )

aDatos.reduceRight((item, i, array)=> { } )
 */

aDatos.forEach(
    item => { console.log(` - ${item}`)}
)
//es lo mismo que for(const item of aDatos){ console.log(` - ${item}`)}

//Proyectar o mapear un array 
//Crea un array nuevo de las mismas posciones donde cada elemnto se contruye aplicando una funcion determindada al elemnto correspondiente del array aterior  // es importante que map tenga un return // te devuelve una proyeccion array mismo largo mismo todo pero en este caso ya realizada la operacion
function cuadrados(aDatos = []) {
    return aDatos.map(item => item * item)
}  //son lo mismo 
/* const cuadrados = (aDatos = []) => 
   aDatos.map(item => item * item) // la buena forma seria así
 */
console.log(cuadrados(aDatos))
let usuarios = ['Rosa', 'Raquel', 'Elena', 'Sara','Ramon']
console.log(usuarios.map(item => item.toUpperCase())) // uso map porque no deja de ser un bucle 

//FILTROS de ARRAY Cuando lo que necesito es un array de distintans dimensiones del array de origen, por que solo integrare algunos elemntos //filteer espera una funcion booleana
function pares(aDatos = []) {aDatos.filter(item => !(item%2)) }//que me de un array con los numeros pares de otro array 
    

/* const pares = (aDatos = []) //que me de un array con los numeros pares de otro array 
    return aDatos.filter(item => !(item%2)) */

function impares(aDatos = []) {//que me de un array con los numeros pares de otro array 
    return aDatos.filter(item => (item%2))
}
console.log(pares(aDatos))
console.log(impares(aDatos))

//REDUCIONES  -- reduce un array funcion reductora aplica a parejas de valores y me va dejadno el valor yo le doy mi array y en previo guarda la suma de los y item es el que vamos añadiendo // no devuleve un array devuelve un valor // para trabajar co series de numeros 

function sumaTotal(aDatos = []) { 
    return aDatos.reduce((previo, item)=>{return previo + item})//1º previo 2º current
   }
   console.log(sumaTotal(aDatos))

function media(aDatos = []) { 
    let i= 0
    let sumaTotal = aDatos.reduce((acumulado, item, index)=>{   
    i = index //aqui guardo el ultimo valor del indez despues del buvle y rent saca el acumulado final hacia fuera 
    return acumulado + item})

    console.log(++i)
    return sumaTotal / ++i
   }


   console.log(sumaTotal(aDatos))
   console.log(media(aDatos))

   //some 
   //aDatos.some()
let aReyes= ['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos'] 


   /* function rey(x ) {
 for (let i = 0; i < aReyes.length; i++) {
     let item = aReyes[i];
    if (item.toUpperCase() == x.toUpperCase()) {
         return [true, i] 
     }
    
      }
      return [false, -1]
 } */
// es un buscador/comprobador que devuelve boolean 
 function isNombreRey(Nombre) {
     return aReyes.some(item => (Nombre.toUpperCase() === item.toUpperCase()))   
 } 
 
 console.log(isNombreRey('ignacio'))
 console.log(isNombreRey('Isabel'))
 console.log(isNombreRey('Pepe'))
 console.log(isNombreRey('Luis'))
 //ever solo devuelve el primer fallo sireve para validar que toda una lista empiece por una misma letra o cumpla una condicion