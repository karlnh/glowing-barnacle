const Intern = require("../lib/Intern");

// Because Intern extends Employee, all the tests for Employee are still valid. They are not repeated here.

describe("Intern", () => {
    describe("Object initialization", () => {
        it("should return that instanceof Intern is true when a new object is created with the constructor", () => {
            const obj = new Intern("Karl", 123, "karl@gmail.com", "U of M");

            expect(obj instanceof Intern).toEqual(true);
        });
    });
    describe("Methods", () => {
        it("should return 'U of M' with getSchool()", () => {
            const obj = new Intern("Karl", 123, "karl@gmail.com", "U of M");
            const result = "U of M";

            const test = obj.getSchool();

            expect(test).toEqual(result);
        })
        it("should return 'Intern' with getRole()", () => {
            const obj = new Intern("Karl", 123, "karl@gmail.com", "U of M");
            const result = "Intern";

            const test = obj.getRole();

            expect(test).toEqual(result);
        });
    });
    describe("Parameter type exception tests", () => {
        it("should throw if school is not a string or undefined", () => {
            const cb = () => new Intern("Karl", 123, "karl@gmail.com", false);
            expect(cb).toThrow("Parameter 'school' is either not a string or is undefined.");
        });
    });
});