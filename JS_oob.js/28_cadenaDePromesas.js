const respuestas = [
    '',
    ['Esto es un mensaje', 3], //la segunda posicion del aarry me manda a la siguiente lectura
    
    ,
    ['construido a cachitos', 0],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array', ]
]


function leerDatosAsinc(i, timer = 1000, callback) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(i){ //if i es truly 1
                console.log(`lectura de datos número ${i}`)
            resolve(respuestas [i])
            }else{
                reject(new Error('error de lectura'))
            }
            
        }, timer)
    })
} 

    let i = 1
    
    leerDatosAsinc(i, 2000).then((aDatos)=>{ //a datos es el resolve 
        console.log(aDatos[0])
        i = aDatos[1]
        return leerDatosAsinc(i, 3000,) //leer datos genera una promesa que la encadenas con otro then Necesito poner return para pasarlo al siguiente then dado que esta funcion devuelve promesas
    }).then((aDatos)=>{
        console.log(aDatos[0])
        i = aDatos[1]
        return leerDatosAsinc(i, 2000)
    }).then((aDatos)=>{
        console.log(aDatos[0])
        i = aDatos[1]
        return leerDatosAsinc(i, 1000,) 
    }).then((aDatos)=>{
        console.log(aDatos[0])  
    }).catch((error)=>{
            console.log(error.message)
    })

console.log('Leyendo los datos')
    