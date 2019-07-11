
//ES2017 (ES8): asinc / await 

const respuestas = [
    '',
    ['Esto es un mensaje', 3], //la segunda posicion del aarry me manda a la siguiente lectura

    ,
    ['construido a cachitos', 0],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array',]
]


function leerDatosAsinc(i, timer = 1000, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i) { //if i es truly 1
                console.log(`lectura de datos número ${i}`)
                resolve(respuestas[i])
            } else {
                reject(new Error('Error de lectura'))
            }

        }, timer)
    })
}
//asinc away consite en definir como asincrona la funcion que utliza las promesas en este caso main la declaro como asincrona con el asinc

const main = async () => {
    let aDatos = []
    let i = 1
   try {
    aDatos = await leerDatosAsinc(i, 2000) //a datos es el resolve then recoje el resolve await hace un esperate y segun cono se resueva la promea el resultado pasa a adtos 
    console.log(aDatos[0])
    i = aDatos[1]
    aDatos = await leerDatosAsinc(i, 3000) //leer datos genera una promesa que la encadenas con otro then Necesito poner return para pasarlo al siguiente then dado que esta funcion devuelve promesas
    console.log(aDatos[0])
    i = aDatos[1]
    aDatos = await leerDatosAsinc(i, 2000)
    console.log(aDatos[0])
    i = aDatos[1]
    aDatos = await leerDatosAsinc(i, 1000)
    console.log(aDatos[0])
    console.log('Leyendo los datos') 
}
 catch (error) {
        console.log(error.message)
    }  
    }

    


main()
