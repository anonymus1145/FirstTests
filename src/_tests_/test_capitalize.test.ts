// 'requaireActual' ensures you get the real file insted of an automock
// also use import type and <type of.....> to still get the types
import type * as TestFunctions from '../index';

const { capitalize } = jest.requireActual<typeof TestFunctions>('../index.ts');

const successCases = [
    {
        id: 0,
        input: {a: 'hello'},
        output: 'Hello',
    },
    {
        id: 1,
        input: {a: 'world'},
        output: 'World',
    }
 
];


describe('Test capitalize function', () => {
    it.each(successCases)('Case $id', ({ input, output }) => {
        const { a } = input;
        const result = capitalize(a);
        expect(result).toBe(output);
    })
})
