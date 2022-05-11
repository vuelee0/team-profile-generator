const inquirer = require('inquirer');
const generateHTML = require('./src/generatedHTML.js');

// prompt to enter team manager's information
const promptManager = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the manager's employee ID?",
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        }
    ]);
};