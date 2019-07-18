
export class App {

    constructor() {
        //DOM
        this.aBtn = document.querySelectorAll('.btn') //si agrupo todos lo botnes formo un array en orden de html agrupo todos los botontones porque todos van a hacer lo mismo
        this.outTri = document.querySelector('#out-tri') // asigno outputs e inputs 
        this.outCuad = document.querySelector('#out-cua') // asigno outputs e inputs 
        this.outCirc = document.querySelector('#out-circ')// asigno outputs e inputs 
        this.inTri1 = document.querySelector('#in-medidaTri1')// asigno outputs e inputs 
        this.inTri2 = document.querySelector('#in-medidaTri2')// asigno outputs e inputs 
        this.inCua1 = document.querySelector('#in-cua1')// asigno outputs e inputs 
        this.inCua2 = document.querySelector('#in-cua2')// asigno outputs e inputs 
        this.inCirc = document.querySelector('#in-circ')// asigno outputs e inputs 

        this.aBtn.forEach((btn) => { btn.addEventListener('click', this.onBtnClick.bind(this)) }) //asigno el evento

        console.log('app runs')
    }
    onBtnClick(event) { //la funcion del evento 

        switch (event.target.id) {
            case 'btn-tri':
                this.triangulo()
                break;
            case 'btn-cua':
                this.cuadrado()
                break;
            case 'btn-cir':
                this.circulo()
                break;
        }
    }

    triangulo() {
        this.outTri.value = (this.inTri1.value * this.inTri2.value) // qui le digo guarda el calor del resultado de operar con los valores in tal y cuañl que arriba le digo desde que intpur le entrarn 
    }
    cuadrado() {
        this.outCuad.value = this.inCua1.value * this.inCua2.value
    }
    circulo() {
        this.outCirc.value = (this.inCirc.value * this.inCirc.value * Math.PI**2).toFixed(2)
    }

}