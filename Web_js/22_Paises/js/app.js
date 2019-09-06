
export function app() {
    console.log('Cargada app')
    let aPaises = []
    let oPaisActual = {}
   // Nodos del DOM
   let selecContinente = document.querySelector('#select')
   let showPais = document.querySelector('#selectPaises') 
   let continentes = document.querySelector('#continentes')
   let paisActual= []
   let showFlag = document.querySelector('.flag')
   let refresh = document.querySelector('#actualizar')
   //manejadoras ev
   selecContinente.addEventListener('change', getDataTotal)
   showPais.addEventListener('change',getPaisesInfo)
   refresh.addEventListener('click', onRefresh)

   function onRefresh (){
    location.reload(true)
   }
function  getDataTotal(){
    console.log(event.target.value)
     console.dir(continentes)
    switch (event.target.value) {
       
        case 'Americas':

            continentes.classList.add("ame")
            break;
            case 'Europe':
            continentes.classList.add("eur")
            break;
            case 'Asia':
            continentes.classList.add("asi")
            break;
            case 'Oceania':
            continentes.classList.add("oce")
            break;
            case 'Africa':
            continentes.classList.add("afr")
            break;
    
        default:
            
    }
    

    let firstUrl='https://restcountries.eu/rest/v2/region/'
    let seleccion = event.target.value
    let secondUrl='?fields=name;capital;currencies;subregion;population;area;flag;languages;'
    let url = firstUrl+ seleccion + secondUrl
    fetch(url)
    .then(response => {
        if(response.status == 200) {
            return response.json()
        } 
        throw(new Error(response.status))
    })
    .then( (data) => {
        console.log(data)
       aPaises = data.map(item =>{
           return {
               pais : item.name,
               capital: item.capital,
               subregion: item.subregion,
               poblacion: item.population,
               /* .map(ittem=>{return ittem.name}), */
               superficie: item.area,
               moneda: item.currencies.map(cash =>{
                   return cash.name  
               }),
               bandera: item.flag,
               idioma: item.languages.map(lang =>{
                   return lang.name
                   }
               ) , 
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
function renderFlag(){
    let html =`
    
    <img src="${oPaisActual.bandera}" alt="Bandera de ${oPaisActual.pais}" >
    `
    showFlag.innerHTML=html

}
function actualizarNodos() {
    console.log('nodos actualizados')
    //nodos
    paisActual = document.querySelector('.aqui')
     
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
    renderFlag()

     
}
function renderOpais(){
    let html = `
    
    <span class="title">Pais    </span>  <span class="info"> ${oPaisActual.pais}</span><br>
    <span class="title">Capital    </span>    <span class="info">  ${oPaisActual.capital}</span>  <br>
    <span class="title">Region    </span>   <span class="info">  ${oPaisActual.subregion}</span><br>
    <span class="title">Poblacion    </span>   <span class="info">  ${oPaisActual.poblacion}</span><br>
    <span class="title">Superficie    </span>   <span class="info">  ${oPaisActual.superficie}</span><br>
    <span class="title">Idioma    </span>   <span class="info">  ${oPaisActual.idioma}</span><br>
    <span class="title">Moneda    </span>    <span class="info">  ${oPaisActual.moneda[0]}</span><br>
    `
    
       ulInfo.innerHTML = html  
} 


}
