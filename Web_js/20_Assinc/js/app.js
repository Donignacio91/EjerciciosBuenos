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

    function onClickBuscar(ev){

        if(inputId.value < 0 || inputId.value > 10){ 
            return
        }
        let url = userURL + '/' + inputId.value 

   //instaciamos un objeto AJAX
 http.addEventListener('readystatechange', leerDatos) 
 //onreadystatechange   //aviso del server de cambio de estado hay 4 y el 4º me iindica que ya se ha terminado la conexsion los datos se han enviado y ya esta todo listo
 http.open('GET', url) //abre conexion pide 2 parametros 1º el metodo(get,posh, put o delete) 2º url (que ya le he guardado en una variable)
 http.send() //manda los datos
}

 //AJAX
 
 
//funcion del evento AJAX 
function leerDatos(ev) {

    if (http.readyState == 4 && http.status == 200) {
    let data = JSON.parse(http.responseText) // es lo que manda el server en string si es en json text si es en xml responsexml 
    //readistate 4 me dice si ha terminado y el status me dice como a ido el 200 es todo bien 404 sertia un fallo  
 console.log(http.responseText)// los datos enviados por el servidor(api)

 outputNombre.innerHTML = data.username
}
}}