module.exports = app; // Exports the app at the beginning

const app = express(); // Initialize the app
const PORT = 7865; // Define the port

// Define the route after the variables are declared
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Start the server after route definitions
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

