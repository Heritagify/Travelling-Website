import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://heritageolaiya:1234@golobe.h0onmyz.mongodb.net/?retryWrites=true&w=majority';

const addUserToDatabase = async (userData) => {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db('golobe');
    const collection = db.collection('users');

    // Insert user data into MongoDB
    const result = await collection.insertOne(userData);
    console.log('User added to database with ID:', result.insertedId);
    return result.insertedId; // Optionally return the inserted ID
  } catch (error) {
    console.error('Error adding user to database:', error);
    throw error; // Rethrow the error to handle it elsewhere
  } finally {
    // Close the MongoDB connection
    client.close();
  }
};

export default addUserToDatabase ;
