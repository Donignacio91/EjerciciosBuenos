
export function app() {
    console.log('Cargada app')
    let aPaises = []
    let oPaisActual = {}
   // Nodos del DOM
   let selecContinente = document.querySelector('#select')
   let showPais = document.querySelector('#selectPaises') 
   let paisActual= []
   
   //manejadoras ev
   selecContinente.addEventListener('change', getDataTotal)
   showPais.addEventListener('change',getPaisesInfo)

function  getDataTotal(){
    console.log(event.target.value)
    let firstUrl='https://restcountries.eu/rest/v2/region/'
    let seleccion = event.target.value
    let secondUrl='?fields=name;capital;currencies;subregion;population;area;flag;languages%27'
    let url = firstUrl+ seleccion + secondUrl
    fetch(url)
    .then(response => {
        if(response.status == 200) {
            return response.json()
        } 
        throw(new Error(response.status))
    })
    .then( (data) => {
       aPaises = data.map(item =>{
           return {
               pais : item.name,
               capital: item.capital,
               subregion: item.subregion,
               poblacion: item.population,
               idioma: item.currencies.name,
               superficie: item.area,
               moneda: item.currencies.name,
               bandera: item.flag
           } 
       }) 
    console.log(aPaises)
    
    renderPaises()

    

})}

function renderPaises() {
    let html = ''
    aPaises.forEach(item => html +=`
    <option class="aqui" value="${item.pais}">${item.pais}</option>`)
         showPais.innerHTML = html
         actualizarNodos()
}

function actualizarNodos() {
    console.log('nodos actualizados')
    //nodos
    paisActual = document.querySelector('.aqui')
    let ulInfo = document.querySelector('#ulIfo') 
    // MAnejadores
    paisActual.addEventListener('change',getPaisesInfo)
        
}
function getPaisesInfo(){
   
    console.log('pepe')
   
    console.log(event.target.value) 
    console.log(aPaises)
   oPaisActual = aPaises.find(item => item.pais === event.target.value)
    
    console.log(oPaisActual)
    renderOpais()

     
}
function renderOpais(){
    let html = `
    <h3>Pais</h3>
    <span>Pais</span>
    <li> ${oPaisActual.pais}</li>
    <h3>Capital</h3>
    <li>  ${oPaisActual.capital}</li>
    <h3>Region</h3>
    <li>  ${oPaisActual.subregion}</li>
    <h3>Poblacion</h3>
    <li>  ${oPaisActual.poblacion}</li>
    <h3>Superficie</h3>
    <li>  ${oPaisActual.superficie}</li>
    <h3>Idioma</h3>
    <li>  ${oPaisActual.idioma}</li>
    `
    
       ulInfo.innerHTML = html  
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
