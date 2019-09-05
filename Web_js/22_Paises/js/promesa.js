function algoAsync( ) {
   return new Promise( (resolve , reject) => {
    setTimeout(()=>{
        let n = Math.random()
        if (n < 0.8) {
            //OK
            resolve(n)
        }else{
            //Error
            reject(n)
        }
    },1000)
   } )

}
/* algoAsync()
.then(datos => console.log('You win ' + datos) ) //aquí viene resolve
.catch( error => console.log('You loose ' + error)) //aquí viene reject
 */
/* function main() {}
main() */
 (async ()=>{
    try {
        let datos = await algoAsync()
    console.log('You win ' + datos)

    } catch (error) {
        console.log('You loose ' + error)
    }
    
})()  //patron de utoejecucion lo mismo que arriba con el main  pero diciendo que es asyncrono si no lo pusiera seria de auto ejecución 

//son lo mismo
async function main (){
    try {
        let datos = await algoAsync()
    console.log('You win ' + datos)

    } catch (error) {
        console.log('You loose ' + error)
    }
    
}
main()