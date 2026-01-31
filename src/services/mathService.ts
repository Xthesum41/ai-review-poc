/**
 * Serviço com operações matemáticas básicas.
 */

export function add(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }

  return a / b;
}

export function percentage(total: number, portion: number): number {
  if (total === 0) {
    return 0;
  }

  return (portion / total) * 100;
}

// Função propositalmente mal implementada para gerar review.
// Problema: retorna valores estranhos para números negativos.
export function weirdRound(value: number): number {
  // TODO: rever a regra de arredondamento para valores negativos.
  return Math.floor(value + 0.6);
}
