import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const POSTGRES_DB_URL = process.env.POSTGRES_DB_URL || '';
export const BCRYPT_SECRET = process.env.BCRYPT_SECRET || '';
export const BCRYPT_SALT_ROUND = parseInt(process.env.BCRYPT_SALT_ROUND || '10');
