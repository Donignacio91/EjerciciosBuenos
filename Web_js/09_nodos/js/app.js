

export function app(){
    console.log('app runs')
    let btn = document.querySelector('#ss1')
    let out1 = document.querySelector('#s1')

    let btn1 = document.querySelector('#ss2')
    let out2 = document.querySelector('#s2')

    let btn2 = document.querySelector('#ss3')
    let out3 = document.querySelector('#s3')

    let btn3 = document.querySelector('#ss4')
    let out4 = document.querySelector('#s4')

    btn.addEventListener('click',vacile)
    btn1.addEventListener('click',vacile1)
    btn2.addEventListener('click',vacile2)
    btn3.addEventListener('click',vacile4)

    function vacile() {
        let text = `lo siento no tengo facebook` 
          out1.textContent = text
        
        
    }
    
    function vacile1() {
        let text = `lo siento no tengo  Twiter` 
        btn1.outerHTML = text} // escribo sobre lo que tenga y me lo cargo 
          
    function vacile2() {
        let text = `lo siento no tengo Instagram` 
          btn2.outerHTML = text}
          
    function vacile4() {
        let text = 'lo siento no tengo Na de NA'
          btn3.outerHTML = text}
       
    } 
    

    