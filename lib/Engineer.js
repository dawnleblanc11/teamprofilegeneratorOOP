//import class from Employee
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name = "", id = 0, email = "", githubUsername) {
    super(name, id, email);
    this.githubUsername = githubUsername;
  }
  getGithubUsername() {
    return this.githubUsername;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
