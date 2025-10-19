import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';
if (!MONGODB_URI) console.error('Please define the MONGODB_URI environment variable inside .env.local');

let isConnected = false;
export const connectToDb = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}
