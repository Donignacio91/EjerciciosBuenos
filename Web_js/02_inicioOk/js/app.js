
console.log('app on') //prueba de que todo esta ok
//console.dir() //apy de quierry selector no permite hacer selecciones de objetos gracias a los de csss 
//document.querySelector('#btn-normal').onclick =  saludar // le paso el nombre de la function sin () 

                //  1º ESTABLECER NODOS
                //  2º ESTABLECER EVENTOS

//nodos del dom
const btnNormal = document.querySelector('#btn-normal')
const btnSuper = document.querySelector('#btn-super')
const inNombre = document.querySelector('#in-nombre')
const outSaludo  = document.querySelector('#out-saludo') 
const inNombre2 = document.querySelector('#in-nombre2')
const outSaludo2  = document.querySelector('#out-saludo2') 
//nodos del dom establecer
/* const no2 ={
     btnNormal : document.querySelector('#btn-normal'),
     btnSuper : document.querySelector('#btn-super'),
     inNombre : document.querySelector('#in-nombre'),
     outSaludo  : document.querySelector('#out-saludo'),
} */

//manejadores de eventos  //onclick selector de evento y manejador es saludar y protestar 
btnNormal.addEventListener('click', saludar) // eventlistener es lo mismo que onclick mas geerico espera que evento y que funcion 
btnSuper.addEventListener('click', protestar) // cunaod un nodo es un boton addeven
inNombre2.addEventListener('input', escribirContinuo)


function saludar() {
    
outSaludo.value=`Hola amigo, ${inNombre.value} desdemi funcion saludar JS `
    
}

function protestar() {
   outSaludo.value = 'Te he dicho que no tocaras'
}
/* document.querySelector('#btn-super').onclick = protestar
document.querySelector('#nombre').value  // Le pido el value que hay en el id nombre input luuego arriba lo guardo en user  */

function escribirContinuo() {
    outSaludo2.value = inNombre2.value
}