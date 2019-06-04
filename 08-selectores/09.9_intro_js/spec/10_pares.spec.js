




describe('Función isEntero', () => {
    let f = require('../10_pares.js')   /* necesario para importat let algo 0 a require (./) y pongo donde esta la funcion a la cual antes le he dicho exports.esPar = esPar */
   
    it('should be true if n is 2', () => {
        let n = 2
        expect(f.isEntero(n)).toBeTrulhy() 
    });
    it('should be false if n is 2.2', () => {
        let n = 2.2
        expect(f.isEntero(n)).toBeFalsy()
    });
    it('should be false if n is -2', () => {
        let n = -2
        expect(f.isEntero(n)).toBeTrulhy() 
    });
    it('should be false if n is -2.2', () => {
        let n = -2.2
        expect(f.isEntero(n)).toBeFalsy() 
    });
    it('should be true if n is 0', () => {
        let n = 0
        expect(f.isEntero(n)).toBeTrulhy() 
    });
    it('should be true if n is "2"', () => {
        let n = '2'
        expect(f.isEntero(n)).toBeTrulhy() 
    });
    
});


describe('Función isPar', () => {

    let f =require('../10_pares.js');

    it('should be true if n=0', () => {
        let n = 0 
       
    });
    
    it('should be false if n=1', () => {
        let n = 1
        expect(f.isPar(n)).toBeFalsy()
    });

    it('should be true if n=2', () => {
        let n = 2
        expect(f.isPar(n)).toBeTrulhy()
    });

    it('should be false if n="11"', () => {
        let n = 11
        expect(f.isPar(n)).toBeFalsy()

    });

    it('should be true if n="22"', () => {
        let n = 22
        expect(f.isPar(n)).toBeTrulhy() /*Es lo mismo*/ 
    });

    it('should be true if n=-4', () => {
        let n = -2
        expect(f.isPar.bind(n)).toBeTrulhy() /*ES lo mismo*/
    });

    it('should be -2 if n="pepe', () => {
        let n ='pepe'
        expect(f.isPar(n)).toEqual(-2)
    });

    it('should be -1 if n=4.4', () => {
        let n = 4.4
        expect(f.isPar(n)).toBeEqual(-1)
    });

});