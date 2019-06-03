import {} from ''

describe('Pruebas de números pares', ()=>{
    let isPar = required('../19-pares.js')

    it('should be "par" if n = 0', () => {    
    n = 0;
    expect(isPar(n)).toContain(true)
})
    
    it('should be "impar" if n = 1', () => {    
    n = 1;
    expect(isPar(n)).toContain(false)
    
})
    it('should be "par" if n = 2', () => {    
    n = 2;
    expect(isPar(n)).toContain(true)
})
it('should be "par" if n = string "22" 2', () => {  
    n = 22
    expect(isPar(n)).toContain(true)
 }) 
 it('should be "impar" if n = 23', () => {    
    n = 23;
expect(isPar(n)).toContain(false)
})
it('should be "impar" if n = 23', () => {    
    n = 23;
expect(isPar(n)).toContain(false)
})  
    n = 2;
    n = 859;
    n = 0;
    n = 59;
    n = -5;
    n = 2;
    n = 'pepe';
    n = -96.5;
    n = '59';
})