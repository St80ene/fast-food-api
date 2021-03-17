import { Pool } from 'pg';
import env from 'dotenv';

env.config();

const pool = new Pool(); /**creating a connection to client-side */

export default async (query, data = []) => {
  let res = null;
  const client = await pool.connect();
  try {
    res = await client.query(query, data);
  } catch (error) {
    throw new Error(error.message);
  } finally {
    client.release();
  }

  return res;
}; /**creating async function that connects and disconnects queries from client*/
