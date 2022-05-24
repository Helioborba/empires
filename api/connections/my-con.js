import { createPool } from 'mysql2';
import { myHost, myUser, myDatabase, myPassword } from '../keys_dev.js';

const pool = createPool({
  host: myHost,
  user: myUser,
  database : myDatabase,
  password: myPassword
});

export default pool.promise();