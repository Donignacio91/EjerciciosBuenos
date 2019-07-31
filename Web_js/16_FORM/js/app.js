export function app(){
    console.log('app runs')
let oDatos = {
        userName:'',
        userPasswd:'',
        email:'',
        dni:'',
        cv:'',
        birthDate:'',
        info:'',
        isOk:'on',
        curso:'',
        sitio:'',
      }
     
    //nodos del dom
   let form = document.querySelector('[name="complete-post"]') //los corches seeciona cualquier atributo en este caso name vale para culquiera
   let aFormData = document.querySelectorAll('.form-data') //los cojo por separado que juntos no valen para ndad 
   let aCheck = document.querySelectorAll('[type="checkbox"]')
   let aSElects = document.querySelectorAll('select')
   let aRadioSitio = document.querySelectorAll('[name="sitio"]') //o tiene  value
   let btnReset = document.querySelectorAll('#btn-resert')
   let dlgConfirm = document.querySelector('#dlgConfir')
   let aDlgBtn = document.querySelectorAll('dlgConfir button')


    // definir manejadores
    form.addEventListener('submit', onSubmit) //evnto que dispara el boton submit del formulario el que inicia el evento del form 
    btnReset.addEventListener('click', onReset)
    aDlgBtn.forEach(btn => btn.addEventListener('click', onClickDlg))

    //funciones manejadoras 
    function onSubmit(ev) {
        ev.preventDefault()
        console.log('starteando submit')
        aFormData.forEach(item => oDatos[item.name] = //como los nombres del objeto son iguales le digo que lo rellene
                                item.value)

        aCheck.forEach(item => oDatos[item.name] = // los checks no tiene value tienen checked 
                    item.checked)
        aSElects.forEach(item => oDatos[item.name] =// los selects si tiene value pero no siempre es lo valido para usarlos 
                     item.value)

        oDatos.sitio = getRadio(aRadioSitio)//
        console.log(oDatos)
        renderModal()//es quien va a pasar el contenido
     
            
        }
    
 /* function onReset(ev) {
    
    } */
    function getRadio (aNodos){ //los radios vienen juntos todos por el name los busco y compruebo el atributo cheked y si es tru veo el value solo el true es el selecionado
        for (let i = 0; i < aNodos.length; i++) {
            const item = aNodos[i];
            if (item.checked === true) {
               return item.value 
            }
        }
    }
    function renderModal (){
        let html=''
        for (const key in oDatos) {
                const value = oDatos[key];
                if (key === 'userPasswd') {
                    html +=`<li>
                ${key} ---> ************
                </li>`
                } else {
                     html +=`<li>
                ${key} ---> ${value}
                </li>`
                }
               
            }
            dlgConfirm.children[1].innerHTML = html
            dlgConfirm.showModal()
    }
    function  onClickDlg(ev) {
        if (ev.target.textContent.toLowerCase() === 'si') {
            form.submit() //antes lo he retrasado para sacar el modal 
        }dlgConfirm.close()
    }

} 