export function app() {

    const store = 'userName'

    //Nodos del DOM


    let btnBorrar = document.querySelector('#btn-Borrar')
     let btnBorrar = document.querySelector('#btn-Borrar')
    let inputNombre = document.querySelector('#input-nombre')
    let outputNombre = document.querySelector('#span_saludo')
    let btnGuardar =document.querySelector('#btn-Guardar')


    //Manejadores


    btnBorrar.addEventListener('click',onClickBorrar)
    inputNombre.addEventListener('input', onInput)
    btnGuardar.addEventListener('click', onClickGuardar)
    /* inputNombre.addEventListener('change', onChangeNombre) */
    

    //Inicializacioón de valores 
    let user = localStorage.getItem(store)//este solo quiere saber donde bscar 
    if (user) {
        inputNombre.value = store
        outputNombre.innerHTML = inputNombre.value
    }

    //Funciones manejadoras de eventos


    function onClickGuardar(ev){
    localStorage.setItem(store, inputNombre.value)/* donde quiero guardar y que quiero guardar */
    }

    function onClickBorrar(ev) {
        inputNombre.value = ''
        outputNombre.innerHTML = inputNombre.value
        localStorage.removeItem(store)
    }

    /* CHANGE - Cuando hacemos un enter, tabulador ... hace un change. Pierde el foco y se produce el evento change. Es una evento que se produce una vez en un input. Hasta que no termine el usuario de hacer x no hago y 
    INPUT - Cada vez que escribo una letra. A la vez que el ususario hace algo hacer x*/

    function onInput(ev) {
        console.dir(ev.target.value) /* ev.target es igual que inputNombre, porque es quien dispara el evento */
        outputNombre.innerHTML = ev.target.value /* Para que salgan las letras al mismo tiempo que el usuario escribe */
    }
    /* function onChangeNombre(ev){
        console.log('change',event.target.value)
    } */

}