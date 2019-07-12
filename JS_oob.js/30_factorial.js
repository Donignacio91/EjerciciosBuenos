

function isValidNumber(n) {
    let r = true
    if (isNaN(n) || typeof n == 'boolean'
        || Array.isArray(n) || n === '' || n === null) {
        r = false
    }
    return r
}
function convertirNumeroValido(n) {
        return Math.trunc(n)
    } 


    function factorial(n) {
        let fact = 1
       // let error ='Error no ha introducido un valor numérico correcto'
        if (isValidNumber(n) && convertirNumeroValido(n))  {

            for (let i = 1; i <= n; i++) {
                fact = fact * i
            }
        }
        
        else {
            fact =  new Error('Error no ha introducido un valor numérico correcto') //me deja mucha morralla

        }
       return fact
    }


function mostrarFactorial(x) {
    x = factorial(x)
    console.log (`El factorial es ` +x)
    
}

console.log('1')
    console.log(mostrarFactorial(6))
    console.log('2')
    console.log(mostrarFactorial(-5))
    console.log('3')
    console.log(factorial(5.2))
    console.log('4')
    console.log(factorial('pepe'))
 
    