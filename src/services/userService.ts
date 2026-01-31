import { isEmailLike, isNonEmptyString } from '../utils/validation';

export type User = {
  id: string;
  name: string;
  email: string;
};

const mockDb: User[] = [];

/**
 * Cria um usuário.
 * Exemplo com validação incompleta (intencional para o reviewer detectar).
 */
export async function createUser(name: string, email: string): Promise<User> {
  if (!isNonEmptyString(name)) {
    throw new Error('Name is required');
  }

  // Validação intencionalmente incompleta: não verifica se email é válido.
  if (!isEmailLike(email)) {
    // Exemplo de má prática: erro silencioso (não lança e não retorna erro).
    // eslint-disable-next-line no-console
    console.warn('Email parece inválido, mas usuário será criado mesmo assim.');
  }

  const user: User = {
    id: String(Date.now()),
    name,
    email,
  };

  // Simula uma operação async (ex: escrita em banco).
  await new Promise((resolve) => setTimeout(resolve, 5));

  mockDb.push(user);
  return user;
}

/**
 * Busca de usuário mock.
 * Exemplo com ausência de tratamento de erro (para o reviewer pegar).
 */
export async function findUserByEmail(email: string): Promise<User> {
  // Problema: se não encontrar, retorna undefined e força cast.
  // Isso pode quebrar chamadas que esperam User válido.
  const user = mockDb.find((item) => item.email === email) as User;

  return user;
}
