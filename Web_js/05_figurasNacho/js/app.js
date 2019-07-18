

/**web que permita calcular el area de un circulo un triangulo y un cuadrado 
triangulo base por altura 
circulo =A = π r²
_figuras
cuadrado lado por lado  */

export class App {

    

    constructor(){
    this.aBtn = document.querySelectorAll('.btn') 
    this.outTri = document.querySelector('#out-tri')
    this.outCuad = document.querySelector('#out-cuad')
    this.outCirc = document.querySelector('#out-circ')
    this.inTri1 = document.querySelector('#in-medidaTri1')
    this.inTri2 = document.querySelector('#in-medidaTri2')
    this.inCua1 = document.querySelector('#in-medidaCua1')
    this.inCua2 = document.querySelector('#in-medidaCua2')
    this.inCirc = document.querySelector('#in-circ')

    this.aBtn.forEach( (btn) => { btn.addEventListener('click', this.onBtnClick.bind(this))})
 console.log(this.inTri1)
 console.log('app runs')
} 
 onBtnClick(event) {
    console.dir(event.target.id)
    let msj = ''
    switch (event.target.id) {
        case 'btn-tri':
            
            this.outTri.value.triangulo(inTri1, inTri2)
            break;
    case 'btn-cua':
        this.outCuad.value.cuadrado(inCua1,inCua2)
            break;
            default:
               
                this.outCirc.value.circulo(inCirc)

    } 
}

triangulo(inTri1, inTri2){
    this.inTri1 = inTri1
    this.inTri2 = inTri2
    this.outTri = this.inTri1 * this.inTri2
}
Cuadrado(inCua1, inCua2){
    this.inCua1 = inCua1
    this.inCua2 = inCua2
    this.outCuad = this.inCua1 * this.inCua2
}


circulo(inCirc) {
    this.inCirc = inCirc
    this.outCircl = this.inCirc^2 * Math.PI 
}

}