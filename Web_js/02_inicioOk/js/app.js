
export function app()  {


console.log('app on') //prueba de que todo esta ok
console.dir()//cuando haga un cosole log de un nodo siempre dir u objetos del dom
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
/* const no2 ={ establecer nocodos en objeto 
     btnNormal : document.querySelector('#btn-normal'),
     btnSuper : document.querySelector('#btn-super'),
     inNombre : document.querySelector('#in-nombre'),
     outSaludo  : document.querySelector('#out-saludo'),
} */

//manejadores de eventos  //onclick selector de evento y manejador es saludar y protestar 
btnNormal.addEventListener('click', saludar) // eventlistener es lo mismo que onclick mas geerico espera que evento y que funcion (funcion majehadora eventhandler)
btnSuper.addEventListener('click', protestar) // cunaod un nodo es un boton addeven
inNombre2.addEventListener('input', escribirContinuo) //ponte a vigilar

/**
 * 
 * LAs propiedades son on.. los eventos sin on 
 * input
 * scrool
propiedad => Descripción	Elementos para los que está definido
onblur => Un elemento pierde el foco	<button>, <input>, <label>, <select>, <textarea>, <body>
onchange => Un elemento ha sido modificado	<input>, <select>, <textarea>
***onclick	=> Pulsar y soltar el ratón	Todos los elementos
ondblclick => Pulsar dos veces seguidas con el ratón	Todos los elementos
**onfocus => Un elemento obtiene el foco	<button>, <input>, <label>, <select>, <textarea>, <body>
onkeydown => Pulsar una tecla y no soltarla	Elementos de formulario y <body>
onkeypress =>	Pulsar una tecla	Elementos de formulario y <body>
onkeyup	=> Soltar una tecla pulsada	Elementos de formulario y <body>
onload => Página cargada completamente	<body>
onmousedown	=> Pulsar un botón del ratón y no soltarlo	Todos los elementos
onmousemove	=> Mover el ratón	Todos los elementos
onmouseout => El ratón "sale" del elemento	Todos los elementos
onmouseover	=> El ratón "entra" en el elemento	Todos los elementos
onmouseup => Soltar el botón del ratón	Todos los elementos
onreset	=> Inicializar el formulario	<form>
onresize =>Modificar el tamaño de la ventana	<body>
**onselect => Seleccionar un texto	<input>, <textarea>
**onsubmit =>	Enviar el formulario	<form>
onunload =>	Se abandona la página, por ejemplo al cerrar el navegador	<body>
 */
function saludar() {
    
outSaludo.textContent=`Hola amigo, ${inNombre.value} desdemi funcion saludar JS `
    
}

function protestar() {
   outSaludo.value = 'Te he dicho que no tocaras'
}
/* document.querySelector('#btn-super').onclick = protestar
document.querySelector('#nombre').value  // Le pido el value que hay en el id nombre input luuego arriba lo guardo en user  */

function escribirContinuo() {
    outSaludo2.value = inNombre2.value
}
}
/* window.addEventListener('load')  */// solo para hacer algo especifico con una imagen 
//document.addEventListener('DOMContentLoaded', app) // este es un poco mas rapido sobre si hay imagenes // lo meto todo en una funcion simplona y asi ya tengo a qquien pasar
//todo esto lo hago para no tener que poner el scrip abajo en el hatmele le digo que cargue todod primero y luego ya pasamos java 