const inquirer = require('inquirer');
const fs = require('fs');

// Referenced the following page:
// https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/hierarchical.js

const team = require('./lib/team');
const { initialPrompt } = require('./lib/questions');
const { employeePrompt } = require('./lib/questions');
const { managerQuestions } = require('./lib/questions');
const { engineerQuestions } = require('./lib/questions');
const { internQuestions } = require('./lib/questions');

const teamMembers = [];

function init() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
            // turn answers into manager object
            const newManager = new team.Manager(
                answers.managerName,
                Number(answers.managerID),
                answers.managerEmail,
                Number(answers.managerOffice));
            console.log(newManager);
            const managerTemplate =
            `
<card class="card" id="manager-name">
    <div>
        <div>
            <h3>${newManager.name}</h3>
            <h4>${newManager.getRole()}</h4>
        </div>
        <ul>
            <li>${newManager.id}</li>
            <li>${newManager.email}</li>
            <li>${newManager.officeNumber}</li>
        </ul>
    </div>
</card>
            `
            teamMembers.push(managerTemplate);
        }
    ).then(() => {addEmployee()});
    // https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/nested-call.js
};

function addEmployee() {
    inquirer.prompt(employeePrompt).then((answers) => {
        if (answers.employeePrompt === "Engineer") {
            addEngineer();
        };
        if (answers.employeePrompt === "Intern") {
            addIntern();
        };
        if (answers.employeePrompt === "Finish team") {
            generateTeam();
        };
    })
};

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        // turn answers into engineer object
        const newEngineer = new team.Engineer(
            answers.engineerName,
            Number(answers.engineerID),
            answers.engineerEmail,
            answers.engineerGitHub);
        console.log(newEngineer);
        const engiTemplate = 
        `
<card class="card" id="${newEngineer.name}">
    <div>
        <div>
            <h3>${newEngineer.name}</h3>
            <h4>${newEngineer.getRole()}</h4>
        </div>
        <ul>
            <li>${newEngineer.id}</li>
            <li>${newEngineer.email}</li>
            <li>${newEngineer.gitHub}</li>
        </ul>
    </div>
</card>
        `
    teamMembers.push(engiTemplate);
        addEmployee();
    })
};

function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        const newIntern = new team.Intern(
            answers.internName,
            Number(answers.internID),
            answers.internEmail,
            answers.internSchool);
        const internTemplate =
        `
<card class="card" id="intern-name">
    <div>
        <div>
            <h3>${newIntern.name}</h3>
            <h4>${newIntern.getRole()}</h4>
        </div>
        <ul>
            <li>${newIntern.id}</li>
            <li>${newIntern.email}</li>
            <li>${newIntern.school}</li>
        </ul>
    </div>
</card>
        `
        teamMembers.push(internTemplate);
        addEmployee();
    })
};

function generateTeam() {
    // using the teamMembers object,
    // fill in HTML template
    console.log(teamMembers);
    const template =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Team Profile</title>
    <style>
body {
    font-family: monospace;
}

header {
    background: lightsalmon;
    color: black;
    border: 1px solid black;
    text-align: center;
    padding: 1rem;
}

#card-holder {
    display: flex;
    place-content: center;
    border: 1px solid black;
    margin-top: 1rem;
    padding: 1rem;
}

.card {
    display: flex;
    border: 1px solid black;
    margin: 1rem;
    padding: 2rem;
}

ul {
    list-style: none;
    /* margin: 0; */
    padding: 0;
}
    </style>

</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section id="card-holder">
        <p>${teamMembers}</p>
        </section>
    </main>
</body>
</html>
`
    fs.writeFile('./dist/index.html', template, (err) =>
    err ? console.error(err) : console.log("successly wrote file :)"));
}


init();