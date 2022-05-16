const inquirer = require('inquirer');
const fs = require('fs');

// link to the HTML that is generated
const generateHTML = require('./src/generatedHTML.js');

// link to team member's object
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 

// empty array of the team
const engineeringTeamArray = [];

// prompt to enter team manager's information
const promptManager = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your name!');
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the manager's employee ID?",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Employee ID!');
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is the manager's email address?",
            validate: function(emailInput) {
                // Return true if valid email
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                    if (valid) {
                        return true;
                        }
                    else {
                        console.log('Must enter an email address!')
                        return false;
                    }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                }
                else {
                    console.log('Please enter your office number!');
                }
            }
        }
    ])
    .then(managerAnswer => {
        const manager = new Manager (name, employeeId, emailAddress, officeNumber);

        engineeringTeamArray.push(manager);
        console.log(managerAnswer);
        promptTeam();
    })
};



const promptTeam = () => {
    console.log(`
    ****************
    Add Team Members
    ****************
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: "Please add your team member's role.",
            choices: ['Engineer', 'Intern', 'Finish building team']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Must enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter team member's employee ID.",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                }
                else {
                    console.log('Must Employee ID!');
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "Enter team member's email address.",
            validate: function(emailAddress) {
                // Return true if valid email
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
                    if (valid) {
                        return true;
                        }
                    else {
                        console.log('Must enter an email address!')
                        return false;
                    }
            }
            
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter GitHub username.",
            when: (choice) => choice.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Must enter the GitHub username!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter School name.",
            when: (choice) => choice.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log('Must enter the School name!');
                }
            }
        }
    ]);
};