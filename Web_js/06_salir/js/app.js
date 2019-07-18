export function app() {
    console.log('app runs')

     let btnCancel = document.querySelector('#btn-cancel')
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar =document.querySelector('#dlg-cancelar')
    let handler   // la dec

    btnSalir.addEventListener('click', onClick)
    btnCancel.addEventListener('click', onClick2)


    function onClick(ev) {
        let url = 'https://github.com/'
        handler = setTimeout(() => {
            location.assign(url)
        }, 5000)
       
        dlgCancelar.showModal()
    
      
        //outSal.value = msj //solo vale para elementsOutputs
        //outSal.textContent = msj 
        //outSal.innerHTML = msj
    }
    function onClick2() {
        clearTimeout(handler)
        dlgCancelar.close() 
}
}