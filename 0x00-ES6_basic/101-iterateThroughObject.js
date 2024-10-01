export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to store employee names

  // Iterate through the iterator to collect all employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  // Join the employee names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}
