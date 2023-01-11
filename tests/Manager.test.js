const Manager = require("../lib/Manager");

// Because Manager extends Employee, all the tests for Employee are still valid. They are not repeated here.

describe("Manager", () => {
    describe("Object initialization", () => {
        it("should return that instanceof Manager is true when a new object is created with the constructor", () => {
            const obj = new Manager("Karl", 1337, "karl@gmail.com", 306);

            expect(obj instanceof Manager).toEqual(true);
        });
    });
    describe("Methods", () => {
        it("should return 'Manager' with getRole()", () => {
            const obj = new Manager("Karl", 1337, "karl@gmail.com", 306);
            const result = "Manager";

            const test = obj.getRole();

            expect(test).toEqual(result);
        })
    })
    describe("Parameter type exception tests", () => {
        it("should throw if officeNumber is not a number or empty", () => {
            const cb = () => new Manager("Karl", 123, "karl@gmail.com", true);
            expect(cb).toThrow("Parameter 'officeNumber' is either not a number or is undefined.");
        });
    })
});