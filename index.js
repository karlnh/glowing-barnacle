const inquirer = require('inquirer');

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
    inquirer.prompt(initialPrompt).then((answers) => {
        if (answers.start === 'Start') {
            inquirer.prompt(managerQuestions).then((answers) => {
                // turn answers into manager object
                teamMembers.push(newManager);
                addEmployee();
            })
        };
        if (answers.start === 'Close') {
            return console.log("Closing.")
        };
    })
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
        teamMembers.push(newEngineer);
        addEmployee();
    })
};

function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        // turn answers into intern object
        teamMembers.push(newIntern);
        addEmployee();
    })
};

function generateTeam() {
    // using the teamMembers object,
    // fill in HTML template
}