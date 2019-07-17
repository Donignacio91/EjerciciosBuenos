
/**
 * Una función que recibe una string  y un número entre 1 y 10 y codifica y decodifica el string en funcion de ese numero
 * 
 * @param {string}: x
 * @param {number}: y
 * 
 * @returns {string}: msg
 */

/* Enigma
Crear un programa con funciones de desencriptación y encriptación

El algoritmo sera simplemete sustituir cada caracter por el coresponciente a la suma de su código UTF + el de un número fijo usado como clave.

Ejemplo

Hola <--- clave 3 -----> Krnc */
class Enigma {
    constructor(){
        this.clave = 0
        this.cadena = ''
        this.criptoCadena = ''
    }

    encriptar(cadena, clave) {
        this.criptoCadena = ''
        this.cadena = cadena
        this.clave = clave
        /* this.criptoCadena = 
        this.cadena.split('').map(letra => {
            String.fromCharCode(letra.charCodeAt(0) + this.clave)  
        }).join('') */
        let aCadena = this.cadena.split('')
        for (const letra of aCadena) {
            const numLetraCofificada =  letra.charCodeAt(0) + this.clave
            const letraCodificada = String.fromCharCode(numLetraCofificada)
            this.criptoCadena += letraCodificada            
        }
    }

    desencriptar(cadena, clave) {
        this.cadena = ''
        this.criptoCadena = cadena
        this.clave = clave
        let aCadena = this.criptoCadena.split('')
        for (const letra of aCadena) {
            const numLetraCofificada =  letra.charCodeAt(0) - this.clave
            const letraCodificada = String.fromCharCode(numLetraCofificada)
            this.cadena += letraCodificada            
        }
    }

    desencriptarBruto(cadena) {
        for (let i = 1; i <= 10; i++) {
            this.desencriptar(cadena, i)
            console.log(i, this.cadena)
        }
    }
}

{
    let cadena = 'Hola Pepe'
    enigma = new Enigma()
    enigma.encriptar(cadena, 10)
    console.log(enigma.criptoCadena)
    // enigma.desencriptarBruto('Mtqf%Ujuj')    
}

class Enigma2 {
    constructor(){
    }

    static encriptarShort(cadena = '', clave = 0) {
        return cadena
        .split('')
        .map(letra => String.fromCharCode(letra.charCodeAt(0) + clave))
        .join('')
    }

    static encriptar(cadena, clave) {
        let criptoCadena = ''
        let aCadena = cadena.split('')
        for (const letra of aCadena) {
            const numLetraCofificada =  letra.charCodeAt(0) + clave
            const letraCodificada = String.fromCharCode(numLetraCofificada)
            criptoCadena += letraCodificada            
        }
        return criptoCadena
    }

    static desencriptarShort(criptoCadena, clave) {
        return(this.encriptarShort(criptoCadena, -clave))
    }

    static desencriptar(criptoCadena, clave) {
        return(this.encriptar(criptoCadena, -clave))
    }

    static desencriptarBruto(cadena) {
        for (let i = 1; i <= 10; i++) {
            console.log(i, this.desencriptar(cadena, i))
        }
    }
}

{
    let cadena = 'Hola Pepe'
    let cripto = Enigma2.encriptar(cadena, 10)
    console.log(cripto)
    console.log(Enigma2.desencriptar(cripto, 10))

    cadena = 'Hola amigo Pepe'
    cripto = Enigma2.encriptarShort(cadena, 8)
    console.log(cripto)
    console.log(Enigma2.desencriptarShort(cripto, 8))
}














class Enigma {
    constructor(){
        this.clave = 0
        this.cadena = ''
        this.criptoCadena = 0


    }
    encriptar(cadena, clave){ //aqui es donde llegan los parametros no al constructor el string y el numerito y me devuelve el codeencript si en cripto cadena
        this.cadena = cadena 
        this.clave = clave
        this.criptoCadena = ''
       /*  
        this.arrayCode= []
        this.cadena .split('').forEach( letra => {
           this.arrayCode.push(String.fromCharCode(x.charCodeAt(0) + this.clave )) 
        });
        
    }  */
    
    

     


    desencriptar(cadena, clave){
        this.criptoCadena = cadena
        this.clave = clave
        this.cadena = ''
    }
}



let x = 'p'
 

  
console.log(String.fromCharCode(117))