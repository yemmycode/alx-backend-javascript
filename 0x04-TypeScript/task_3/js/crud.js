// Function to insert a new row
export function insertRow(row) {
  // Log the row being inserted to the console
  console.log('Insert row', row);
  
  // Return a random row ID between 0 and 999
  return Math.floor(Math.random() * Math.floor(1000));
}

// Function to delete a row based on its ID
export function deleteRow(rowId) {
  // Log the row ID being deleted to the console
  console.log('Delete row id', rowId);
  
  // No value is returned, the function ends here
  return;
}

// Function to update an existing row based on its ID
export function updateRow(rowId, row) {
  // Log the row ID and the new data for the row being updated
  console.log(`Update row ${rowId}`, row);
  
  // Return the ID of the updated row
  return rowId;
}
