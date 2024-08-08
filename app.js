const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS
app.use(cors());

// Define routes and middleware
app.get('/', (req, res) => {
  // Handle API request
  res.json({ message: 'Hello from backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
