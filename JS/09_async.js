/* asincronia */ //hacer una cosa prograada en el tiempo 
// en otros leguajes es multithread hay muchos hilos para hacer muchas cosas
//dandose una concurrencia real 
//en java hay un solo hilo para hacerlo todo que gestiona el bucle de eventos
setTimeout( () => {
    console.log('pasaron dos segundos')
},2000)//espera dos parametros 2º timeout y es un number en milisegundos 
console.log("fin")
setTimeout(() => { /* Se miden siempre en milisegundos(2º parámetro (0)) */
    console.log(`Mensaje 1`)/* 1 y 4 son asincrono por lo que se coloca después del 5 */
}, 0)
console.log("Mensaje 2")
console.log("Mensaje 3")

setTimeout(() => {
    console.log("Mensaje 4")
}, 2000);

console.log("Mensaje 5")