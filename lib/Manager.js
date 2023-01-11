const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber, email) {
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name, id, email);
        if (typeof officeNumber !== "number" || "") {
            throw new Error("Parameter 'officeNumber' is either not a number or is undefined.");
        };
        this.officeNumber = officeNumber;
    };
    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;