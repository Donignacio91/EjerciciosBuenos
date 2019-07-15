/** calcFib
 * @param {number}
 * @return {Array}
 */



function calcfib(limite) {
    if (limite < 1 ) {
        throw new Error('limite no valido')
    }
    let aFibo = [0 , 1]
    let i = 0
    let j = 1                       
    do {                               //1º vuelta                  //2º                    3º                               de 1º a 4º
        aFibo.push(i + j)           // 0 + 1                    // 1 + 1              // 1 + 2                           // 1 - 2 - 3 - 5    
        i = j                        //  0 = 1                  // 1 = 1             // 1 = 2                            // 1 - 1 - 2 - 3     
        j = aFibo[aFibo.length - 1] // añado 1 arry 3ºpos // añad 2 array 4º pos    añado un 3 en la 5º                 // 1 - 2 - 3 - 5 

    } while ((i + j )<= limite ); 

    return aFibo
}


let limite = 8
try {
    console.log(calcfib(limite))
} catch (error) {
    console.log(error.message)
}