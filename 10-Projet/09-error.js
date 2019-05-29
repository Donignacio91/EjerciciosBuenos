
function codificaEdad(edad){
    let i = 3;
    if(!isValidNumber(edad)){
        i = -2
    }
    else if (edad <= 0){
        i = -1;
    }
    else if (edad < 18){
        i = 0
}    else if (edad < 35){
    i = 1
}   else if (edad < 50){
    i = 2
   return i
}}


function responderSegunEdad(edad){
        let mensaje = ['Niñato!!', 'Eres Joung!', 'Señor!', 'ojo cuidado']  

    let i = codificaEdad(edad);
    if (i>=0 && i<=3){
        console.log (`Con ${edad} años,`,mensaje[i])
        }
        else {
            console.log(`edad no validad: ${edad}`)
        }
}
let e = 55;

responderSegunEdad(e)
 console.log(responderSegunEdad(e))
;


function isValidNumber(n){
    r = true
    if (isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === '' || n===null) {
        r = false
    }
    return r
}
let n ='pepe'
n = 
n =  

console.log (n, isValidNumber(n))
