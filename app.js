const express = require('express');
const app = express();

// When someone visits the homepage
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from Jenkins Demo!',
    status: 'running'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

module.exports = app;