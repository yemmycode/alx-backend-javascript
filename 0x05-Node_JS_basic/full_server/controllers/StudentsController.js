import readDatabase from '../utils';

/**
 * List of the allowed majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Handles the student-related route actions.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class StudentsController {
  static getAllStudents(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        // Function to compare strings alphabetically in a case-insensitive manner
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
          if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push(
            [
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' ')
          );
        }
        res.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!VALID_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(responseText);
      })
      .catch((err) => {
        res.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;

