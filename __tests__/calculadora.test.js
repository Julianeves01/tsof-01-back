import { somar, subtrair } from '../src/calculadora.js';

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

    test('Deve subtrair dois números corretamente', () => {
        /// Arrange (preparar)
        const a = 10;
        const b = 5;

        // Act (executar)
        const resultado = subtrair(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5);
    });
});
