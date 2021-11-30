//import class from Employee
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, schoolname, role) {
    super(name, id, email);
    this.schoolname = schoolname;
  }
  getSchoolName() {
    return this.schoolname;
  }
  getRole() {
    return 'Intern';
  }
};

module.exports = Intern;