//import class from Employee
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  //don't need to add what they equal
  constructor(name, id, email, githubUsername,role) {
    super(name, id, email);
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
