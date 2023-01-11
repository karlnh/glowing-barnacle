const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Object initialization", () => {
        it("should return that instanceof Employee is true when a new object is created with the constructor", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");

            expect(obj instanceof Employee).toEqual(true);
        });
    });
    describe("Methods", () => {
        it("should return this.name with getName()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = "Karl";
            
            const test = obj.getName();

            expect(test).toEqual(result);
        });

        it("should return this.id with getId()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = 123;
            
            const test = obj.getId();

            expect(test).toEqual(result);
        });

        it("should return this.email with getEmail()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = "karl@gmail.com";
            
            const test = obj.getEmail();

            expect(test).toEqual(result);
        });

        it("should return 'Employee' with getRole()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = "Employee";

            const test = obj.getRole();

            expect(test).toEqual(result);
        });
    });
    describe("Parameter type exception tests", () => {
        it("should throw if name is not a string or empty", () => {
            // have to package it as a callback or else it will immediately throw before even getting tested
            const cb = () => new Employee("", 123, "karl@gmail.com");
            expect(cb).toThrow("Parameter 'name' is either not a string or is undefined.");
            // Credit the toThrow() function here: https://eloquentcode.com/expect-a-function-to-throw-an-exception-in-jest
        });
        it("should throw if id is not a number or empty", () => {
            const cb = () => new Employee("Karl", [1,'lol',false], "karl@gmail.com");
            expect(cb).toThrow("Parameter 'id' either is not a number or is undefined.");
        });
        it("should throw if email is not a string or empty", () => {
            const cb = () => new Employee("Karl", 123, true);
            expect(cb).toThrow("Parameter 'email' is either not a string or is undefined.");
        });
    })
});

// writing about interactions and behaviors; when i write this, i should get this.

// https://kentcdodds.com/blog/write-tests