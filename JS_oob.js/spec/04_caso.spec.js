let f = require('../04_caso');

describe('funcion comprobarCadena ', () => {
    
    it('should be 0 if all mayus' , () => {
        expect(f.comprobarCadena('HOLA AMIGO')).toEqual(0); 
    });

    it('should be 1 if all minus' , () => {
        expect(f.comprobarCadena('hola amigo')).toEqual(1); 
    });

    it('should be 2 if mayus & minus' , () => {
        expect(f.comprobarCadena('HOla Amigo')).toEqual(2); 
    });
}); 

describe('funcion mostrarComprobacionCadena ', () => {
    
    it('should be "solo mayusculas" if all mayus' , () => {
        const cadena = 'HOLA PEPE'
        console.log = jasmine.createSpy("log") // crea un spy funcion que se queda a la espera de que la funcion que yo quiero se utilice 
        f.mostrarComprobacionCadena(cadena)
        expect(console.log).toHaveBeenCalledWith('solo mayusculas') // al ver el console log salta el spy  esto dice espero que haya habiado un consolelog con el parametro solo mayusculas para comprobar que el retorno es bueno
    });
    it('should be "solo minusculas" if mezcla' , () => {
        const cadena = 'hola pepe '
        console.log = jasmine.createSpy("log") // crea un spy funcion que se queda a la espera de que la funcion que yo quiero se utilice 
        f.mostrarComprobacionCadena(cadena)
        expect(console.log).toHaveBeenCalledWith('solo minusculas') // al ver el console log salta el spy  esto dice espero que haya habiado un consolelog con el parametro solo mayusculas para comprobar que el retorno es bueno
    });
    it('should be "mezcla de ambas" if all mixed' , () => {
        const cadena = 'hola PEpe '
        console.log = jasmine.createSpy("log") // crea un spy funcion que se queda a la espera de que la funcion que yo quiero se utilice 
        f.mostrarComprobacionCadena(cadena)
        expect(console.log).toHaveBeenCalledWith('mezcla de ambas') // al ver el console log salta el spy  esto dice espero que haya habiado un consolelog con el parametro solo mayusculas para comprobar que el retorno es bueno
    });
}); 