// Importing the addition function from our calc.js file
const addition = require("../calc");
// Describe block groups related tests for our Calculator
describe("Calculator", () => {
    // Nested describe block for the 'addition' function
    describe("addition function", () => {
        // This is our first test. We're deliberately writing it
        // to expect a specific result: 20 + 22 = 42.
        // Since the addition function doesn't take arguments yet,
        // this test will fail. That's intentional — part of the Red phase.
        test("should return 42 for 20 + 22", () => {
            // This is our assertion: we're telling Jest that we expect
            // the result of calling addition(20, 22) to be 42.
            // Since the addition function doesn't accept parameters yet,
            // this test will fail — that's expected in the Red phase.
            expect(addition(20, 22)).toBe(42);
        });
    });
    // Placeholder for subtract function tests (to be added later)
    describe("subtract function", () => {

    });
    // Placeholder for multiply function tests
    describe("multiply function", () => {

    });
    // Placeholder for divide function tests
    describe("divide function", () => {

    });
});