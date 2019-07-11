

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
        let error = ''
        if (isValidNumber(n) && convertirNumeroValido(n))  {

            for (let i = 1; i <= n; i++) {
                fact = fact * i
            }
        }
        
        else {
            fact = new Error('Error no ha introducido un valor numérico correcto')

        }
       return fact
    }





    console.log(factorial(5))
    console.log(factorial(-5))
    console.log(factorial(5.2))

    console.log(factorial('pepe'))

    