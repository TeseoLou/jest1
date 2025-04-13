// This is the real addition function.
// It now takes two arguments and returns their sum.
// This change allows our previously failing tests to pass (Green phase).
function addition(num1, num2) {
    return num1 + num2;
};
// Exporting the function so it can be imported in our test file
module.exports = addition;