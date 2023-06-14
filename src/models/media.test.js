const Nota = require('./nota')
const nota = new Nota();

describe('Testando a média', () => {

    test('Teste SS', () => {
        expect(nota.mediaCA(9)).toBe('SS - Superior')
    })

    test('Teste SS - 2', () => {
        expect(nota.mediaCA(9.3)).toBe('SS - Superior')
    })
    test('Teste MM', () => {
        expect(nota.mediaCA(3)).toBe('MM - Médio')
    })

    test('Teste MM - 2', () => {
        expect(nota.mediaCA(7.8)).toBe('MM - Médio')
    })

    test('Teste MM - 3', () => {
        expect(nota.mediaCA(2.7)).toBe('MM - Médio')
    })

    test('Teste MI', () => {
        expect(nota.mediaCA(3.5)).toBe('MI - Médio Inferior')
    })

    test('Teste II', () => {
        expect(nota.mediaCA(6.2)).toBe('II - Inferior')
    }) 

    test('Teste nota inválida', () => {
        expect(nota.mediaCA(23)).toBe('Nota inválida')
    }) 

})