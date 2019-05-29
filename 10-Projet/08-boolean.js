let x = 34 // positivo
//x = -5 // negativo

console.log((x >= 0))
if (x >= 0) {
    console.log('Positivo')
}else{
    console.log('Negativo')
}


 //FALSY 
w = false
w = undefined
w = null
w = 0 
w = ''

//TRULY
w = 23
w = true
w = -28
w = ' '
w = 'Pepe'
w = []
w = {}

if (w){
//if (Boolean (w)) {
    console.log('Verdadero')
}else{
    console.log('Falso')
}

let q = 5
q = undefined
q = 0

//if(q != 0) { no es tipico de java
if (q){
    console.log('q tiene valor')
}else {
    console.log('q es 0')
}
if ( q === 0) { //=== significa identico 
    console.log ('q es exactamente 0')
}

let nota 
if(nota != true){
    console.log('Has sacado la nota minima')
}


if(!nota){
    console.log('Has sacado la nota minima')
}

let b = Boolean(nota)
b = !!nota
console.log(b, typeof b)

let edad = 25


function comprobarEdad (edad){
    let i = 3;
    let mensaje = [
        'Niñato!!', 'Eres Joung!', 'Señor!', 'ojo cuidado',
    ]
    if (edad < 18){
        i = 0
    //console.log(`con ${edad} años,`,'Niñato!!') //nos devuelve el dato introcucion 
}    else if (edad < 35){
    i = 1
    //console.log (`con ${edad} años,`,'Eres Joung!')
}   else if (edad < 50){
    i = 2
    //console.log(`con ${edad} años`,'Señor!')
}  // else{ i = 3 console.log(`con ${edad} años`,'ojo cuidado')}
   
    

console.log (`Con ${edad} años,`,mensaje[i])
}
let e = 43
    comprobarEdad(e);

/*if (edad < 18){
    console.log(`con ${edad} años,`,'Niñato!!') //nos devuelve el dato introcucio 
} else if (edad < 35){
    console.log (`con ${edad} años,`,'Eres Joung!')
} else if (edad < 50){
    console.log(`con ${edad} años`,'Señor!')
}
else if (edad){
    console.log(`con ${edad} años`,'ojo cuidado')
}*/



function codificaEdad(edad){
    let i = 3;
    if (edad < 18){
        i = 0
    //console.log(`con ${edad} años,`,'Niñato!!') //nos devuelve el dato introcucion 
}    else if (edad < 35){
    i = 1
    //console.log (`con ${edad} años,`,'Eres Joung!')
}   else if (edad < 50){
    i = 2
    //console.log(`con ${edad} años`,'Señor!')
}  // else{ i = 3 console.log(`con ${edad} años`,'ojo cuidado')}
   return i
}

function responderSegunEdad(edad){
        let i = 3;
        let mensaje = ['Niñato!!', 'Eres Joung!', 'Señor!', 'ojo cuidado',]  

        console.log (`Con ${edad} años,`,mensaje[codificaEdad(edad)])
    }

responderSegunEdad(e);