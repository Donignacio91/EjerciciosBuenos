
    let aReyes= ['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']

/**
 * 
 */
    function rey(x ) {
    let aReyes= ['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos'] 
   
 for (let i = 0; i < aReyes.length; i++) {
     let item = aReyes[i];
    if (item.toUpperCase() == x.toUpperCase()) {
         return [true, i] 
     }
    
      }
      return [false, -1]
 }
 console.log(rey('ignacio'))
 console.log(rey('Isabel'))
 console.log(rey('Pepe'))
 console.log(rey('Luis'))

 function mostrarIsRey(x) {
     let [isRey , position] = rey(x)

  const mensajes = [ `el nombre ${x.toUpperCase() }, no ha sido usado por ningun rey español`,
      `el nombre ${x.toUpperCase() }, si ha sido usado por ningun rey español y esta en la posicion numero ${++position} de la lista` ]   
      console.log(mensajes[+rey]) // el mas aqui obliga a hacer castin a number
  } 
 
 //mostrarIsRey('ignacio')
 //mostrarIsRey('Isabel')
 //mostrarIsRey('Pepe')
 //mostrarIsRey('Luis')

 

console.log(aReyes.indexOf('Fernando')) // recorrec un bucle y me devuelve el i index de quien yo le pido si devleve -1 hay un error de busqueda
console.log(aReyes.indexOf('Pepe')) 
console.log(aReyes.indexOf('Juan Carlos')) 
console.log(aReyes.indexOf('Juana')) 
// ES7 
console.log(aReyes.includes('Fernando')) // booleana que me dvuelve true en caso de que este en array cuando no quiero saber la poscion