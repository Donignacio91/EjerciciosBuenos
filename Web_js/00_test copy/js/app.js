     import { setCookie, getCookie } from "./cookies.js";

export class App{

     constructor(){
         console.log('app runs')
         this.out = document.querySelector('#out')
         this.out2 = document.querySelector('#out2')
         this.in = document.querySelector('#in')
         this.btnS = document.querySelector('#btn')
         this.total= document.querySelector('#total')
         this.clickk = ''
        this.btnS.addEventListener('click', this.iniciar.bind(this))
        this.total.addEventListener('click', this.sumaClick.bind(this))

 }

 iniciar(ev){
   /* clickk = */ setCookie('Click´s', 'cookie' , 2)
  this.out.value = getCookie('Click´s')
 }
 /* if (clickk !== '') {
    setCookie('Click´s', ++clickk, 5);
} */
 sumaClick(ev) {
     let count = 1
     
     
    this.out2.value += count 
    
}
}   

