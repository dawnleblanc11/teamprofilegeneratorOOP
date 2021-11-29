//defining Employee Class
// this will be the base class for engineer, manager, intern 
class Employee {
    constructor(name, id, email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
    return this.role;
}
};
// exporting the class
module.exports = Employee;