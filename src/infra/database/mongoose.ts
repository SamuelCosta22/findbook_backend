import mongoose from 'mongoose';
import { HTTPException } from '../../types/httpException';

export async function connect() {
  try {
    if (!process.env.DATABASE_URL)
      throw new HTTPException(500, 'Missing DATABASE_URL');
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected');
  } catch (error: any) {
    throw new HTTPException(500, error.message);
  }
}