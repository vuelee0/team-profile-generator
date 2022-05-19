// template code for manager card
const generateTeam = (team) => {

    const html = [];

    const generateManager = manager => {
        let managerHTML = `
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p id="id">ID: ${manager.id}</p>
                <p id="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p id="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
        html.push(managerHTML);
    }

    const generateEngineer = engineer => {
        let engineerHTML = `
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p id="id">ID: ${engineer.id}</p>
                <p id="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p id="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
        `;
        html.push(engineerHTML);
    }

    const generateIntern = intern => {
        let internHTML = `
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p id="id">ID: ${intern.id}</p>
                <p id="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p id="school">School: ${intern.school}</p>
            </div>
        </div>
        `;
        html.push(internHTML);
    }
    // create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    // join the blocks
    return html.join('');
}

// export to generate page
module.exports = team => {

    return `  
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Template</title>

            <link rel="stylesheet" href=".dist/style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <main class="container">
                ${generateTeam(team)}
            </main>
            
        </body>
    </html>
    `;
}
