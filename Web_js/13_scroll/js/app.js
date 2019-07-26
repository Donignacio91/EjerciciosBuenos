export function app(){
    console.log('app runs')
    window.addEventListener('scroll',onScroll)
    let header = document.querySelector('header')// hijo directo
    let aSections = []
    document.querySelectorAll('section')
    let aTops = []
    let isSticky =  false
    calcularoffset()
    function calcularoffset(params) {
         aTops.forEach(
        element => {
       aTops.push(itemoffsetTop)
    });
    }
       /*  let aTops = sections.map(//map se paarece a dforeace pero me devuleve lo que le pido 
            item =>item.offsetTop
        ) */

       function  onScroll(ev){
        //console.log(ev)
        //console.log(ev.target.scrollingElement.scrollTop)
        let y = ev.target.scrollingElement.scrollTop
        if (y >= 150 || !isSticky) { //
            header.classList.add('sticky')
            isSticky = !isSticky //booleanizar una variable Invertirla 
            calcularoffset()

        }else if (y < 40 && isSticky ){
            //calcularoffset()
        }
        }


} 