
let {prueba} = require('../src/controllers/puerba-test');

test(
    'prueba de test', () => {
        let x = prueba();
        expect(x).toBe('corrtecto');
    }
)