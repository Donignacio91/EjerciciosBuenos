import { Crono } from "./crono.js";

export function app() {
    console.log('Cargada app') 
    
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar = document.querySelector('#dlg-cancelar')
    let btnCancelar = document.querySelector('#btn-cancelar')
    let dlgTime = document.querySelector("#dlg-time")
    let wrapperCronos = document.querySelector(".wrapper-cronos")
    let btnIn = document.querySelector("#btn-ins")
    let inPlay = document.querySelector("#btn-ins")


    let handlerSalir
    let handlerInterval

    btnSalir.addEventListener('click', onClick)
    btnCancelar.addEventListener('click', onCancel)
    btnIn.addEventListener('click', onInscribir)

    let aCronos = []
    chechArray()
    function chechArray(){
    aCronos.forEach( idCrono => { 
        new Crono(idCrono, wrapperCronos)
    })}
    // wrapperCronos.innerHTML += `<p>Creados los cronómetros</p>`
function onInscribir(){
    let user = inPlay.value
    if (user) {
        aCronos.push(user)
    } 
}

    function onClick() {
        let url = 'https://www.google.com/'
        handlerSalir = setTimeout(() => location.assign(url),
                    4800)
        dlgCancelar.showModal()
        dlgTime.value = 5
        handlerInterval = setInterval( () => {
            dlgTime.value -= 1
        }, 1000)
    }

    function onCancel() {
        clearTimeout(handlerSalir)
        clearInterval(handlerInterval)
        dlgCancelar.close()
    }
 }