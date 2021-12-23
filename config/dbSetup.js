import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      dbName: 'shoppy',
      useNewUrlParser: true,
      autoIndex: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error)
    };
};

export default connectDatabase;
