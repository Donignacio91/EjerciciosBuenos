

export function app() {
  console.log('Cargada app') 

  function pruebas () {
          class Lista extends Array {}

      let x = new Lista()
      console.dir(x)
      let nodo = document.querySelector('#nodos')
      console.dir(nodo instanceof Element)
      console.dir(nodo instanceof HTMLElement)
      console.dir(nodo.children)
      console.dir(nodo.children instanceof HTMLCollection)
      console.dir(nodo.children instanceof Array)
      console.dir(nodo.childNodes)
      console.dir(nodo.childNodes instanceof NodeList)
      console.dir(nodo.childNodes instanceof Array)
      let item = nodo.children[1].children[0]
      let item2 = document.querySelector('#saludo')

      console.dir()    
  }

  // Nodos
  let aEnlaces = document.querySelectorAll('.social a')
  let lista = document.querySelector('.social ul')
  let counter = 0

  // Asignación de manejadores
  aEnlaces
      .forEach(enlace => enlace
          .addEventListener('click', onClickEnlace))

  // Funciones

  function onClickEnlace(ev) {
      if (counter < 3) {
          ev.target.parentElement.outerHTML="Ops!! "
          console.log(++counter)         
      } else {
      /*  ev.target.parentElement
          .parentElement.parentElement.outerHTML = 
                  '<p>Opps!!. No existo</p>'    */
          lista.outerHTML = '<p>Opps!!. No existo</p>'
      }
  }

{

  document.getElementsByTagName('p')
  document.querySelectorAll('p')

  document.getElementsByName('user')
  document.querySelectorAll('[name="user"]')

  document.getElementsByClassName('clase1')
  document.querySelectorAll('.clase1')

  document.getElementById('id1')
  document.querySelector('#id1')

  /* document.getElementsByTagNameNS */
}
// Creacion de Nodos
{
  let origen = document.querySelector('.addNodos div')
  let msj = '<p>ojo cuidado creado desde js </p> '
  origen.innerHTML= msj

  let html = document.createElement('p')  //otra forma de crar un p en html hago una variable igual al crate element de la etiqueta que yo quiera 
  let content = document.createTextNode('ojo cuidado creado desde js con nodo ')
  html.appendChild(content)
  origen.appendChild(html)

  let aside = document.createElement('aside')
  aside.innerHTML= '<h2> Más info </h2>'

  aside.innerHTML += '<p> Aquí val al info </p>' // el mas igual es para no cargarme el mas infoi de antes
origen.appendChild(asdie) // lo coloco donde queira 

}

}