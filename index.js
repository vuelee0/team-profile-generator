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
            name: 'nameMag',
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
        const manager = new Manager (managerAnswer.nameMag, managerAnswer.employeeId, managerAnswer.emailAddress, managerAnswer.officeNumber);

        engineeringTeamArray.push(manager);
        console.log(managerAnswer);
        promptTeam();
    })
};


// prompt to enter team member information
const promptTeam = () => {
    console.log(`
    ****************
    Add Team Members
    ****************
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please add your team member's role.",
            choices: ['Engineer', 'Intern', 'Exit']
        },
        {
            type: 'confirm',
            name: 'exit',
            message: "Would you like to exit?",
            default: true,
            when: (input) => input.role === 'Exit'
        },
        {
            type: 'input',
            name: 'nameTeaM',
            message: "Enter team member's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Must enter a name!');
                }
            },
            when: (input) => input.role !== 'Exit'
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
            },
            when: (input) => input.role !== 'Exit'
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
            },
            when: (input) => input.role !== 'Exit'
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter GitHub username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Must enter the GitHub username!');
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter School name.",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log('Must enter the School name!');
                }
            },
        }
    ])
    .then(teamInput => {
      let {role, nameTeaM, employeeId, emailAddress, github, school} = teamInput;
        let teamMember;
            if (role === 'Engineer') {
                teamMember = new Engineer (teamInput.nameTeaM, teamInput.employeeId, teamInput.emailAddress, teamInput.github);
            }
            else if (role === 'Intern') {
                teamMember = new Intern (teamInput.nameTeaM, teamInput.employeeId, teamInput.emailAddress, teamInput.school);
            }
            else if (role === 'Exit') {
                process.exit(0);
            }

        engineeringTeamArray.push(teamMember);
        console.log(teamInput);
        promptTeam();
    });
};


// Function to write html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log('Team profile was created successfully.')
    });
};

// Function to generate HTML file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log("The engineering team profiles was generated successfully!")
        }
    })
};

// Function call to initialize app
promptManager()
    // .then(promptTeam())
    // .then(engineeringTeamArray => {
    //     return generateHTML(engineeringTeamArray);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .catch(err => {
    //     console.log(err);
    // });