//import class from Employee
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  //don't need to add what they equal
  constructor(name, id, email, role, githubUsername) {
    super(name, id, email, role);
    this.githubUsername = githubUsername;
  }
  getGithubUsername() {
    return this.githubUsername;
  }
  getRole() {
    return 'Engineer';
  }
};



module.exports = Engineer;
