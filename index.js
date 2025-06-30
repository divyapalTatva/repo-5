// index.js
const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
  res.send('Hello from your simple Node.js API! V2.0 from GKE');
});

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
