
export function app() {
    console.log('Cargada app')
    let urlPaises = 'https://restcountries.eu/rest/v2'
    let eur = '/region/europe'

   // Nodos del DOM
   let selecContinente = document.querySelector('#select')
   let europa = document.querySelector('#europa')
   let america = document.querySelector('#america')
   let africa = document.querySelector('#africa')
   let asia = document.querySelector('#asia')
   let oceania = document.querySelector('#oceania')

   let showPais = document.querySelector('#paises') 
   
   //manejadoras ev
   selecContinente.addEventListener('change', getDataTotal)
    /* europa.addEventListener('click', getDataTotal) */
   /*  america.addEventListener('click', getDataAmer)
    africa.addEventListener('click', getDataAfric)
    asia.addEventListener('click',getDataAsia)
    oceania.addEventListener('click',getDataOcea) */



function getDataTotal (){
    let secondPart = event.target.value
    let url = 'https://restcountries.eu/rest/v2/region/'
    let urlComplete = url+secondPart
    fetch(urlComplete)
    .then(response => {
        if(response.status == 200) {
            return response.json()
        } 
        throw(new Error(response.status))
    })
    .then( (data) => {
       data = data.map(item =>{
           return {
               pais : item.name
           } 
       }) 
    console.log(data) })    
}

/* function renderData(data) { //hay que usar find 
    let html = ''
    data.forEach(item => html += `
    <select name="Continentes" id="select" >
    <option value=""></option>
    <option value="Americas" id="1" >América</option>`;
    ulLibros.innerHTML = html

}  */

}
