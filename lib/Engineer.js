const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        if (typeof gitHub !== "string" || "") {
            throw new Error("Parameter 'gitHub' is either not a string or is undefined.");
        };
        this.gitHub = gitHub;
    };
    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;