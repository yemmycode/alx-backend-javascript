// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'Maku',
  lastName: 'Ajibade',
  age: 21,
  location: 'Alberton'
};

const student2: Student = {
  firstName: 'Wanga',
  lastName: 'Ajibade',
  age: 22,
  location: 'London'
};

// Create an array that holds the students
const studentsList: Student[] = [student1, student2];

// Function to render the table and append students' first name and location
const renderTable = (): void => {
  // Create a table element
  const table = document.createElement('table');
  table.border = '1'; // Optional, adds a border to the table

  // Create table headers
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  header1.textContent = 'First Name';
  const header2 = document.createElement('th');
  header2.textContent = 'Location';
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);

  // Loop through studentsList and create table rows
  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  // Append the table to the body or any container
  document.body.appendChild(table);
};

// Call the function to render the table
renderTable();


