import query from './';

export default async () => {
  await query('CREATE EXTENSION IF NOT EXISTS pgcrypto');
  await query(`CREATE TABLE IF NOT EXISTS users(
              id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
              email VARCHAR(100) UNIQUE NOT NULL,
              name VARCHAR(100) NOT NULL,
              password TEXT NOT NULL
          )`);
  await query(`CREATE TABLE IF NOT EXISTS foods(
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            price NUMERIC(5,2) NOT NULL,
            image VARCHAR(500) NOT NULL
          )`);
  return 'migration successful';
};
