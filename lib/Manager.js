const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(Employee);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;