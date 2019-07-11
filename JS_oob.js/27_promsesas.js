//no sabemos lo que vale algo hasta drentro de un tiempo. Pueden tener dos caminos: si se cumple la respuesta tiene que ser completamente distinta de si no

function asincrona() { //es un patron de crear objetos es un factory no es constructor 
    return new Promise((resolve,rejet)=>{//tiene como parametro dos ejecutor resol y rejet (callbacks ) // la primera es para cunado se cumpre y el segundo para cuando no 
        let i = Math.random()
        setTimeout(()=>{
                if (i < 0.7) {
                    resolve('Ole!!' + i)
                } else {//error
                   
                    rejet(new Error('error nº' + i))
                }
        },1000)
    }) 
        
}


asincrona()
.then((datoResponse) => {console.log(datoResponse)}) // DR viene de resolve UNA FUNCION resolve la que QUE DICE QUE HAGO CUANDO TODO  VA BIEN 
.catch((error) => {console.log(error.message)}) //QUE HAGO CUANDO TODO  VA MAL viene de reject

let datos

function leerDatosAsinc(i, timer = 1000, callback){//el indice de la operacion
   return setTimeout(
        () =>
        {
            console.log(`lectura de datos numero ${i}`)
            datos = {data: 'muchos datos'}
        }
         ,timer )
    
}
const handler = leerDatosAsinc(1,2000) //necetio obtener el handerl //console,log(leerDatosAsinc(1,2000))para obtenero y esto es porque tenemos el return settimeout
console.log('leyendo los datos... ')
clearTimeout(handler) //anula el handelr con lo cual anula el proceso lo para 



const respuestas = [
    '',
    ['Esto es un mensaje', 3], //la segunda posicion del aarry me manda a la siguiente lectura
    
    ,
    ['construido a cachitos', 7],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array', ]
]


function leerDatosAsinc(i, timer = 1000, callback) {
    setTimeout(() => {
            console.log(`lectura de datos número ${i}`)
            callback(respuestas [i])
        }, timer)
} 

let i = 1
leerDatosAsinc(i, 2000, (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    leerDatosAsinc(i, 3000, (aDatos) => {
        console.log(aDatos[0])
        i = aDatos[1]
        leerDatosAsinc(i, 2000, (aDatos) => {
            console.log(aDatos[0])
            i = aDatos[1]
            leerDatosAsinc(i, 1000, (aDatos) => {
                console.log(aDatos[0])    
            })
        })
    }) 
})


console.log('Leyendo los datos')
    



