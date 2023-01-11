const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Object initialization", () => {
        it("should return that instanceof Employee is true when a new object is created with the constructor", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");

            expect(obj instanceof Employee).toEqual(true);
        });
    });
    describe("Attributes", () => {
        it("Should have correct types for each key", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const testName = typeof obj.name;
            const testEmail = typeof obj.email;
            const result = "string";

            expect(testName).toEqual(result);
            expect(testEmail).toEqual(result);
        });

        it("should have a number for id", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const testId = typeof obj.id;
            const result = "number";

            expect(testId).toEqual(result);
        });
    });
    describe("Methods", () => {
        it("should return this.name with getName()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = "Karl";
            
            const getName = obj.getName();

            expect(getName).toEqual(result);
        });

        it("should return this.id with getId()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = 123;
            
            const getId = obj.getId();

            expect(getId).toEqual(result);
        });

        it("should return this.email with getEmail()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = "karl@gmail.com";
            
            const getEmail = obj.getEmail();

            expect(getEmail).toEqual(result);
        });

        it("should return 'Employee' with getRole()", () => {
            const obj = new Employee("Karl", 123, "karl@gmail.com");
            const result = "Employee";

            const getRole = obj.getRole();

            expect(getRole).toEqual(result);
        });
    });
});

// writing about interactions and behaviors; when i write this, i should get this.

// https://kentcdodds.com/blog/write-tests