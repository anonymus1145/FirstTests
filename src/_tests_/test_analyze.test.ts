// 'requaireActual' ensures you get the real file insted of an automock
// also use import type and <type of.....> to still get the types
import type * as TestFunctions from '../index';

const { analyzeArray } = jest.requireActual<typeof TestFunctions>('../index.ts');

describe('Test calculator function', () => {
    it('Case 0', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result.average).toBe(4);
        expect(result.min).toBe(1);
        expect(result.max).toBe(8);
        expect(result.length).toBe(6);
    })
})