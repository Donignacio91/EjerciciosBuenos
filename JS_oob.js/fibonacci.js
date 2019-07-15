
/**
 * Fibonacci
 * usando do while crear una funcion que proporcionandole un numero limite te devuelva la serie de numero hata ese numero  
 * @params {number}
 * @returns{Array}
 */


 

  function fibb(n) {
    let fibArray = [0,1];
   do {
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
   } while (fibArray.length <= n)
       return fibArray
  }

  console.log(fibb(7))

  function total(n) {
    let x = `La serie de Fibonacci del numero ${n} es ${fibb(n)}`
        return x

      
  }
  
console.log(total(8))