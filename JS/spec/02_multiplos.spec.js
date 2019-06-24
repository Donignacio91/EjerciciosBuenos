const f = require('../02_multiplos.js') //para importar


describe('Prueba f.isMultiplo', () => {
    it('should be true f.isMultiplo(2,20)', () => {
        expect(f.isMultiplo(20),2).toBeTruthy() ;
    });
    
    it('should be false f.isMultiplo(2,20)', () => {
         expect(f.isMultiplo(-21,2)).toBeFalsy ();
    });
    it('should be false f.isMultiplo(2,21)', () => {
        expect(f.isMultiplo(21,2)).toBeFalsy();
     });
    it('should be false f.isMultiplo(2,20)', () => {
          expect(f.isMultiplo(23,2)).toBeFalsy();
    });
    it('should be error f.isMultiplo(pepe,2)', () => {
        expect(f.isMultiplo('pepe',23)).toThrow() ;
    });
    it('should be error f.isMultiplo(pepe,2)', () => {
    expect(f.isMultiplo(23,'pepe')).toThrow() ;
    });
    it('should be false f.isMultiplo(2.5,21.5)', () => {
        expect(f.isMultiplo(20.5,2.5)).toBeFalsy();
     });
     it('should be true f.isMultiplo(2.5,5)',() => {
        expect(f.isMultiplo(5,2.5)).toBeTruthy() ;
    });


});

 describe('Prueba extraerMultiplo', () => {
    it('should be retur an array', () => {
        expect (Array.isArray(f.extraerMultiplos())).toBeTruthy(); //comprobacion de array
    }); 
    it('should be retur an array', () => {
       const aDatos = [ 1,2,3,4,5,6,7,8,9]
       const n = 2
      expect(f.extraerMultiplos (n, aDatos)).toEqual([2,4,6,8])
    }); 
    it('should be retur an array', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n = 3
       expect(f.extraerMultiplos (n, aDatos)).toEqual([3,6,9])
     }); 
}); 

/* //Espectativa
console.log('isMultiplo(2,20)) debe dar true')
//Prueba
console.log(isMultiplo(2,20))

//Espectativa
console.log('isMultiplo(20,2) debe dar false')
//Prueba
console.log(isMultiplo(20,2))

//Espectativa
console.log('isMultiplo(2,21) debe dar false')
//Prueba
console.log(isMultiplo(2,21))

//Espectativa
console.log('isMultiplo(3,23) debe dar false')
//Prueba
console.log(isMultiplo(3,23))

//Espectativa
console.log('isMultiplo(2,-21) debe dar true')
//Prueba
console.log(isMultiplo(3,-21))
 */