// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employees = [];


const collectEmployees = function (firstName, lastName, salary) {
  var firstName = prompt("What is the employee's first name?");
  var lastName = prompt("What is the employee's last name?");
  var salary = parseInt(prompt("what is the employee's salary?"),10);
  let e1 = { firstName, lastName, salary };
  employees.push(e1);



  // TODO: Get user input to create and return an array of employee objects

  let again = confirm('do you want to add another employee');
  while (again) {
    var againFirst = prompt("What is the employee's first name?");
    var againLast = prompt("What is the employee's last name?");
    var againSalary = parseInt(prompt("what is the employee's salary?"),10);
    employees.push({ firstName: againFirst, lastName: againLast, salary: againSalary });
    again = confirm('do you want to add another employee');
  }

  return employees;
}


// Display the average salary
let displayAverageSalary = function () {
let average=0
    let sum=0;
    for (let i=0; i<employees.length; i++){
    sum += employees[i].salary;
    average=(sum/employees.length);
    
  }
  console.log(average);

    // TODO: Calculate and display the average salary
}
/*let s1=collectEmployees.salary
let avSal=[1,2,3,4,5];
let average= displayAverageSalary(avSal)
console.log(average) */

// Select a random employee
const getRandomEmployee = function () {
  
  valueToUse= employees[Math.floor(Math.random()* employees.length)]
  console.log(valueToUse)

  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
