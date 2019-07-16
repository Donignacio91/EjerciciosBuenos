

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
        if (isValidNumber(n))  {

            for (let i = 1; i <= n; i++) {
                fact = fact * i
            }
        }
        
        else {
            throw new Error('Error no ha introducido un valor numérico correcto')

        }
       return fact
    }
try {
   console.log(factorial())
} catch (error) {
    console.log(error.message)
}




    console.log(factorial(5))
    console.log(factorial(-5))
    console.log(factorial(5.2))

    console.log(factorial('pepe'))

    