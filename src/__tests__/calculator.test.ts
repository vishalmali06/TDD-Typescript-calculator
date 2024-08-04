import { Calculator } from "../calculator";

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('should divide two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });


});
