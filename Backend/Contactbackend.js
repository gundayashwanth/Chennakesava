const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/submit', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for your form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  message: String,
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Use body-parser middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Handle POST request to /submit
app.post('/submit', async (req, res) => {
  const formData = req.body;
  
  try {
    // Save the form data to MongoDB
    const newFormData = new FormData(formData);
    await newFormData.save();
    console.log('Form data saved to MongoDB:', newFormData);

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data to MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
