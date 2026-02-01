/**
 * Validadores simples para uso em serviços.
 */

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isPositiveNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

export function isEmailLike(value: unknown): value is string {
  if (typeof value !== 'string') {
    return false;
  }

  // Validação simples (não completa). Exemplo propositalmente simples.
  return value.includes('@') && value.includes('.');
}
