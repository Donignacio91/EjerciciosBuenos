export function app() {

    const userURL= 'https://jsonplaceholder.typic5ode.com/users'
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
            outputNombre.innerHTML =', registro no valido solo del 1 al 10'
            return
        }
        let url = userURL + '/' + inputId.value 

        ajax('get', url, leerDatos)//funcion que yo programo para independizar y tnerla disponible siempre recibe la wl metodo la url y la funcion callback en este caso la llamo leer datos pero puede ser cualquier otra funcion que quiwera segun lo que quirea hacer 
}

function ajax (metodo , url , callback) {
    
 http.addEventListener('readystatechange', ()=>{callback(http)}) 
 http.open(metodo, url) 
 http.send() 
}
 //AJAX
 
 
//funcion del evento AJAX 
function leerDatos(http) {

    if (http.readyState == 4 && http.status == 200) {
    let data = JSON.parse(http.responseText) // es lo que manda el server en string si es en json text si es en xml responsexml 
    //readistate 4 me dice si ha terminado y el status me dice como a ido el 200 es todo bien 404 sertia un fallo  
 console.log(http.responseText)// los datos enviados por el servidor(api)

 outputNombre.innerHTML = data.username
} else {
    //outputNombre.innerHTML ='liada parda problemon'
    location.assign('./error.html')//redireccion desde java
}
}}