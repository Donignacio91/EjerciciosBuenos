// Presentar sucesivamente los numeros primos entre 1 y 100 
// numeros primo numero que dividivido por lo numeros menores que el y mayores que 1 No da 0
//              if n%i = 0 o n%1= 0

  /**
   * @description Comprobar si un numero (n) es primo o no es primo 
   * @param {Number} n 
   * @returns {Boolean} //{String} 
   */
       
    
        function isPrimo(n) {

          if (n == 0 || n == 1) {
            return false
          } 
          let r = true 
          for (let i = 2; i < n; i++)  {       
              if (n % i === 0) {
                r = false 
                break;
              } 
          }
          return r
        }


        console.log(isPrimo(2))
        console.log(isPrimo(3))
        console.log(isPrimo(47))
        console.log(isPrimo(23))
        console.log(isPrimo(53))
        console.log(isPrimo(59)) 
        console.log(isPrimo(73))
        console.log(isPrimo(67))
        console.log('No primos')
        console.log(isPrimo(0))
        console.log(isPrimo(1))
        console.log(isPrimo(12))
        console.log(isPrimo(9))
        console.log(isPrimo(25))
        console.log(isPrimo(33))
        console.log(isPrimo(20))

       

            /* for (let i = 0; i < 100; i++) 
           
               console.log([i]) */
                
        
            
      
       

        /*function isPrimo(n) {
            let x = 0; x < 101; x++
            for (let i = x  ; x < n; x++) { // como podria poner i > 1 para wque no me coma el dos 
              if (n % x === 0) {
                  r = `  El número ${n} NO es un número primo`
                return false + r
              }else if (n % x < x) {
                 r = `   El número ${n} es un número primo`
                return true + r
              }
            }
         } */
         
          
          


                
        