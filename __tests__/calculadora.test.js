import { somar } from '../src/calculadora.js';

describe('Calculadora', () => {
    test('Deve somar dois números corretamente', () => {
        /// A A A
        /// Arrange (preparar)
        const a = 5;
        const b = 10;
        
        // Act (executar)
        const resultado = somar(a, b);

        //Assert (Verificar)
        expect(resultado).toBe(15);
    });
});
