class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || name === "") {
            throw new Error("Parameter 'name' is either not a string or undefined.")
        };
        if (typeof id !== "number") {
            throw new Error("Parameter 'id' must be a number.")
        };
        if (typeof email !== "string" || name === "") {
            throw new Error("Parameter 'email' is either not a string or undefined.")
        };
        this.name = name.toString().trim();
        this.id = id; 
        this.email = email.toString().trim();
    };
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }

};

module.exports = Employee;