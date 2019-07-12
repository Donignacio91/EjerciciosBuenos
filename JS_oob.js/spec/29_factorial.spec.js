

let f = require('../29_factorial.js');



describe('factorial', () => {
    it('should be true', () => {
        expect(f.isPali('Ali tomo tila')).toBeTruthy
    });
    it('should be false', () => {
        expect(f.isPali('Hola')).toBeFalsy
    });
});