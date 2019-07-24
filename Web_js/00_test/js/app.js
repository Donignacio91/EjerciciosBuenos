 export class App{
     constructor(){
         console.log('app runs')
         this.out = document.querySelector('#out')
         this.in = document.querySelector('#in')
         this.btnS = document.querySelector('#btn')
      
        this.btnS.addEventListener('click', this.cronos.bind(this))
 }
 write(){
    this.out.value ='hola primal'
 }
 cronos(ev){
         let time =0
            setTimeout(()=>{
                setInterval( () => {
                    this.crono = ++time 
                    this.out.value = this.crono 
                    //console.log(crono)
                },1000)   
            },1000)
                }
       
    

   



}   

