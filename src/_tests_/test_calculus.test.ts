// 'requaireActual' ensures you get the real file insted of an automock
// also use import type and <type of.....> to still get the types
import type * as TestFunctions from '../index';

const { calculus } = jest.requireActual<typeof TestFunctions>('../index.ts');

describe('Test calculator function', () => {
    it('Case 0', () => {
        const result = calculus.add(1, 2);
        expect(result).toBe(3);
    })
    it('Case 1', () => {
        const result = calculus.subtract(5, 2);
        expect(result).toBe(3);
    })
    it('Case 2', () => {
        const result = calculus.multiply(5, 2);
        expect(result).toBe(10);
    })
    it('Case 3', () => {
        const result = calculus.divide(5, 2);
        expect(result).toBe(2.5);
    })
})