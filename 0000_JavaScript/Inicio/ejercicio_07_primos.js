// Presentar sucesivamente los numeros primos entre 1 y 100 
// numeros primo numero que dividivido por lo numeros menores que el y mayores que 1 No da 0
//              if n%i = 0 o n%1= 0

  
       /* for (let x = 0; x < 101; x++) */
    
       
    
         function isPrimo(n) {
          for (let i = 2  ; i < n; i++) { // como podria poner i > 1 para wque no me coma el dos 
            if (n % i === 0) {
                r = `  El número ${n} NO es un número primo`
              return false + r
            }else if (n % i !== 0  ) {
               r = `   El número ${n} es un número primo`
              return true + r
            } 
        }
        }
          
          console.log(isPrimo(23))
          console.log(isPrimo(10))
          console.log(isPrimo(72))
          console.log(isPrimo(73))
          console.log(isPrimo(47))
          console.log(isPrimo(2))
          console.log(isPrimo(1))// Como lo corrijo
          console.log(isPrimo(0))// Como lo corrijo
          console.log(isPrimo(12))


                
        