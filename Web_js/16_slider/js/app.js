export function app(){
    console.log('app runs')
    //console.log(TE MUESTRA EL ELEMNTO HTML )
    //CONSOLE.DIR (tE muestra el objeto del nodo DE ESE ELEMNTO )
    //crear un input desde js
    // y añadirlo en oForm 'seria una variable que corresponde al nodo documente.query selector' 
    //como sting:
    oForm = document.querySelector('.oFomr')
    let inText=`
    <input type="text"
    class= "cl1
     name="in-data"
      id="in-data"
      placeholder="dime lo que sea"
      require>
    `
    oForm.innerHTML = inText //asi lo engancho cuando es texto


    //opcion 2 
    //hacerlo como nodo

    let inNodo = document.createElement('input') //me devuelve un nodo que aun no esta enganchado  
    //1º parametro que etiquetea/elemto quiero royo section , p, div, input,
    inNodo.className = 'cl1'
    inNodo.id ='in-data2' //esta y la de debajo hacen lo mismo 
    inNodo.setAttribute('name','indata2') //dos parametros nombre y valor del atributo
     //aqui me puedo inventar el atributo añadiendo el name que me de la gana 
     inNodo.required = true
    oForm.appenChild(inNodo)

    //mezcla de ambos
    let inNodo2 = document.createAttribute('input')
    inNodo2.innerHTML =`type="text"
    class= "cl1
     name="in-data"
      id="in-data"
      placeholder="dime lo que sea"
      require
    `
} 