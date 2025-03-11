import mongoose from 'mongoose';

declare global {
  const mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define mongodb uri in env file');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true, // In MongoDB, the buffer/cache hit rate refers to the efficiency with which the in-memory data cache (WiredTiger in the case of the default storage engine) is utilized. A high hit rate typically indicates that most read operations are being served from the in-memory cache, which is faster than reading from disk.
      maxPoolSize: 10, // Every MongoClient instance has a built-in connection pool for each server in your MongoDB topology. Connection pools open sockets on demand to support concurrent requests to MongoDB in your application. The maximum size of each connection pool is set by the maxPoolSize option, which defaults to 100 .
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
