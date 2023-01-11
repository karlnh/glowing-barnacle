const Engineer = require("../lib/Engineer");

// Because Engineer extends Employee, all the tests for Employee are still valid. They are not repeated here.

describe("Engineer", () => {
    describe("Object initialization", () => {
        it("should return that instanceof Engineer is true when a new object is created with the constructor", () => {
            const obj = new Engineer("Karl", 123, "karl@gmail.com", "karlnh");

            expect(obj instanceof Engineer).toEqual(true);
        });
    });
    describe("Methods", () => {
        it("should return 'Engineer' with getRole()", () => {
            const obj = new Engineer("Karl", 123, "karl@gmail.com", "karlnh");
            const result = "Engineer";

            const test = obj.getRole();

            expect(test).toEqual(result);
        });
    });
    describe("Parameter type exception tests", () => {
        it("should throw if gitHub is not a number or undefined", () => {
            const cb = () => new Engineer("Karl", 123, "karl@gmail.com", ["karl"]);
            expect(cb).toThrow("Parameter 'gitHub' is either not a string or is undefined.");
        });
    });
});