//defining Employee Class
// this will be the base class for engineer, manager, intern 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        };

getName() { 
        return this.name;
    };

getId() {
    return this.id;
};

getEmail() {
    return this.email;
};

getRole() {
    return 'Employee';
  }
};
// exporting the class
module.exports = Employee;