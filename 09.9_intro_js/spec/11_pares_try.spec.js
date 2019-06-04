
describe('Función isPar', () => {
    let f = require('../11_pares_try.js')
    
    it('should be "par" if n = 0 ', () => {
        let n = 0
        expect(f.isPar(n)).to
    })

    it('should be "impar" if n = 1 ', () => {
        let n = 1
        expect(f.isPar(n)).toEqual(false)
    })

    it('should be "par" if n = 2 ', () => {
        let n = 2
        expect(f.isPar(n)).toEqual(true)
    })

    it('should be "impar" if n = string "11" ', () => {
        let n = '23'
        expect(f.isPar(n)).toEqual(false)
    })    

    it('should be "par" if n = string "22" ', () => {
        let n = '22'
        expect(f.isPar(n)).toEqual(true)
    })

    it('should be "impar" if n = -5 ', () => {
        let n = -5
        expect(f.isPar(n)).toEqual(false)
    })    

    it('should be "par" if n = -4 ', () => {
        let n = -4
        expect(f.isPar(n)).toEqual(true)
    })

    it('should throw error if n = "pepe"', () => {
        let x = 'pepe'
        expect(f.isPar.bind(null , x)).toThrowError(/no es un número/); /*
        Aqui el bind se usa cuando le pasa un parametro incorrecto si solo pongo (al no ser valido ni lo coge como quiero que me devuelva un menasje diciendo que tal lo pongo con bind)
        Va a lazanr un error .toThrowError (/xxxx/)*/
    });

    it('should throw error if n = 4.3', () =>  {
        let n = 4.3
        expect(f.isPar.bind(null , n))
        .toThrowError(/no es entero/);
    });
    
    // x = -56.7

})