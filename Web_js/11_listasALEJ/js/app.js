function app (){

        //existe un input que se llama #in-item
        //existe un #out 
                //Nodo 
//cuando arracamos la app preguntamos  
            // trae algo del storage y tiene una key como yo queira
            
        let items = [ ]  
            if(localStorage.getItem('item')){//esto pregunta si existe un item en el localstrage
                items=JSON.parse(localStorage.getItem('item')) //si no existe lo guardas  
            }//convierte algo que esta serializado en string y darel forma de objeto
   

  
    let inItem = document.querySelector('#in-item')
    let outItem = document.querySelector('#out-item')
    item = inItem.value
        // asignar el manejador de eventos 
        inItem.addEventListener('change', addItem) // este enveto es darle a enter y tabulador  
    
    function addItem(){
        items.push(inItem.value)
        localStorage.setItem('item', JSON.stringify(animales)
        )
        inItem.value =''
        render()
    
    }
    function render() {
    let html = outItem.innerHTML// aqui creamos la ul y ahora hago un bucle y añando las cosas a la lista desdel bucle para 
    html += '<ul>'
    items.forEach( item => html += `<li> ${item} </li>`) //+= con mas igual añado al arry 
    
    html += '</ul>'
    
    }
    }
    
    