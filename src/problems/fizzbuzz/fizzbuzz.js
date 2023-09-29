// FizzBuzz Problem
// Write a program that prints numbers from 1 to a user-defined limit.
// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// Function to generate and display FizzBuzz numbers
// Get references to HTML elements
const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("output");

// Add an event listener to the submit button
submitButton.addEventListener("click", () => {
    // Get the user's input as a number
    const userInput = parseInt(numberInput.value);

    // Check if the input is a valid positive integer
    if (!isNaN(userInput) && userInput > 0) {
        // Clear previous output
        outputDiv.innerHTML = "";

        // Loop from 1 to the user's input
        for (let i = 1; i <= userInput; i++) {
            let result = "";

            // Check for multiples of 3 and 5
            if (i % 3 === 0 && i % 5 === 0) {
                result = "FizzBuzz";
            } 
            // Check for multiples of 3
            else if (i % 3 === 0) {
                result = "Fizz";
            } 
            // Check for multiples of 5
            else if (i % 5 === 0) {
                result = "Buzz";
            } 
            // Otherwise, use the number itself
            else {
                result = i;
            }

            // Create a new paragraph element for each result and append it to the output
            const paragraph = document.createElement("p");
            paragraph.textContent = result;
            outputDiv.appendChild(paragraph);
        }
    } else {
        // Display an error message if the input is invalid
        outputDiv.innerHTML = "Please enter a valid positive number.";
    }
});
