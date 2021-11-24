// connects test to files you are testing
// needs employee since this is the base class
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


//test 8 get the office number for a manager
test('creates an office number for a manager', () => {
    const officeNumber = 634;
    const manager = new Manager("Rocco", 583 , "rocco@flinstones.com", officeNumber);
    expect(manager.officeNumber).toEqual(officeNumber);
  });

//test 9 getOfficeNumber() function for a manager
test('get office number for a manager from function', () => {
    const officeNumber = 753;
    const manager = new Manager("Scold", 951 , "scold@flinstones.com", officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
  });
//test 10 getRole() function for a manager
test('creates the role of manager from function', () => {
    const role = "Manager";
    const manager = new Manager("mrRubble", 258, "mrRubble@flinstones.org", 987);
    expect(manager.getRole()).toEqual(role);
  });