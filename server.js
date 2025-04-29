const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded admin credentials
const adminEmail = "admin@example.com";
const adminPassword = "admin123"; // Use a secure password in a real app

app.use(express.json()); // To parse JSON data
app.use(cors()); // Enable CORS for frontend communication (optional)

// Endpoint to login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the email matches the admin email
  if (email !== adminEmail) {
    return res.status(400).send('Invalid email or password');
  }

  // Verify the password (using bcrypt to compare passwords)
  const isPasswordValid = await bcrypt.compare(password, adminPassword);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid email or password');
  }

  // Create JWT token
  const token = jwt.sign({ email: adminEmail }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send token in response
  res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
