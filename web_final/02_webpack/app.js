 export class App{
     constructor(){
         console.log('app run')
         this.btn = document.querySelector('#btn')
         this.saludo = document.querySelector('#saludo')

         this.btn.addEventListener('click', this.saludar.bind(this))
 }
 saludar(ev){
     console.log('pulsado')
     
     let msg ='hola Pepe'
    this.saludo.value = msg

 }
 

}   

