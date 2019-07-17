
export class App {
    constructor(){
       console.log('app on')
this.aBtn = document.querySelectorAll('.btn') 
this. inNombre = document.querySelector('#in-nombre')
this. outSaludo  = document.querySelector('#out-saludo') 
this. inNombre2 = document.querySelector('#in-nombre2')
this. outSaludo2  = document.querySelector('#out-saludo2') 


this.inNombre2.addEventListener('input', this.escribirContinuo.bind(this)) //SIEMTE UE ADDEVEN LISTENER TIENE THIS ACABA EN bind(this)!!!!!!
this.aBtn.forEach( (btn) => { btn.addEventListener('click', this.onBtnClick.bind(this))})

    }
    onBtnClick(event) {// al  
        console.dir(event.target.id)
        let msj = ''
        switch (event.target.id) {
            case 'btn-normal':
                msj = `Hola amigo, ${this.inNombre.value} desdemi funcion saludar JS `
                break;
        case 'btn-super':
            msj = 'Te he dicho que no tocaras'
                break;
                default:
                    msj = 'boton tonto'
    
        } this.outSaludo.textContent = msj
    }
    escribirContinuo() {
        this.outSaludo2.value = this.inNombre2.value
    }
}
 

/* 

//manejadores de eventos  //onclick selector de evento y manejador es saludar y protestar 
this.aBtn = document.querySelectorAll('.btn') 
 // nos pide la funcion y el param va a ser cada una de la vueltas 

//btnNormal.addEventListener('click', onBtnClick) // eventlistener es lo mismo que onclick mas geerico espera que evento y que funcion (funcion majehadora eventhandler)
//btnSuper.addEventListener('click', onBtnClick) // cunaod un nodo es un boton addeven
inNombre2.addEventListener('input', escribirContinuo) //ponte a vigilar
*/


//outSaludo.value = msj es decir lo mismo 

/* document.querySelector('#btn-super').onclick = protestar
document.querySelector('#nombre').value  // Le pido el value que hay en el id nombre input luuego arriba lo guardo en user  */

/* window.addEventListener('load')  */// solo para hacer algo especifico con una imagen 
//document.addEventListener('DOMContentLoaded', app) // este es un poco mas rapido sobre si hay imagenes // lo meto todo en una funcion simplona y asi ya tengo a qquien pasar
//todo esto lo hago para no tener que poner el scrip abajo en el hatmele le digo que cargue todod primero y luego ya pasamos java 