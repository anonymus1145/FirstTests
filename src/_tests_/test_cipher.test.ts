// 'requaireActual' ensures you get the real file insted of an automock
// also use import type and <type of.....> to still get the types
import type * as TestFunctions from '../index';

const { caesarCipher } = jest.requireActual<typeof TestFunctions>('../index.ts');

describe('Test cipher function', () => {
    it('Case 0', () => {
        const result = caesarCipher('hello', 5);
        expect(result).toBe('MJQQT');
    })
    it('Case 1', () => {
        const result = caesarCipher('delaalaz', 10);
        expect(result).toBe('NOVKKVKJ');
    })
    it('Case 2', () => {
        const result = caesarCipher('mergem, dupa mure.', 7);
        expect(result).toBe('TLYNLT, KBWH TBYL.');
    })
})