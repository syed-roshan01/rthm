const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware to handle cross-origin requests
app.use(cors());

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload setup using multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle POST request to '/register'
app.post('/register', upload.any(), (req, res) => {
  // Log the incoming form data
  console.log('Received data:', req.body);

  // Handle files (if any) by logging them
  if (req.files) {
    console.log('Received files:', req.files);
  }

  // Send a response indicating the registration was successful
  res.status(200).send({ message: 'Registration successful!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
