let cosas = [
 
    {
      'Tareas'     : 'sacar al perrete',
      'duración' : 30,
      'donde': 'calle'
    },
    {
      'Tareas'     : 'estudiar',
      'duración' : 120,
      'donde': 'cuarto'
    },
    {
      'Tareas'     : 'limpiar casa',
      'duración' : 60,
      'donde': 'casa'
    } 
  ];
console.log(cosas.map((cosas)=>{return cosas.Tareas}))
 //[ 'sacar al perrete', 'estudiar', 'limpiar casa' ]

console.log('1º /////////////////')

console.log(cosas.map((cosas)=>{return cosas.Tareas + ' ' +
cosas.donde}))
 /* [ 'sacar al perrete calle',
  'estudiar cuarto',
  'limpiar casa casa' ] */

 console.log('2º/////////////////')

 console.log(cosas.map((cosas)=>{return {Accion: cosas.Tareas,
    Lugar: cosas.donde}}))
    //[ { Accion: 'sacar al perrete', Lugar: 'calle' }, { Accion: 'estudiar', Lugar: 'cuarto' }, { Accion: 'limpiar casa', Lugar: 'casa' } ]

 console.log('3º/////////////////')
 console.log(cosas.map((cosas)=>{return cosas.duración}))

    console.log('4º/////////////////')