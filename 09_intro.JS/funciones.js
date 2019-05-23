'use strict'
// ES6 5tipos 
//Undefine -> no definidos
//Bolean -> true / false
//Number -> datos númericos
//String -> Palabras
//Objetc -> la chunga

//Declaracion de la función 
function sample() {
    //let saludo      //Declara variable. En este caso de tipo undefine
    //let saludo = '' // ya la inicializo con las comillas abiertas para que sea del tipo string
    // let saludo = 'hola' // declarar después
    //let usser = 'Pepe' // Declaro e inicializo ; en este caso tipo string.
    let saludo = 'hola'
    //curso = 'JavaScrip' //MALA PRÁCTICA.
    console.log(saludo)}
//invocación o ejecución o uso de una función por eso les ponemos nombre


//let saludo = 'hello'// no deberiamos hacer uso de variables globales todo a traves de funciones

function saludar(nombre) {
    
    let saludo = 'hola  ';
    console.log(saludo + nombre);
}

saludar('pepe ')
saludar('elena')
saludar ()

//console.log(saludar)

function sumar (suma) {
    let a = 2
    let b = 15
    
    
    //return c;
}
sumar()
/**separacionde resposabilidadeso intereses*/
/* separation of concerns (eddger V. dijistra...) */

/**
 * funcion suma
 * recibe dos parametros 
 * devuelve la suma de ambos 
 * 
 * @description /* recibe parametros y devuelve la suma de ambos 
 * 
 * @param {number}
 * @param {nubmer}
 * @returns {number}
 * 
 * 
 */
function suma(a = 0, b =0){
    /* let c = a + b
    return c; */
    return a + b;
    console.log(suma(15,8))
}


/**
 * Funcion mostrar recibe un texto 
 * Y lo saca por la pantalla
 * 
 * @param (any)
 * @returns (void)
 * 
 */
function mostrar (cadena = ''){
    console.log(cadena)
}

/**
 * funcion división
 * @param{number}
 * @param{number}
 * 
 */
function division(c){
    
    return a/b;
}
/**JSdocs cpmenet */

/** funcion resta 
 *  @description /* recibe parametros y devuelve la resta de ambos 
* @param{number}
 * @param{number}
 * 
 */

function resta(a = 0, b =0){
   
    return a-b;
    console.log(resta(15,8))
}
function multiplicacion(a =0 , b = 1){
    return a * b;
}


function probar(){
    mostrar(suma(5, 3))
    mostrar(suma(x))
    mostrar(suma(x,y))
    x = 4
    y = 2
    mostrar(division(5,2))
    mostrar(resta(5))
}
/*  function sumarContipos(a: number, b:number) :number{
    return a + b
 } 
 suma(12 , 56) */