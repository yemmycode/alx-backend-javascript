// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input and display their name
process.stdin.on('readable', function () {
  const input = process.stdin.read();
  if (input) process.stdout.write(`Your name is: ${input}`);
});

// Notify the user when the program ends
process.stdin.on('end', function () {
  process.stdout.write('This important software is now closing\n');
});

