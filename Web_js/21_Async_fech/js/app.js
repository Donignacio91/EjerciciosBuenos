export function app() {

    const userURL= 'https://jsonplaceholder.typicode.com/users'
    const http = new XMLHttpRequest()
    //Nodos del DOM

    let inputId = document.querySelector('#input-Id')
    let btnBuscar =document.querySelector('#btn-Buscar')
    let btnBorrar = document.querySelector('#btn-Borrar') 
    let outputNombre = document.querySelector('#span_saludo')
    
    //Manejadores
    btnBorrar.addEventListener('click',onClickBorrar) 
    btnBuscar.addEventListener('click', onClickBuscar2017)
   
    function onClickBorrar(ev) {
        inputId.value = ''
    }
 
    function onClickBuscar(ev){

        let url = userURL + '/' + inputId.value 
        fetch(url)  // una promsea e un objeto que devuelve valores pero en un futuro  
        .then(response=>{ 
            if(response.status == 200){
            return  response.json()
        }
            throw(new Error(response.status))

            
        }).then( (data) => {
          outputNombre.innerHTML = data.username
        }) //funcion para cuando salga bien la promise
        .catch((error)=>{
            outputNombre.innerHTML ='liada parda problemon fallo conexión ' + error
        }) //funcion para cuando salga mal la promise

    } 

    async function onClickBuscar2017(ev) {
        let url = userURL + '/' + inputId.value 
        try {
            let response = await fetch(url)
            if(response.status == 200){
               let data = await response.json()
                outputNombre.innerHTML = data.username
        } else {
            throw(new Error(response.status))}
        } catch (error) {
        
            outputNombre.innerHTML ='liada parda problemon fallo conexión ' + error
        }
        }}