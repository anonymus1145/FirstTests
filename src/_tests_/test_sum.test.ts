// 'requaireActual' ensures you get the real file insted of an automock
// also use import type and <type of.....> to still get the types
import type * as TestFunctions from '../index';

const { sum } = jest.requireActual<typeof TestFunctions>('../index.ts');

const successCases = [
    {
        id: 0,
        input: {a: 1, b: 1},
        output: 2
    },
    {
        id: 1,
        input: {a: 2, b: 3},
        output: 5
    },
    {
        id: 2,
        input: {a: 3, b: 4},
        output: 7
    },
    {
        id: 3,
        input: {a: 4, b: 5},
        output: 9
    }
];

describe('Test sum function', () => {
    it.each(successCases)('Case $id', ({ input, output }) => {
        const { a, b } = input;
        expect(sum(a, b)).toBe(output);
    })
})