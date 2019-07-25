
function app (){

let items = [ ]
    //existe un input que se llama #in-item
    //existe un #out 
            //Nodo 
let inItem = document.querySelector('#in-item')
let outItem = document.querySelector('#out')
item = inItem.value
    // asignar el manejador de eventos 
    inItem.addEventListener('change', addItem) // este enveto es darle a enter y tabulador  

function addItem(){
    items.push(inItem.value)
    render()

}
function render() {
let html = outItem.innerHTML// aqui creamos la ul y ahora hago un bucle y añando las cosas a la lista desdel bucle para 
html += '<ul>'
items.forEach( item => html += `<li> ${item} </li>`) //+= con mas igual añado al arry 

html += '</ul>'

}
}

