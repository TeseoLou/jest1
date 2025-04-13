// This is the addition function that takes two arguments, num1 and num2
function addition(num1, num2) {
    // This conditional checks if either num1 or num2 is not a number
    // If so, it returns a message prompting the user to input valid numbers
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Please insert two numbers";
    }
    // If both arguments are valid numbers, return their sum
    return num1 + num2;
};
// Exporting the function so it can be used in other files, like our test file
module.exports = addition;