
export function app()  {


console.log('app on') //prueba de que todo esta ok
console.dir()//cuando haga un cosole log de un nodo siempre dir u objetos del dom
//document.querySelector('#btn-normal').onclick =  saludar // le paso el nombre de la function sin () 

                //  1º ESTABLECER NODOS
                //  2º ESTABLECER EVENTOS

//nodos del dom 
const btnNormal = document.querySelector('#btn-normal')
const btnSuper = document.querySelector('#btn-super')
 // esto es para coger todos piedo crear una clase para todos .clase o id #id


const inNombre = document.querySelector('#in-nombre')
const outSaludo  = document.querySelector('#out-saludo') 

const inNombre2 = document.querySelector('#in-nombre2')
const outSaludo2  = document.querySelector('#out-saludo2') 


//manejadores de eventos  //onclick selector de evento y manejador es saludar y protestar 
const aBtn = document.querySelectorAll('.btn') 
aBtn.forEach( (btn) => { btn.addEventListener('click', onBtnClick)}) // nos pide la funcion y el param va a ser cada una de la vueltas 

//btnNormal.addEventListener('click', onBtnClick) // eventlistener es lo mismo que onclick mas geerico espera que evento y que funcion (funcion majehadora eventhandler)
//btnSuper.addEventListener('click', onBtnClick) // cunaod un nodo es un boton addeven
inNombre2.addEventListener('input', escribirContinuo) //ponte a vigilar

function onBtnClick(event) {// al 
    console.dir(event.target.id)
    let msj = ''
    switch (event.target.id) {
        case 'btn-normal':
            msj = `Hola amigo, ${inNombre.value} desdemi funcion saludar JS `
            break;
    case 'btn-super':
        msj = 'Te he dicho que no tocaras'
            break;
            default:
                msj = 'boton tonto'

    }outSaludo.textContent = msj
}

//outSaludo.value = msj es decir lo mismo 

/* document.querySelector('#btn-super').onclick = protestar
document.querySelector('#nombre').value  // Le pido el value que hay en el id nombre input luuego arriba lo guardo en user  */

function escribirContinuo() {
    outSaludo2.value = inNombre2.value
}
}
/* window.addEventListener('load')  */// solo para hacer algo especifico con una imagen 
//document.addEventListener('DOMContentLoaded', app) // este es un poco mas rapido sobre si hay imagenes // lo meto todo en una funcion simplona y asi ya tengo a qquien pasar
//todo esto lo hago para no tener que poner el scrip abajo en el hatmele le digo que cargue todod primero y luego ya pasamos java 