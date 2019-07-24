export function app(){
    //console.log('app runs')

    let inn = document.querySelector('#inn')
    let btn = document.querySelector('#btn')
    let out = document.querySelector('#out')
    
    btn.addEventListener('click', onClick)
    

    
    function onClick() {
      
        let x = inn.value
        out.textContent = x
            localStorage.setItem("jota", 0)
    }

} 
