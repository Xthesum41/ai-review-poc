import { add, divide, percentage, weirdRound } from './services/mathService';
import { createUser, findUserByEmail } from './services/userService';

async function main(): Promise<void> {
  // Exemplos de uso das funções
  const sum = add(2, 3);
  const pct = percentage(200, 50);

  // Exemplo de boa prática: tratamento de erro
  try {
    const result = divide(10, 2);
    // eslint-disable-next-line no-console
    console.log('Divide result:', result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Divide error:', error);
  }

  // Exemplo de má prática: ausência de tratamento de erro
  // eslint-disable-next-line no-console
  console.log('Weird round:', weirdRound(-1.2));

  const user = await createUser('Ana', 'ana@example.com');
  // eslint-disable-next-line no-console
  console.log('User created:', user);

  const found = await findUserByEmail('ana@example.com');
  // eslint-disable-next-line no-console
  console.log('User found:', found);

  // Exemplo de erro potencial: sem await e sem catch
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  findUserByEmail('missing@example.com');

  // eslint-disable-next-line no-console
  console.log('Sum:', sum, 'Percent:', pct);
}

main();
