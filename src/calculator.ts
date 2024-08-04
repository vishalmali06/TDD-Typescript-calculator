export class Calculator {
    add(input: string): number {
        if (input === '') return 0;

        let delimiter = /,|\n/;
        if (input.startsWith('//')) {
            const delimiterEnd = input.indexOf('\n');
            delimiter = new RegExp(input.substring(2, delimiterEnd));
            input = input.substring(delimiterEnd + 1);
        }

        const numbers = input.split(delimiter).map(Number);
        const negatives = numbers.filter(n => n < 0);

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
        }

        return numbers.reduce((sum, num) => sum + num, 0);
    }
}
