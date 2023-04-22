import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 7000,
});

export const connectToDB = async () => {
  try {
    await pool.connect();
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
};

export default pool;
