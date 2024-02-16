import express, { json } from 'express';
import { connect } from 'mongoose';
import addUserToDatabase from './addUserToDatabase';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(json());

// Define routes
app.post('/signUp', async (req, res) => {
  try {
    const insertedId = await addUserToDatabase(req.body);
    res.status(201).json({ message: 'User registered successfully', userId: insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
