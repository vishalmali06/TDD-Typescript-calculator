import { Calculator } from "../calculator";

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add any amount of numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('1,2\n3')).toBe(6);
  });

  it('should support different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//#\n2#3#4')).toBe(9);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3')).toThrow('negative numbers not allowed: -2');
    expect(() => calculator.add('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

});
