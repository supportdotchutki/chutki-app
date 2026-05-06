import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/chutki-app';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  
  // Start Server
  app.listen(PORT, () => {
    console.log(`🚀 Chutki API Server running on http://localhost:${PORT}`);
    console.log(`📝 API Base URL: http://localhost:${PORT}/api`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection failed:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});
