const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(Employee);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;