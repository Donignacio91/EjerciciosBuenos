const f = require('../03_calculos.js')


describe('Prueba f.sumar', () => {
const aErrores = ['pepe', true , undefined, null, [], {} ];


    it('should be 22 if sumar 20 + 2' , () => {
        expect(f.sumar(2,20)).toEqual(22); 
    });
    it('should be 18 if sumar 20 + (-2)' , () => {
        expect(f.sumar(-2,20)).toEqual(18); 
    });
    it('should be 1 if sumar 1' , () => {
        expect(f.sumar(1)).toEqual(1); 
    });
    it('should be 0 ' , () => {
        expect(f.sumar()).toEqual(0); 
    });
    it('should be 20.5 if sumar 20 + 0.5' , () => {
        expect(f.sumar(20,0.5)).toEqual(20.5); 
    });
    it('should be 20.5 if sumar 20 + 0.5' , () => {
        expect(f.sumar(20,'5')).toEqual(25); 
    
    });
    it('should be error if sumar 20 + "pepe"' , () => {
        expect(() => f.sumar(20,'pepe')).toThrowError()
    });
    
    for (let i = 0; i < aErrores.length; i++) {
        const item = aErrores[i];
    it(`should be error ${item}` , () => {
        expect(() => f.sumar(20,item)).toThrow()
    
    });}

    

});
