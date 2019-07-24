     import { setCookie, getCookie } from "./cookies.js";

export class App{

     constructor(){
         console.log('app runs')
         this.out = document.querySelector('#out')
         this.out2 = document.querySelector('#out2')
         this.in = document.querySelector('#in')
         this.btnS = document.querySelector('#btn')
         this.main= document.querySelector('main')
         this.clickk = ''
        this.btnS.addEventListener('click', this.iniciar.bind(this))
        this.main.addEventListener('click', this.sumaClick.bind(this))

 }

 iniciar(ev){
   clickk = setCookie('Click´s', 0 , 2)
  this.out.value = getCookie('Click´s')
 }
 sumaClick(ev) {
   
    
}
}   

