export default function createIteratorObject(report) {
  const employees = []; // Array to store all employees

  // Loop through all departments and add employees to the array
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Create an iterator for the employees array
  return employees[Symbol.iterator]();
}
