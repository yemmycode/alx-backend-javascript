/**
 * Filters and returns students from a specified city within a list of students.
 *
 * @param {Array} students - The array of students to be filtered
 * @param {string} city - The city used to filter the students
 * @return {Array} An array of students located in the specified city
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    // Return students whose location matches the specified city
    return students.filter((student) => student.location === city);
  }
  // Return an empty array if the input is not an array
  return [];
}
