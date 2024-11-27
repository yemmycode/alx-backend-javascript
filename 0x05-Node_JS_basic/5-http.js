const http = require('http');
const fs = require('fs');

// Define server configuration: port and host
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

// Get the database file path from command line arguments, or default to an empty string
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Function that returns a promise counting the students in a CSV data file
/**
 * Counts the number of students in the CSV file.
 * @param {String} dataPath Path to the CSV file containing student data.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  } else {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        // Group students by their last field value
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);

        // Report the number of students per field and list their names
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map(student => student.firstname).join(', ')}`);
        }

        resolve(reportParts.join('\n'));
      }
    });
  }
});

// Define route handlers for different endpoints
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

// Listen for incoming requests and match the appropriate route handler
app.on('request', (req, res) => {
  SERVER_ROUTE_HANDLERS.some((routeHandler) => {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      return true; // Exit loop after matching route
    }
    return false;
  });
});

// Start the server and log its status
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app for possible external use
module.exports = app;

