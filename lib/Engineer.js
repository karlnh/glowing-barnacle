const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        if (typeof github !== "string" || "") {
            throw new Error("Parameter 'github' is either not a string or is undefined.");
        };
        this.github = github;
    };
    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;