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
    btnBuscar.addEventListener('click', onClickBuscar)
   
    

    //Inicializacioón de valores 
    /*  let user = localStorage.getItem(store)//este solo quiere saber donde bscar 
    if (user) {
        inputNombre.value = store
        outputNombre.innerHTML = inputNombre.value
    }   */

    //Funciones manejadoras de eventos




    function onClickBorrar(ev) {
        inputId.value = ''
    }

   
}