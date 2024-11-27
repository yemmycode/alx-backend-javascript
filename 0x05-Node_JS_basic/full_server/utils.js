import fs from 'fs';

/**
 * Parses student data from a CSV file.
 * @param {String} dataPath The path to the CSV file containing student data.
 * 
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[] 
 * }>}
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Unable to load the database'));
  } else {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Unable to load the database'));
      } else if (data) {
        const lines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const fieldNames = lines[0].split(',');
        const studentProperties = fieldNames.slice(0, fieldNames.length - 1);

        lines.slice(1).forEach((line) => {
          const record = line.split(',');
          const values = record.slice(0, record.length - 1);
          const field = record[record.length - 1];

          if (!studentGroups.hasOwnProperty(field)) {
            studentGroups[field] = [];
          }

          const studentData = studentProperties.map((name, idx) => [name, values[idx]]);
          studentGroups[field].push(Object.fromEntries(studentData));
        });

        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;

