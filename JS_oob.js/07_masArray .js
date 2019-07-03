
    let aDatos = ['perro', 'gato'];
    aDatos.length // me devuelve la longitud del array 
    aDatos.concat //sirve para concatenar arrays 
    ///implementadas como inmutables no afercta al array
   
    console.log(aDatos.concat(['caballo', 'leon']))
    console.log(aDatos)


    //implementadas como mutables

    // MUTABLESSSSS

    aDatos.sort() //ordena alfabeticamente o por orden numerico alfetico 1 100, 2, 23, 333 si no le doy parametro 
    //si le doy parametros es una funcion callbakcs  puesto que le estoy pasando una funcion a otra para que la use 
    console.log(aDatos)
    let aNumeros = [9, 32, 3, 2, 21, 56 ]

    //            CLoNAR
    let aNumerosOrigin = aNumeros.slice() // el slice me clona el array // creando una nueva referencia 
    aNumeros.sort((a,b)=> a-b) // tras poner esto los ordena nmericamente ascendente 
    aNumeros.sort((a,b)=> b-a)// tras poner esto los ordena nmericamente ascendente 1,2,20,35,100,300 ya normal 
    console.log(aNumeros)
    console.log(aNumerosOrigin.reverse()) // te lo vuelve del reves 

    let aNombres = ['audi', 'alfa', 'bmw', 'honda']
    ////            CLoNAR
    let clon = aNombres.slice() //ahota ya trabajo con el clon y la original la dejo tranquila

    //fraccionar array:  inmutable
    console.log(aNombres.slice(1,3)) //adimte dos parametros que son las posiciones del array (0, 6) el ultimo parametro resta uno en este caso me da del 0 al 5 y me devuelve un nuevo array con eso que yo le he pedido (entre la cer y la) //tambien crea un nuevo array con nueva referencia para dsoues ir modificandolo a el solo //no perjudica al array original 
    console.log(aNombres)


    //fraccionear array: mutable
    //splice funciona paracido a slice este actual normal con el ultimo valor Le digo donde empiezo y cunato se tiene que mover.
    let marcas = aNombres.splice(1,3, 'mercedes', 'ford' ) //quito tres tras audi y añado dos mas pero ya los dejo quitados //,marcas ahora se quedan con las marcas que he quitado 
    console.log(marcas)
    console.log(aNombres)


    //splice tambien se utiliza pra añadir elementos en la posicion que yo quiera // no coge arrays 
    let aPaises= ['Francia', 'Holanda', 'italia', 'Hungria' , ]
    aPaises.splice(2,0,'España')
    console.log(aPaises)

    //PILAS y COLAS 
    //pila es un stack FiLO first in last out El primero que entra es el ultimo que sale 
    aPaises.push('Portugal','belgica') // LA MAS IMPORTANTE añade elementos al final // si hago u push de un array me los ca añadiendo al final uno a uno este si loscoje
    //aPaises.pop() // quita el ultimo elemnto 
    
    console.log(aPaises)

//COLAS -> heap FIFO MUTABLE
aPaises.unshift('Croacia', 'Servia')//inserta un nuevo elemento al princiopio del array)
aPaises.shift() //quita del principio
console.log(aPaises)