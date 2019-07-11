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
