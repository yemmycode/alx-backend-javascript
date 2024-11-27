const http = require('http');

// Create HTTP server that responds with "Hello Holberton School!"
const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  // Set headers for the response
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the response status and send the message
  res.statusCode = 200;
  res.end(responseText);
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server listening at -> http://localhost:1245');
});

module.exports = app;
