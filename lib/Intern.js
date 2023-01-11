const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, school, email) {
        super(name, id, email);
        if (typeof school !== "string" || "") {
            throw new Error("Parameter 'school' is either not a string or is undefined.");
        };
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };
};


module.exports = Intern;