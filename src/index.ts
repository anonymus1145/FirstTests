export const capitalize = (a: string) => {
    return a.charAt(0).toUpperCase() + a.slice(1);
}

export const reverseString = (a: string) => {
    return a.split('').reverse().join('');
}

function calculator() {
    return {
        add: (a: number, b: number) => a + b,
        subtract: (a: number, b: number) => a - b,
        multiply: (a: number, b: number) => a * b,
        divide: (a: number, b: number) => a / b
    }
}

export const calculus = calculator();

export function caesarCipher(string: string, shift: number) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || string[i] === ',' || string[i] === '.' || string[i] === '!' || string[i] === '?') {
            result += string[i];
            continue;
        }
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = (charCode - 65 + shift) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 + shift) % 26 + 97;
        }
        result += String.fromCharCode(charCode).toUpperCase();
    }
    return result;
}

export function analyzeArray(array: number[]) {
    return {
        average: array.reduce((a, b) => a + b) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}