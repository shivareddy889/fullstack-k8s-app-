const express = require('express');
const app = express();
const PORT = 5000;

// ✅ Normal API
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

// ✅ Liveness Probe: checks if app is alive
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// ✅ Readiness Probe: checks if app is ready (DB, dependencies)
app.get('/ready', (req, res) => {
  const dbConnected = true; // Replace with real DB check if needed
  if (dbConnected) res.status(200).send('READY');
  else res.status(500).send('NOT READY');
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

