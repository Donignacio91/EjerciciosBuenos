export function app() {
    console.log('app runs')

    let btnCancel = document.querySelector('#btn-cancel')
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar =document.querySelector('#dlg-cancelar')
    let handler   // la dec
    let backTime = document.querySelector('#back-time')
    let outRun = document.querySelector('#out-run')
    let btnPlay = document.querySelector('#btn-play')
    let outShow =  document.querySelector('#out-show')
    btnSalir.addEventListener('click', onClick)
    btnCancel.addEventListener('click', onClick2)
    btnPlay.addEventListener('click', run)
// no les paso eventono se por que ni como lo definiria
    function run(ev) { 
        let msj = 'Mis coches de ensueño:'
        outShow.textContent = msj
        let aCoches=[ 'Alfa Romeo, ','Lancia, ', 'Ferrari, ', 'BMW, ', 'Ford' ]
       
        /* setTimeout(()=>{

            for (let i = 0; i < aCoches.length; i++) {
            const item = aCoches[i];
          console.log(item)
          outRun.textContent += item
        }
        },2000)  */

        /*  setTimeout(()=>{
            aCoches.forEach(item => {
                outRun.textContent += item
            });
        },2000)  */
       /*    */
         
       
      
       
           let time=  setInterval(()=>{

                for (let i = 0; i < aCoches.length; i++) {
                let item = aCoches[i];
            
              outRun.textContent = item
            }
            },1500)

        setTimeout(time,1000)


       // outRun.textContent
        
    }


    function onClick(ev) {
        let url = 'https://github.com/'
        handler = setTimeout(() => {
            location.assign(url)
        }, 5000)
        let i = 5
        setInterval( () => {
            backTime.textContent = --i
        },1000)
        dlgCancelar.showModal()//para ver el dialogo
    
      
        //outSal.value = msj //solo vale para elementsOutputs
        //outSal.textContent = msj 
        //outSal.innerHTML = msj
    }
    function onClick2() {
        clearTimeout(handler)
        dlgCancelar.close() 
}
}