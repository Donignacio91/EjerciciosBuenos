const Factorial = require('../01_factorial.js')

describe('El factorial de un número (factorial) ', () => {
    it('should be run method renderizar'),() => {
        let f = new Factorial(0) //instancio
        spyOn(f, 'renderizar') // le digo al spy que tiene que espiar
        f.renderizar() // lo llamo 
        expect(f.renderizar).toHaveBeenCalled() //y le digo que espero que ese metodo ha sido llamdado
        }
        it('should be run private method of constructor'),() => {
           
            spyOn(Factorial.prototype, 'calcular') // le digo al spy que tiene que espiar ene ste caso al ser privates estan dentro del proto
            spyOn(Factorial.prototype, 'preparar')  // le digo al spy que tiene que espiar
             let f = new Factorial(0) //instancio
           
            expect(f.renderizar).toHaveBeenCalled() //y le digo que espero que ese metodo ha sido llamdado
            expect(f.preparar).toHaveBeenCalled()//toHaveBeenCalledtimes(2)por sio lo llmo n veces 
            expect(f.calcular).toHaveBeenCalled()
            }


        it('0! should be 1', () => {
        let f = new Factorial(0) 
        expect( f.factorial ).toBe(1)
    })

    it('1! should be 1', () => {
        let f = new Factorial(1)
        expect( f.factorial ).toBe(1)
    })

    it('2! should be 2', () => {
        let f = new Factorial(2)
        expect( f.factorial).toBe(2)
    })

    it('5! should be 120', () => {
        let f = new Factorial(5)
        expect( f.factorial ).toBe(120)
    })

    it('should throw error if n = 4.3', () =>  {
        let n = 4.3
        expect( (() => {
            new Factorial().bind(null, n)
        })()
        ).toThrowError(/entero/);
    });

    it('should throw error if n = -5', () => {
        let f = new Factorial(1)
        f.n = -5
        expect(f._preparar().bind(null, -5))
            .toThrowError(/negativo/)
    });

/* 
    const aErrores = ["pepe", true, false, [], {}, NaN, null, '']
     
    aErrores.forEach( (item, i) => {
        it(`should throw error with no numbers (${i}): ${item}`, () => {
            expect(factorial.bind(null, item))
            .toThrowError(/no es un número/);
        }); 
    })
 */
