import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "user",
  password: "pass",
  database: "test",
});

const result = await pool.query("SELECT * FROM users WHERE id = $1", [1]);
