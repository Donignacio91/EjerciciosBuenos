export function app() {
    console.log('Cargada app') 

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', calcularOffset)
    let header = document.querySelector('body>header')
    let divTop = document.querySelector('div.top')
    let aSections = document.querySelectorAll('section')
    let isSticky = false;

    let aOffsets = []
    calcularOffset()

    let aEnlaces = document.querySelectorAll('nav a')
    aEnlaces.forEach((enlace, i) => enlace.addEventListener(
        'click', (ev) => {onClickMenu(ev, i) } //funcion anonima si lo mando a una funcion como onclick no le puedo pasar parametros la fanonima hace de intermediaria y es la que ejecuta el sistema recibe el evento y llama on click menu y le paso el evento y en que posicion esta en mi array de enlaces  // es la forma para poder paserle a la funcion manejadora de enventos oclik leches dos parametros en este caso el i ç
        //cunado necesito que el manejador reciba barios parametros necito envolveros en una anomina

    ))

    function calcularOffset () {
        aOffsets = []
        aSections.forEach( 
        item => aOffsets.push(item.offsetTop)//offset top lo es una propiedad que lo tienen todos los elemntos del dom
        )
        console.dir(aOffsets)    
    }


    function onScroll(ev) {
        // console.log(ev)
        let y = ev.target.scrollingElement.scrollTop
        //console.log(y)
        if (y >= 40 && !isSticky) {
            header.classList.add('sticky')
            divTop.classList.add('top-sticky')
            header.firstChild.firstChild.classList.remove('logo') //el primer hijo dl primer hijo 
            isSticky = !isSticky
            calcularOffset()
        } else if (y < 40 && isSticky ) {
            header.classList.remove('sticky')
            divTop.classList.remove('top-sticky')
            header.firstChild.firstChild.classList.add('logo')
            calcularOffset()
            isSticky = !isSticky
        }
       spyScroll(y)
    }
  
    function spyScroll(scrollElement) { //la y de la funcionde arriba
     
        setActivo(aOffsets.length-1)
        for (let i = 0; i < aOffsets.length; i++) {
          if (scrollElement < aOffsets[i] -90) {
              setActivo(i-1)
              break
          }
        }
        /* aOffsets.some((item,i)=> { Lo mismo que arriba item es offset[1,2,3...]
            if (scrollElement < item -90 )
            setActivo(i-1)
            return true
        }) */

        /* aSections[0] LO mismo que antes 
       if (scrollElement <  aOffsets[1] +90) {
        setActivo(0)
       } else if (scrollElement <  aOffsets[2] -50) {
        setActivo(1)
       } else if (scrollElement <  aOffsets[3] -50) {
        setActivo(2)
        } else if (scrollElement <  aOffsets[4] -50) {
        setActivo(3)
    }else{
        setActivo(4)
    } */
    }

    function onClickMenu(ev, i) {
        ev.preventDefault() //quito el estado por defecto en este caso los enlaces del nav 'a' asi hago que no se comporte como enlace 
        console.log(aOffsets[i])
        window.scrollTo(0,aOffsets[i]-90)//el cero es el eje x lo otro es el eje y 
         // esta calculado a ojo el offset que es el nimerito del scroll para que al ir a ellos no se oculte 
         setActivo(i) //lo mismo 
         /* aEnlaces.forEach(enlace => 
            enlace.classList.remove('active')) 
            aEnlaces[i].classList.add('active') */ 
    }
    function setActivo(i) {
        aEnlaces.forEach(enlace => 
            enlace.classList.remove('active')) 
            aEnlaces[i].classList.add('active')
    }
//window.resize 
 }
