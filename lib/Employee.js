class Employee {
    constructor(name, id, email) {
        this.name = typeof name === "string" ? name : name.toString();
        this.id = typeof id === "number" ? id : NaN; 
        this.email = typeof email  === "string" ? email : email.toString();
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