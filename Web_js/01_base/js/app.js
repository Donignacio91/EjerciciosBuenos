/* export function app(){
    console.log('app runs')
      //NODOS
    //header fixed
    let header = document.querySelector('.inicio')
    let divTop = document.querySelector('div.top') 
     // MANEJADORES EVENTOS
    //header fixed 
    window.addEventListener('scroll', onScroll) 
    
    function onScroll(ev) {
        let moveScroll = ev.target.scrollingElement.scrollTop //  moveScroll PASARA A SER MI VARIABLE IMPORTANTE 
      console.dir(ev.target) // 2 MIRO POR CONSOLA EL OBJETO DEL EVENTO SCROLL PARA DE ESTA MANERA VER ALGO QUE LO HAGA CARACTERISTICO EN ESTE CASO ME FIJO EN ALGUN ATRIBUTO DEL OBJETO SCROLL QUE ME DIGA EN QUE POSICION ESTA CON RESPECTO AL ALTO DE LA WINDOW EN ESTE CASO scrollingElement.scrollTop (VISTO EN F12)
       if (moveScroll >= 180) {/* 3 una vez tengo la forma de establecer donde estoy en funcion del scroll
        con un if normal le digo que si la position scroll es mayor de 180   */ /*
        header.classList.add('sticky')//Añade class sticky al header me refiero a los nodos iniciado arriba que ya son mis variables no puedo tocar el html
        divTop.classList.add('top-sticky')//Añade class sticky al divTop este div ocupará en vacio el espacio de header contraido por la clas stiki
        //isSticky = !isSticky    //booleanizar una variable Invertirla 
    }else if (moveScroll < 180  ){// y si es menor que la quite
        header.classList.remove('sticky')
            divTop.classList.remove('top-sticky')}
    }

}  */