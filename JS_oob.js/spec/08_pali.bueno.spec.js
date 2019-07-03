let f = require('../08_pali.bueno.js')

describe('Ejercicio Palíndromo', () => {
    it('should be true', () => {
        expect(f.isPali('Ali tomo tila')).toBeTruthy
    });
    it('should be false', () => {
        expect(f.isPali('Hola')).toBeFalsy
    });
});