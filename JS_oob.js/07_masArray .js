
    let aDatos = ['perro', 'gato']
    aDatos.length // me devuelve la longitud del array 
    aDatos.concat //sirve para concatenar arrays 
    ///implementadas como inmutables no afercta al array
   
    console.log(aDatos.concat(['caballo', 'leon']))
    console.log(aDatos)


    //implementadas como mutables
    aDatos.sort() //ordena alfabeticamente o por orden numerico alfetico 1 100, 2, 23, 333 si no le doy parametro 
    //si le doy parametros es una funcion callbakcs  puesto que le estoy pasando una funcion a otra para que la use 
    console.log(aDatos)
    let aNumeros = [9, 32, 3, 2, 21, 56 ]

    //            CLoNAR
    let aNumerosOrigin = aNumeros.slice() // el slice me clona el array // con su referencia 
    aNumeros.sort((a,b)=> a-b) // tras poner esto los ordena nmericamente ascendente 
    aNumeros.sort((a,b)=> b-a)// tras poner esto los ordena nmericamente ascendente 1,2,20,35,100,300 ya normal 
    console.log(aNumeros)
    console.log(aNumerosOrigin.reverse()) // te lo vuelve del reves 









