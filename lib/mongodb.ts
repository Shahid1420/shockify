import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';
if (!MONGODB_URI)
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');

export const connectToDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    throw error;
  }
}
