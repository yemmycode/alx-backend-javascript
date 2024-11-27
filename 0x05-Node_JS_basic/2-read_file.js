const fs = require('fs');

// Polyfill for Object.fromEntries
if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    return entries.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  };
}

/**
 * Reads a CSV file and counts students grouped by their fields.
 * @param {String} dataPath - Path to the CSV file containing student data.
 */
function countStudents(dataPath) {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  const headers = fileContent[0].split(',');
  const studentGroups = {};

  fileContent.slice(1).forEach((line) => {
    const values = line.split(',');
    const field = values[values.length - 1];
    const studentData = Object.fromEntries(
      headers.slice(0, -1).map((header, index) => [header, values[index]])
    );

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push(studentData);
  });

  const totalStudents = Object.values(studentGroups).reduce(
    (count, group) => count + group.length,
    0
  );
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(
      `Number of students in ${field}: ${group.length}. List: ${studentNames}`
    );
  }
}

module.exports = countStudents;

