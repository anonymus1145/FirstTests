// 'requaireActual' ensures you get the real file insted of an automock
// also use import type and <type of.....> to still get the types
import type * as TestFunctions from '../index';

const { reverseString } = jest.requireActual<typeof TestFunctions>('../index.ts');

const successCasesReverse = [
    {
        id: 0,
        input: {a: 'hello'},
        output: 'olleh',
    },
    {
        id: 1,
        input: {a: 'world'},
        output: 'dlrow',
    }
 
];

describe('Test reverseString function', () => {
    it.each(successCasesReverse)('Case $id', ({ input, output }) => {
        const { a } = input;
        const result = reverseString(a);
        expect(result).toBe(output);
    })
})
