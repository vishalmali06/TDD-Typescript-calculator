export class Calculator {

    add(input: string): number {
        if (input === '') return 0;

        let delimiter = /,|\n/;
        let isMultiplication = false;

        if (input.startsWith('//')) {
            const delimiterEnd = input.indexOf('\n');
            delimiter = new RegExp(input.substring(2, delimiterEnd));

            if (input.substring(2, delimiterEnd) === '@') {
                isMultiplication = true;
            }

            input = input.substring(delimiterEnd + 1);
        }

        const numbers = input.split(delimiter).map(Number);
        const negatives = numbers.filter(n => n < 0);

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
        }

        if (isMultiplication) {
            return numbers.reduce((product, num) => product * num, 1);
        }

        return numbers.reduce((sum, num) => sum + num, 0);
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }
}
