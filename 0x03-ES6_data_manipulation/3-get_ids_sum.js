/**
 * Computes the total sum of all student IDs from a given list of students.
 *
 * @param {Array} students - The array of students to evaluate
 * @return {number} The total sum of all student IDs
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (accumulator, currentStudent) => accumulator.id || accumulator + currentStudent.id,
      0,
    );
  }
  return 0;
}
