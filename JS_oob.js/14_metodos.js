
const o = {
    id: 123,
    nombre: 'pepe',
    mostrarId: function(o){
    console.log(this.id)},
    edad: 34,
    conocidos: ['juan', 'nacho', 'raul', 'lola' ],
    saludar : function (otro = 'amigo') { 
        if (this._IsConocidos(otro)) {
            console.log(`hola ${otro} como estas`)
        } else (
            console.log(`hola ${otro} quien tu eres`)
        )
    console.log(`hola ${otro} soy ${this.nombre}`)}, 
    _IsConocidos: function (otro) {
          return this.conocidos.some(item => item.toLocaleLowerCase() === otro.toLocaleLowerCase()) 
}
}

o.mostrarId()
o.saludar('pepi')
//console.log(o._IsConocidos('manolo'))