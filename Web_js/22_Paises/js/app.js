
export function app() {
    console.log('Cargada app')
    // Url
    let firstUrl='https://restcountries.eu/rest/v2/region/'
    let secondUrl='?fields=name;capital;currencies;subregion;population;area;flag;languages;'

    let aPaises = []
    let oPaisActual = {}
    let paisActual= []
   // Nodos del DOM
   let selecContinente = document.querySelector('#select')
   let showPais = document.querySelector('#selectPaises') 
   let continentes = document.querySelector('#continentes')
   
   let showFlag = document.querySelector('.flag')
   let refresh = document.querySelector('#actualizar')
   //manejadoras ev
   selecContinente.addEventListener('change', getDataTotal)
   showPais.addEventListener('change',getPaisesInfo)
   refresh.addEventListener('click', onRefresh)



function  getDataTotal(){
    // console.log(event.target.value)
    switchGlobe()
    let seleccion = event.target.value
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
    //console.log(aPaises)
    renderPaises()
    

})}

/**
 * @description  
 *Función capaz de dectectar en que continente pulsamos y añada la case correspondiente a la imagen deseada
 * @param {event} 
 * @returns 
 */
function switchGlobe(){
    //console.dir(continentes)
    switch (event.target.value) {
       
        case 'Americas':

            continentes.classList.add("ame")
            break;
            case 'Europe':
            continentes.classList.add("eur")
            break;
            case 'Africa':
            continentes.classList.add("afr")
            break;
    

            case 'Asia':
            continentes.classList.add("asi")
            break;
            case 'Oceania':
            continentes.classList.add("oce")
            break;

            
        default:
            
    }
}

function onRefresh (){
    location.reload(true)
}

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
    //console.log('nodos actualizados')
    //nodos
    paisActual = document.querySelector('.aqui')
    // MAnejadores
    paisActual.addEventListener('change',getPaisesInfo) 
}

function getPaisesInfo(){
   //console.log(event.target.value) 
    //console.log(aPaises)
   oPaisActual = aPaises.find(item => item.pais === event.target.value) 
    //console.log(oPaisActual)
    renderOpais()
    renderFlag()     
}

function renderOpais(){
    let html = `
    
    <span class="title">Pais:    </span> 
     <span class="info"> ${oPaisActual.pais}</span><br>
    <span class="title">Capital:    </span>  
      <span class="info">  ${oPaisActual.capital}</span>  <br>
    <span class="title">Región:    </span>   
    <span class="info">  ${oPaisActual.subregion}</span><br>
    <span class="title">Población:    </span>   
    <span class="info">  ${oPaisActual.poblacion}</span><br>
    <span class="title">Superficie:    </span>   
    <span class="info">  ${oPaisActual.superficie}</span><br>
    <span class="title">Idioma:   </span>   
    <span class="info">  ${oPaisActual.idioma}</span><br>
    <span class="title">Moneda:    </span>    
    <span class="info">  ${oPaisActual.moneda[0]}</span><br>
    `
    ulInfo.innerHTML = html  
} 

}
