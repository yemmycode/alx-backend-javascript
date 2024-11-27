const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Database cannot be loaded'));
  } else {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Database cannot be loaded'));
      } else if (data) {
        const reportParts = [];
        const lines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const fieldNames = lines[0].split(',');
        const studentFields = fieldNames.slice(0, fieldNames.length - 1);

        lines.slice(1).forEach((line) => {
          const studentRecord = line.split(',');
          const studentValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];

          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }

          const studentEntries = studentFields.map((field, idx) => [field, studentValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        });

        const totalStudents = Object.values(studentGroups).reduce(
          (accum, group) => (accum || []).length + group.length
        );
        reportParts.push(`Total students: ${totalStudents}`);

        Object.entries(studentGroups).forEach(([field, group]) => {
          reportParts.push([
            `Students in ${field}: ${group.length}.`,
            'Names:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        });

        resolve(reportParts.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['Here is the list of our students:'];

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
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = app;

