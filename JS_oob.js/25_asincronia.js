/**
 * Asincronia
 * Proceso que consume tiempo:
 * Cunado un proceso consume tiempo puede ser de dos tipos 
 *       -bolqueante
 *       -no bloquenate 
 * 
 * Bucle con Cola de eventos 
 */

 //Proceso bloqeante 1 segundo //no deja que se hagan mas procesos durante un segundo o x segundos 
 //siguientes procesos 

 //Proceso no bloqeante 1 segundo //si premite que se realicen otros proceos 
 //siguientes procesos 

setTimeout(()=> console.log('Mensaje 1'), 0) // al tener un serTimeout lo manda a la cola de eventos y sera el primero en ejecutarse cuado ya lo ha hecho msj 7
 console.log('Mensaje 2')
 console.log('Mensaje 3')
 setTimeout(()=> console.log('Mensaje 4'), 2000) //sera el ultimo
 console.log('Mensaje 5')
 setTimeout(()=> console.log('Mensaje 6'), 1000)
 console.log('Mensaje 7')