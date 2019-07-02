
/**
 * @description: funcion que cacule la media de n numeros independientes 
 * @param {...[]number} aDatos 
 * @returns {number} 
 */

function media(...aDatos){
    
    let x = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        x += item //x = x + item (item el valor del elemento en cada posion ) 1º item 2 r 2 2º vuelta item 4 r 6 3º vuelta item 7 r 13 y asi... 
        r = x / aDatos.length
    }
    return r
     }
console.log(media(2, 4, 7, 2, 4, 4))
console.log(media(5, 7, 5, 8, 9, 4, 6))





function mediaArray(aDatos){
let x = 0
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    x += item //r = r + item (item el valor del elemento en cada posion )
    r = x / aDatos.length
}return r

 } console.log(mediaArray(5, 7, 5, 8, 9, 4))


 /**
  * 
  * @param {*} params 
  */

function mediaTotal(...aDatos) {//rest operator 
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
    if (Array.isArray(item)) { // para que mire dentro de los posibles arrays que le paso 
        r += mediaTotal(...item) // spread operator en la salida poner ... convierte un array en elementos sueltos 

        } else{
            r += item
        }
         return r / aDatos.length
    }}
   console.log(mediaTotal(5, 7, 5, 8, 9, 4[5, 7, 5, 8, 9, 4, 6])) //esta nos funcionaba mal por que no era capaz de calcular bien los arrays
   
/*La BUENA*/
   function mediaTotal1(...aDatos) { /* rest operator */
    let r = 0;
    let n = 0;
    r += sumaTotal(...aDatos)

    function sumaTotal(...aDatos) {
        let s = 0;
        for (let i = 0; i < aDatos.length; i++) {
            const element = aDatos[i];
            if (Array.isArray(element)) {
                s += sumaTotal(...element)
            } else {
                s += element
                n++
            }
        }
        return s
    }}

    console.log(mediaTotal1(5, 7, 5, 8, 9, 4[5, 7, 5, 8, 9, 4, 6]))