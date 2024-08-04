export class Calculator {
    add(input: string): number {
        if (input === '') return 0;
        const numbers = input.split(/,|\n/).map(Number);
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}
