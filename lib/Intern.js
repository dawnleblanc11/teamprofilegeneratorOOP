//import class from Employee
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, role, schoolname) {
    super(name, id, email, role);
    this.schoolname = schoolname;
  }
  getSchoolName() {
    return this.schoolname;
  }
}

module.exports = Intern;