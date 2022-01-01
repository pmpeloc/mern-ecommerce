import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  nodeEnv: process.env.NODE_ENV,
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10) || 5000,

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGO_URI,

  /**
   * Your secret sauce
   */
  // jwtSecret: process.env.JWT_SECRET,
  // jwtAlgorithm: process.env.JWT_ALGO,

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
