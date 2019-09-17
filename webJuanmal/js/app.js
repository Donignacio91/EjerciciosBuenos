export function app(){
    console.log('app runs')
    //Nodos
    let enlaz = document.querySelector('.redirec')

    //Manejadores
    enlaz.addEventListener('mousemove', onEnlaz)
    enlaz.addEventListener('click', onClick)

    //funciones 
   function  onEnlaz(ev){ 
       enlaz.classList.add("cursor")
    }
    function onClick(ev) {
        console.log(ev)
        window.location="https://www.google.es/maps/place/EB+Racing/@40.5325473,-3.4865579,18.25z/data=!4m5!3m4!1s0xd423465a6cfd643:0x8d41b48a04615d85!8m2!3d40.532641!4d-3.4861538";
    }
} 