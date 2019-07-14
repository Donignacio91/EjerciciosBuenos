let multiplica= (x) => {
     if (isNaN(x)) {
      x = `error ${x} no es un numero correcto`
      return x
    }   return x*3
}

console.log(multiplica('p'))
console.log(multiplica('5'))
console.log(multiplica('8o'))

// FIBONACCI
/**
 *  @description funcion que realice la serie de fibonacci utilizando do while y una función callbak
 * @param {number} n
 * @return {Array} fib
 */

 function fibb(n) {
     let fibArray = [0,1];
     do {
         
     } while (condition);
     
 }





 function fib(n) {
    let fibArray = [0,1];
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray;
  }
  console.log(fib(8))