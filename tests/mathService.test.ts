import { add, divide, percentage, weirdRound } from '../src/services/mathService';

describe('mathService', () => {
  test('add should sum numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('divide should divide numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide should throw on zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('percentage should calculate', () => {
    expect(percentage(200, 50)).toBe(25);
  });

  test('weirdRound should be inconsistent', () => {
    // Exemplo de teste que evidencia a má implementação
    expect(weirdRound(-1.2)).toBe(-1);
  });
});
