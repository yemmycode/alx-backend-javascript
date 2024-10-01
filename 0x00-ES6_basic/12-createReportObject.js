export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Spread syntax to include department names and employees
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Returns the number of departments
    },
  };
}
