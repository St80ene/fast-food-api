import env from 'dotenv';

env.config();

export default {
  development: {
    host: 'localhost',
    user: 'postgres',
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 3000,
    max: 20,
  },
  production: {
    host: 'localhost',
    user: 'postgres',
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 3000,
    max: 20,
  },
};
