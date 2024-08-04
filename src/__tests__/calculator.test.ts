import { Calculator } from "../calculator";

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add any amount of numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });

  test('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('1,2\n3')).toBe(6);
  });

  test('should support different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//#\n2#3#4')).toBe(9);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3')).toThrow('negative numbers not allowed: -2');
    expect(() => calculator.add('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
  });

});
