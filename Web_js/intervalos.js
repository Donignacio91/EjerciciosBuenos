/* 
let handler = setTimeout(()=>{ // ligo que handerler es igual a un cosolelog de hola ejecutado a los 4 segundos 
    console.log('Hola')
},1000)

setTimeout(( ) => {
    clearTimeout(handler)   // le digo que me borre la cola de eventos en dos segundos como el otro tarda 4 en salir la eliminade la cola de eventos 
},2000 )
 */
let i = 0
setInterval( () => {
    console.log(++i)
},100)  //realiza esto hasta que alguien lo pare

