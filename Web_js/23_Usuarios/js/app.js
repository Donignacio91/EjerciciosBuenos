import { USERS } from './api.js'
export function app() {
    console.log('Cargada app')

    let aUsers = [] // creo la variable para guardar los datos  
    let url = USERS
    getDatos()
    // Nodos del DOM
    
    let tabUsuarios = document.querySelector('#tb-usuarios')
    let aInputs = document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')


    let aBtnEdit = []
    let aBtnBorrar = []
    // Asociación de manejadores de eventos
    btnAdd.addEventListener('click', onClickAdd )

    // Funciones manejadoras de eventos

    //Otras funciones 

function onClickAdd() {
    let oUsers = {
        nombre: aInputs[0].value ,
        edad: aInputs[1].value
    }
    console.log(oUsers)
    let cabecera = new Headers({
        'Content-Type' : 'application/json'
    }) 
    fetch(url, {method:'post',headers: cabecera, body: JSON.stringify(oUsers)})
    .then(response => response.json()
    .then(data => {if (data.id > 0){
        getDatos()
    }}
    ))
 
}

    function getDatos() { //al den le llegan los datos que saca fetch
         fetch(url).then(response => response.json()) //como esto es otra promesa toca otro den
         .then( data => { aUsers = data 
            renderData()} )
    }

    function renderData() {
        let html = ` <tr>
            <th >ID</th> 
            <th >Nombre</th>
            <th >Edad</th>
        </tr>` 
        
        aUsers.forEach(item => html += `<tr>
            <td class="id" >${item.id}</td> 
            <td class="nombre">${item.nombre}</td>
            <td class="edad">${item.edad}</td>
        <td class="boton btnEditar" data-id="${item.id}"> <i class="fas fa-user-edit" ></i></td>
        <td class="boton btnBorrar" data-id="${item.id}"><i class="fas fa-backspace"></i></td>
        
        </tr>` 
       );
        tabUsuarios.innerHTML = html
        actualizarBotones()

    } 
    function  actualizarBotones(){
        //nodo
        aBtnEdit = document.querySelectorAll('.btnEditar') 
        aBtnBorrar = document.querySelectorAll('.btnBorrar') 
        //event
        aBtnBorrar.forEach(item => {item.addEventListener('click',onClickBorrar)})
        aBtnEdit.forEach(item => {item.addEventListener('click',onClickEdit)})

    }
    function onClickBorrar(ev){
        console.log('Borrar', ev.target.parentElement.dataset.id)
        let id 
        if(event.target.tagName == 'td'){
            id = ev.target.dataset.id}
            else {//ev.target.tagName= 'i'
           id = ev.target.parentElement.dataset.id
}
    }
    function onClickEdit(ev){
        console.log('editar', ev.target.parentElement.dataset.id)
        let id 
        if(event.target.tagName == 'td'){
            id = ev.target.dataset.id}
            else {//ev.target.tagName= 'i'
           id = ev.target.parentElement.dataset.id
}
}
    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
    
}