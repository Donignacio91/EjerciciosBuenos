 export class App{
     constructor(){
         console.log('app run')
         this.btn = document.querySelector('#btn')
         this.saludo = document.querySelector('#saludo')
         this.inNombre = document.querySelector('#nombre')

         this.btn.addEventListener('click', this.saludar.bind(this))
 }
 saludar(ev){
     console.log('pulsado')
     let msg = 'hola pepe'
     if(this.inNombre.value){
         let msj =`hola ${this.inNombre.value}`
      this.saludo.value = msj
    
     }
     
     this.saludo.value = msg
 }
 

}   

