let multiplica= (x) => {
     if (isNaN(x)) {
      x = `error ${x} no es un numero correcto`
      return x
    }   return x*3
}

console.log(multiplica('p'))
console.log(multiplica('5'))
console.log(multiplica('8o'))

let st = ['hola','pepe','como','estas']

console.log(st.join(''))