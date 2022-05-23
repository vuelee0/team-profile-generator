const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email);

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