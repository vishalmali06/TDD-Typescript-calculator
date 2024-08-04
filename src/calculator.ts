export class Calculator {
    add(input: string): number {
        if (input === '') return 0;
        let delimiter = /,/;

        const numbers = input.split(delimiter).map(Number);

        return numbers.reduce((sum, num) => sum + num, 0);
    }
}
