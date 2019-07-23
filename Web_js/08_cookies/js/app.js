import { setCookie, getCookie } from "../../07_cookies/js/cookies.js";

export function app() {
console.log('app runs')
        let aBtn = document.querySelectorAll('button')
        let out = document.querySelector('output')

        aBtn.forEach((btn) => { btn.addEventListener('click', onClick)});
}
        let numVisitas = getCookie('visitas', 0 ,5)
         if (numVisitas !== '') {
        setCookie('visitas', ++numVisitas, 5)
        }
function onClick(ev) {
        console.log(ev) //reviso el evento en F12 y busco propiedades para saber que empezado (iniciar) en otros casos me fijo en el id 
        switch (ev.target.textContent) {
                case 'Iniciar': console.log('iniciar')
                        out.value
                        setCookie('visitas', 0 , 5) //inicializar la cookie
                        break;
                case 'Vaciar':console.log('Vaciar')
                        getCookie('visitas',0,-1) //si le doy un tiemp anteriror la borro
                        break;
                case 'Mostrar':console.log('Mostrar')
                        out.value = numVisitas
                        break;
                case 'Recargar':console.log('Recargar')
                        location.reload() // esto recarga
                        break;
                
        }
}
 
