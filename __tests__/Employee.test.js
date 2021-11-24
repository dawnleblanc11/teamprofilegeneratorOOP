// connects test to file you are testing
const Employee = require("../lib/Employee");
//test 1 employee name 
test('creates an employee object', () => {
    const name = 'Employee1';
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
  });

//test 2 employee id
  test('creates an id for new employee', () => {
    const id = 100;
    const employee = new Employee("Fred", id);
    expect(employee.id).toEqual(id);
  });

//test 3 employee email
test('creates an email for new employee', () => {
  const email = "bambam@flinstones.org";
  const employee = new Employee("BamBam",123, email);
  expect(employee.email).toEqual(email);
});

//test 4 getName() function
test('get employee name from function', () => {
  const name = 'Employee1';
  const employee = new Employee(name);
  expect(employee.getName()).toEqual(name);
});

//test 5 getId() function
test('get employee Id from function', () => {
  const id = 240;
  const employee = new Employee("Wilma",id);
  expect(employee.getId()).toEqual(id);
});

//test 6 getEmail() function
test('gets an email for new employee from function', () => {
  const email = "pebbles@flinstones.org";
  const employee = new Employee("Pebbles",989, email);
  expect(employee.getEmail()).toEqual(email);
});

//test 7 getRole() function
test('creates the role of employee from function', () => {
  const role = "Employee";
  const employee = new Employee("Betty", 159, "betty@flinstones.org");
  expect(employee.getRole()).toEqual(role);
});