const express = require('express');
const mongoose = require('mongoose');
const SignUp = require('../src/SignUp');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://heritageolaiya:1234@golobe.h0onmyz.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


  const addUserToDatabase = async (userData) => {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db('golobe'); // Replace 'yourDatabaseName' with your actual database name
      const collection = db.collection('users');

      // Insert user data into MongoDB
      const result = await collection.insertOne(userData);
      console.log('User added to database with ID:', result.insertedId);
    } catch (error) {
      console.error('Error adding user to database:', error);
    } finally {
      // Close the MongoDB connection
      client.close();
    }
  };


// Define routes
app.get('/signUp', (req, res) => {
    res.send(<SignUp addUserToDatabase={addUserToDatabase} />);
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
