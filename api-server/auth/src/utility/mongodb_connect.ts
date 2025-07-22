const mongoose = require('mongoose');

// Function to connect to MongoDB
export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB.');
    return;
  }

  try {
    console.log('Connecting to MongoDB...');
    console.log('MongoDB URL:', process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}



