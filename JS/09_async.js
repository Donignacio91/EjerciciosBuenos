/* asincronia */ //hacer una cosa prograada en el tiempo 
// en otros leguajes es multithread hay muchos hilos para hacer muhas cosas
//dandose una concurrencia real 
//en java hay un solo hilo para hacerlo todo que gestiona el bucle de eventos
setTimeout( () => {
    console.log('pasaron dos segundos')
},2000)//espera dos parametros 2º timeout y es un number en milisegundos 
console.log("fin")