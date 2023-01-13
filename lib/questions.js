const initialPrompt = [
    {
        name: 'start',
        type: 'list',
        message: "Select 'start' to add a manager.",
        choices: ['Start', 'Close'],
    }
]

const employeePrompt = [
    {
        name:'employeePrompt',
        type: 'list',
        message: 'Select an employee type to add.',
        choices: ['Engineer', 'Intern', 'Finish team'],
    }
]

const managerQuestions = [
    {
        name: 'managerName',
        type: 'input',
        message: "Manager name:",
    },
    {
        name: 'managerID',
        type: 'input',
        message: "Manager ID:",
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: "Manager email:",
    },
    {
        name: 'managerOffice',
        type: 'input',
        message: "Manager office number:",
    },
];

const engineerQuestions = [
    {
        name: 'engineerName',
        type: 'input',
        message: "Engineer name:",
    },
    {
        name: 'engineerID',
        type: 'input',
        message: "Engineer ID:",
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: "Engineer email:",
    },
    {
        name: 'engineerGitHub',
        type: 'input',
        message: "Engineer gitHub:",
    },
];

const internQuestions = [
    {
        name: 'internName',
        type: 'input',
        message: "Intern name:",
    },
    {
        name: 'internID',
        type: 'input',
        message: "Intern ID:",
    },
    {
        name: 'internEmail',
        type: 'input',
        message: "Intern email:",
    },
    {
        name: 'internSchool',
        type: 'input',
        message: "Intern School:",
    },
]

module.exports = { initialPrompt, employeePrompt, managerQuestions, engineerQuestions, internQuestions };