const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(Employee);

        this.schoolName = schoolName;
    }

    getSchool() {
        return this.schoolName;
    }

    getRole() {
        return 'Intern';
    }
}


module.exports = Intern;