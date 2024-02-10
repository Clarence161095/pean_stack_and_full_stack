import mongoose from 'mongoose';
import { envConfig } from './envConfig.js';

// Connect to MongoDB
mongoose.connect(envConfig.MONGO_URI);
