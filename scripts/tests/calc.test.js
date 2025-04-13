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
        // This is our second test. We're expecting the sum of 42 and 31 to be 73.
        // This will also fail because the addition function is still hardcoded.
        // Having multiple failing tests helps confirm that the function
        // needs to be refactored to handle dynamic input.
        test("should return 73 for 42 + 31", () => {
            // This is our assertion: we're telling Jest that we expect
            // the result of calling addition(42, 31) to be 73.
            // Since the addition function doesn't accept parameters yet,
            // this test will fail — that's expected in the Red phase.
            expect(addition(42, 31)).toBe(73);
        });
        // This test checks what happens if no arguments are passed to the addition function.
        // Currently, undefined + undefined returns NaN in JavaScript.
        // We expect the function to return NaN in this case.
        test("should return NaN if no parameters are passed", () => {
            // This assertion checks how the addition function behaves when called with no arguments.
            // Since JavaScript treats undefined + undefined as NaN, we expect the result to be NaN.
            // This helps ensure the function handles missing parameters in a predictable way.
            expect(addition()).toBeNaN();
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