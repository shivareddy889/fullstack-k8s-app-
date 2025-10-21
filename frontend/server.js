const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Proxy to backend
app.get('/api', async (req, res) => {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000/api';
  try {
    const response = await fetch(backendUrl);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));
