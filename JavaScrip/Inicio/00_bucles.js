
//      BUCLES

    /* OPERADORES
    *operadores de incremento o decremento muy importante es += o -= 
    */ 


// FOR 

let aDatos = ['BMW','audi','seat','skoda','vw' ]

for (let i = 0; i < aDatos.length; i++) {
    let item = aDatos[i];
    
  
    if (i<1) {
        item =  item +' me enamora el ' + item;
    }
    if (i>1,i<4) {
        item = item + ' no está mal el ' + item;
    } 
    if (i>=4) {
        item = item + ' como contamina el ' + item;
    }  
 
   console.log(` tengo un ${item}`)
}

/**
 * @description Funcion que recorra un array dividiendo numero n  entre 2 y mostrando el numero n entre dos igual a 
 * @param  {Array} z 
 * @returns {number, array}
 * 
 */

let aNumeros = [75, 100, 50, 44, 120 ,24]

function recorrido() {
    
    for (let i = 0; i < aNumeros.length; i++) {
        let item =aNumeros[i];
        item =  ` El numero ${item} dividido entre 2 su resultado es ` + item/2
        
    console.log(item)
    }
    
}

recorrido(aNumeros)

/**
 * @description Funcion reciba un valor x en kilometros por hora y lo devuelva en mph  
 */
let aKm = [30, 50, 80, 100, 130 ,160]

function pasarAMillas() {
    for (let i = 0; i < aKm.length; i++) {
        let item = aKm[i];
        item = item/1.61;
        if (item/1.61 > 65) {
            item = item/1.61 + '  ATENCION EXECE EL LIMITE DE VELOCIDAD'
            
        }
        console.log(item)
    } 
}
pasarAMillas(aKm)