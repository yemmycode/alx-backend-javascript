/**
 * Modifies the grades of students located in a specified city with new grade information.
 *
 * If a student is not found in newGrades, their final grade will be set to N/A.
 *
 * @param {Array} students - The array of students to be processed
 * @param {string} city - The city used to filter the students
 * @param {Array} newGrades - The array of new grades for updating student grades
 * @return {Array} The list of students with updated grades
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Default grade value for students without a new grade
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      // Filter students based on their city and update their grades
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        // Retrieve the corresponding new grade for this student
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
