const fs = require('fs');

/**
 * Reads a CSV file and counts students grouped by fields.
 * @param {String} dataPath - The path to the CSV file.
 * @returns {Promise} Resolves when processing is complete, rejects on error.
 */
const countStudents = (dataPath) => 
  new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      if (data) {
        // Split file content into lines
        const lines = data.trim().split('\n');
        const studentGroups = {};
        const headers = lines[0].split(',');
        const properties = headers.slice(0, -1); // Extract column headers except the last field

        // Process each student record
        lines.slice(1).forEach((line) => {
          const values = line.split(',');
          const field = values[values.length - 1]; // Get the student's field

          // Create a student data object using reduce (polyfill for Object.fromEntries)
          const studentData = properties.reduce((obj, prop, idx) => {
            obj[prop] = values[idx];
            return obj;
          }, {});

          // Group students by field
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(studentData);
        });

        // Calculate and display total students
        const totalStudents = Object.values(studentGroups).reduce(
          (total, group) => total + group.length,
          0
        );
        console.log(`Number of students: ${totalStudents}`);

        // Display count and list of students for each field
        Object.entries(studentGroups).forEach(([field, group]) => {
          const names = group.map((student) => student.firstname).join(', ');
          console.log(
            `Number of students in ${field}: ${group.length}. List: ${names}`
          );
        });

        resolve(true);
      }
    });
  });

module.exports = countStudents;
