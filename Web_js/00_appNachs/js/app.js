export function app(){

    console.log('app runs')


                    //NODOS
    //header fixed
    let header = document.querySelector('body>header')
    let divTop = document.querySelector('div.top')

   
    //app1
    let aBtn = document.querySelectorAll('.btn')
    let out1 = document.querySelector('.outApp1')
    let area = document.querySelector('.stst')
    let btnR = document.querySelector('#btnR')
    
    //App2
    let aPreguntas =  document.querySelectorAll('.pregunta')
    let aResponse = document.querySelectorAll('.respuesta')
    let aCloss = document.querySelectorAll('.close')



                     // MANEJADORES EVENTOS
    //header fixed 
    window.addEventListener('scroll', onScroll) 
        // Fijar el scroll 1 AÑADO TODA LA WINDOW A UN EVETO SCROLL 
    //App1
    aBtn.forEach(btn =>btn.addEventListener(
        'click', onClick1));
    area.addEventListener('mouseenter', areaZone)
    area.addEventListener('mouseleave', areaZone2)
    btnR.addEventListener('click',reset)

    //app2
    aPreguntas.forEach(pregunta =>pregunta.addEventListener(
        'click',quest ));
        aCloss.forEach(closs =>closs.addEventListener(
            'click', cerrar));
       


    //Funciones

    function onScroll(ev) {
        let moveScroll = ev.target.scrollingElement.scrollTop //  moveScroll PASARA A SER MI VARIABLE IMPORTANTE 
       // 2  console.dir(ev.target) // 2 MIRO POR CONSOLA EL OBJETO DEL EVENTO SCROLL PARA DE ESTA MANERA VER ALGO QUE LO HAGA CARACTERISTICO EN ESTE CASO ME FIJO EN ALGUN ATRIBUTO DEL OBJETO SCROLL QUE ME DIGA EN QUE POSICION ESTA CON RESPECTO AL ALTO DE LA WINDOW EN ESTE CASO scrollingElement.scrollTop (VISTO EN F12)
       if (moveScroll >= 180) {/* 3 una vez tengo la forma de establecer donde estoy en funcion del scroll
        con un if normal le digo que si la position scroll es mayor de 180   */
        header.classList.add('sticky')//Añade class sticky al header me refiero a los nodos iniciado arriba que ya son mis variables no puedo tocar el html
        divTop.classList.add('top-sticky')//Añade class sticky al divTop este div ocupará en vacio el espacio de header contraido por la clas stiki
        //isSticky = !isSticky    //booleanizar una variable Invertirla 
    }else if (moveScroll < 180  ){// y si es menor que la quite
        header.classList.remove('sticky')
            divTop.classList.remove('top-sticky')}
    }
    function onClick1(ev){
       /*  console.dir(ev.target.id) */
       out1.textContent = 'Indique su posicion de llegada'
        switch (ev.target.id) {
            case 'btn1' :
                out1.textContent = 'Enhorabuena has llegado 1° '
                break;
                case 'btn2':
                    out1.textContent = 'Enhorabuena has llegado 2° '
                    break;
                    case 'btn3' :
                        out1.textContent = 'Enhorabuena has llegado 3° '
                        break;
                        case 'btn0' :
                        out1.textContent = 'Has de ponerte las pilas LOOSER '
                        break;
        }
    }
   
function areaZone() {
    out1.textContent = 'Indique su posicion de llegada'
    area.classList.add('bordes')
    out1.classList.add('gold')

}
function areaZone2() {
    out1.classList.remove('gold')
    area.classList.toggle('bordes')

}
function reset(){

    out1.textContent= '¿?'
}
function quest(ev) {
    aResponse.forEach(res => res.classList.add('oculto')) //no entiendo bien esta parte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //console.dir(ev.target.nextElementSibling)
    ev.target.nextElementSibling.classList.toggle('oculto')
}
function cerrar(ev) {
    ev.target.nextElementSibling.classList.add('oculto') // Meda mucho error pero me lo permire el cerrar con la crucecita
    ev.target.previusElementSibling.classList.add('oculto')
}



} 