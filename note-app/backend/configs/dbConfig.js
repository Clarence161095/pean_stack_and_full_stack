import mongoose from 'mongoose';
import { envConfig } from './envConfig.js';

function connectToDatabase() {
  mongoose
    .connect(envConfig.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Failed to connect to MongoDB:', error);
      console.log('Retrying in 5 seconds...');
      setTimeout(connectToDatabase, 5000);
    });
}

connectToDatabase();
