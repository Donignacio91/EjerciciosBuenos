function cual(x='') { 
    //La estructura de control switch de Javascript es utilizada para tomar decisiones en función de distintos estados o valores de una variable.

switch (x) { //el valor que le pase a x se comparara con los diferentes case y me devolvera esa condicion
    case 'Naranja':
      console.log('El kilogramo de Naranjas cuesta $0.59.');
      break;
    case 'Manzana':
      console.log('El kilogramo de Manzanas cuesta $0.32.');
      break;
    case 'Banana':
      console.log('El kilogramo de Bananas cuesta $0.48.');
      break;
    case 'Cereza':
      console.log('El kilogramo de Cerezas cuesta $3.00.');
      /* break; */
    case 'Mango':
    case 'Papaya':
      console.log('El kilogramo de Mangos y Papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + x + '.');
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");
}

cual('Cerezas')

function operations(x) {
    switch (x) {
        case '+':
            console.log('1 + 1 =2')
            break;
        case '-':
                console.log('1 - 1 =0')
            break
        case '*':
                console.log('1 * 1 =1')
        break
        default:
                console.log('1 / 1 =1')
            break;
    }console.log("¿Hay algo más que te quisiera consultar?");
}
operations('*')



//    WHILE
//La sentencia while es la más sencilla de las estructuras de iteración. La iteración continuará hasta que su condición sea falsa.Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia
//La condición tiene que tomar un valor booleano (verdadero o falso). Si este valor es verdadero, se ejecutará la sentencia. Concluida esta acción se vuelve a evaluar la condición. Proseguirán los ciclos hasta que la condición no cambie a falso.
//while (condicion)//Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta sentencia. Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.
//sentencia,Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia block ({ ... }) para agrupar esas sentencias.
function simple(n) {

n = 0;
x = 0;
while (n < 3) { //mientras n sea menor qe tres aunmentame n y sumaselo a x
  n ++;
  x += n;//x= x + n 1ºvuelta=> n=1 y x = 1 || 2º vuelta n = 2 y x = 3 || n = 3 y x = 6
} return x   
}
console.log(simple())//6 da igual el valor que le pase porque tiene n = 0 


   function someThing(num) {
    num = 0
    while (num<1000) { // mientras num menor que cero 
        num += parseInt(Math.random() * 100) //num = Num + aleatorio  |sumará asta llegar a 1000|
        console.log(num)
    }
    
 }someThing(5)

//         DO WHILE
//La sentencia do...while crea un bucle que ejecuta una sentencia especificada,(DO ESTO) (WHILE) hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

function someThing2(num) { // hace lo mismo que someThing 1 pero en bucle do while
do {
    num += parseInt(Math.random() * 100)
    console.log(num)
} while (num<1000);
}
    
someThing2(5)


let aDatos = [6,3,0]
aDatos[aDatos.length]=3 //Añade al final
aDatos.push(6) //Añade al final
aDatos.unshift(9) //Añade al principio
console.log(aDatos)//[9 6 3 0 3 6]

let a1={nombre:'luci', edad:25, saldo:0};
let a2={nombre:'Paca', edad:25, saldo:100};
let a3={nombre:'Paco', edad:25, saldo:584}


function inscribirseJs(alumno, curso='') { // Alumno no es un valor, es un objeto. Alumno es una copia de la referencia. La función va a manipular los objetos exteriores a través del parámetro 
    if(alumno){
        alumno.curso= curso
        }
}

//Está acomplada, en otro programa diferente no funcionará. Dependerá de si en el otro ámbito está definida a1 (sería variable global o sea que mala idea)

; //Paso por referencia (no hay funciones puras como en el caso de x)
inscribirseJs(a1, 'carpinteria')
inscribirseJs(a2, 'html')

console.log(a1, a2)
function invertir(x) { 
    let z = Math.random()
    let rendimiento = (x * z) / 10
    return (x + rendimiento).toFixed(2)
    
}

a1.saldoNew = invertir(a1.saldo); // creo la nueva propiedad saldoNew y hago que sea el resultado del la funcion inverit y asi tengo el saldo antiguo y el nuevo

a2.saldoNew = invertir(a2.saldo);
a3.saldoNew = invertir(a3.saldo);
console.log(a1);
console.log(a2);
console.log(a3);

x= 23;
y = '20';

w = x +y; //El string tiene preferencia, hace el casting de number a String, por lo que lo concatena
console.log(w,typeof w);

w = w*1; // El número se multiplica por 1

//VARIAS FORMAS DE HACER CASTING O CONTROLAR LOS NÚMEROS Ó STRING

function sumar(a, b){
    if(typeof a!='number' || typeof b!='number' ){
        return 'No se pueden sumar dos String'
    }// Ó = || Y = &&
    return 'La suma de a y b es: ' + a + b;
}
console.log(sumar(1,5));
console.log(sumar(1,'5'));


function sumar1(a,b){    
    let r= Number(a) + Number(b) // con esto fuerzo ewl castin a number 
    return 'La suma de a y b es: ' + r;
}

console.log(sumar1(1,'5'));

function dimeEdad(e,r){
let msjs = [
    'No sabes mear de pie',
    'Ya meas de pie',
    'Ahora a curra',
    'ya te cuesta mear de pie',
    'Vuelves a mear sentado'
]
let i = 4
if (e < 8) {
    i = 0 
}else if (e < 18) {
    i = 1
}else if (e < 60) {
i = 2
} else if (e < 70) {
    i = 3
} /* else if (e < 100) {
    i = 4
}  */
console.log(`Con ${e} años; ${msjs[i]}`) // el mesj en la posicion x del array 
} 
dimeEdad(9)
dimeEdad(19)
dimeEdad(39)
dimeEdad(69)
dimeEdad(99)
function isNumber(n){
    let r=true;
    if(isNaN(n)||  typeof n=='boolean'|| Array.isArray(n) || n===''|| n===null){ //== COMPARACIÓN
        r=false
    }
    return [n + r];
}
dimeEdad(isNumber(24)) // me dice que con 25 le suma uno por el true??