export function App(){
    console.log('app runs')
    
      constructor()  {
   this.aBtn = document.querySelectorAll('#btn')
   this.aInp = document.querySelectorAll('#input')
   this.aOut = document.querySelectorAll('#output')

   this.aBtn.forEach((btn) => { btn.addEventListener('click', this.onBtnClick.bind(this)) })

}


function onBtnClick (ev) {
    switch (ev.target.id) {
        case 'bnt[0]':
            this.nPalabras()

            break;
        case 'btn[1]':
            this.
            break;
        case 'btn[2]':
        

            break;
    }
}
 nLetras() {
    let r = this.aInp[0].replace(/ /g, "")
    this.out[0].value = r.length -1
    
    
}}

 nPalabras () {
    aPalabras= this.aInp[1].value.split(' ')
    this.out[1].value = aPalabras
} 

 lMedia(){

    let cadena2 = this.aInp[2].split(' ')
   
    let cadena3 = cadena.split(' ').join('')
   
    let cadena4 = cadena3.split('')
   
    let r = parseInt(cadena4.length / cadena2.length)
   
    this.out[1].value = r
   
   }