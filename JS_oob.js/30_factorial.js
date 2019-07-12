

function isValidNumber(n) {
    let r = true
    if (isNaN(n) || typeof n == 'boolean'
        || Array.isArray(n) 
        || n === '' 
        || n === null) {
        r = false
    }
    return r
}
function isEntero(n) {
    return Number.isInteger(Number(n)) // bolean que me dice si es entero o no 
    //return parseFloat(n) === parseInt(n)
    //return pase
}
function convertirNumeroValido(n) {
        return Math.abs(Math.trunc(n))
    } 


function factorial(n) {
        let fact = 1
       // let error ='Error no ha introducido un valor numérico correcto'
        if (isValidNumber(n) && n === convertirNumeroValido(n))  {

            for (let i = 1 ; i <= n; i++) {
                fact = fact * i
            }
        }
        
        else {
           throw new Error('Error no ha introducido un valor numérico correcto') //me deja mucha morralla se quita con try catch

        }
       return  `el resutado factorial de ${n} es ${fact}`
    }
    
    try {
        console.log(factorial(5))
    } catch (error) {
        console.log(error.message) 
    }

    
    function factorial2(n) { // a la inversa
        let fact = 1
       // let error ='Error no ha introducido un valor numérico correcto'
        if (isValidNumber(n) && n === convertirNumeroValido(n))  {

            for (let i = n ; i >= 2; i--) {
                fact = fact * i //fact *= i
            }
        }
        
        else {
           throw new Error('Error no ha introducido un valor numérico correcto') //me deja mucha morralla se quita con try catch

        }
       return  `el resutado factorial de ${n} es ${fact}`
    }
    
    try {
        console.log(factorial2(5))
    } catch (error) {
        console.log(error.message) 
    }


    