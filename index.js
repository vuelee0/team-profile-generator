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
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email!');
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
    })
};