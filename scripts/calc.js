// This is the addition function we're testing.
// Right now it just returns 42 — it's a placeholder
// so that our first test will fail (Red phase).
function addition() {
    return 42;
};
// Exporting the function so it can be imported in our test file
module.exports = addition;