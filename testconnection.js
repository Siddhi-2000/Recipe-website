const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function testConnection() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsInsecure: true, // Only for debugging, not recommended for production
  });

  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas!");
    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

testConnection();

