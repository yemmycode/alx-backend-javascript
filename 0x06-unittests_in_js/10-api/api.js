const express = require('express'); // Import express first

const app = express();
const PORT = 7865;

app.use(express.json()); // Set up middleware before routes

// POST endpoint for login
app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

// GET endpoint for root
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// GET endpoint for /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// GET endpoint for /available_payments
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Start server and listen on port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app at the end

