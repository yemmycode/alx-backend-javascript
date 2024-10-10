/// <reference path="./crud.d.ts" />

// Importing necessary types and CRUD functions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Defining a new row with a first name and last name
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Inserting the new row and retrieving its unique RowID
const newRowID: RowID = CRUD.insertRow(row);

// Creating an updated row object by adding an 'age' field to the existing row
const updatedRow: RowElement = { ...row, age: 23 };

// Updating the existing row in the system with the new information
CRUD.updatedRow(newRowID, updatedRow);

// Deleting the row from the system using its RowID
CRUD.deleteRow(newRowID);
