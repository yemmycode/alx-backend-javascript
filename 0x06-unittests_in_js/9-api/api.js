const app = express(); // Initialize app first
const express = require('express'); // Import express after initialization
const PORT = 7865; // Define the port

app.get('/cart/:id(\\d+)', (req, res) => { // Define /cart route first
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/', (_, res) => { // Define the root route next
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => { // Start the server last
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app at the end

