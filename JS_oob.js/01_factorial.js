const { isEntero, isValidNumber }  = require('./spec/01_factorial.spec.js')
//perpara y calcular son procesos que forma parte del constru no reciben parametros solo tabajas sobre this. 
//perara solo lanza error y calcular solo calcula
module.exports = class Factorial {   

    constructor(n) {
        this.n = n
        this.factorial = 1
        if(this.preparar()) { // si prearar bien pasa a calcular 
            this.calcular()   //estas son metodos internos por que los uso en constructor
        }
    }

    preparar() {
        if (!isValidNumber(this.n)) {
            throw new Error('El parametro no es un número')
        } else if ( !isEntero(this.n) ){
            throw new Error('El parámetro no es un entero')
        } else if (this.n < 0) {
            throw new Error('El párámetro es negativo')
        } else {
            return true
        }
    }

    calcular() {
        if (this.n > 1) {
            for (let i = 2; i <= this.n; i++) {
                this.factorial *= i
            }
        }     
    }
    
    calcularAtras() {
        if (this.n > 1) {
            for (let i = n; i >= 2; i--) {
                this.factorial *= i
            }
        }   
    }
    renderizar(){ // esto actua omo metod externo 
        let cadena= 
        `el factorial de ${this.n}
        es ${this.factorial.toLocaleString(n)}`
        console.log(cadena)
    }
}