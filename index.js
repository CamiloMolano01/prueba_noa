/**
 * Calculate the median of a array of numbers
 *
 * @param array array of numbers
 * @returns {number}
 */
const median = (array) => {
    array.sort(); // Sort the array from smallest to greatest
    const mid = array.length / 2; // Get the half position of the array
    if (array.length % 2 === 0) { // Determine if array size is even or odd
        return (array[mid - 1] + array[mid]) / 2; // Return the average of the 2 mid values
    } else {
        return array[(mid + .5) - 1]; // Return the median value of the array
    }
}


/**
 * Calculate the quantity of warnings
 *
 * @param n number of days of transaction data
 * @param d trailing day's data
 * @param array array of numbers
 * @returns {number} warnings
 */
const warnings = (n, d, array) => {
    let count = 0; // Counter of warnings
    for (let i = d; i < n; i++) { // For since d, until n, one by one
        // Getting the median with the function for a array's slice since i-d until i
        let mid = median(array.slice(i - d, i));
        // Determine if the value in the position i is at least the double that the mid value ...
        // ... of the array's slice
        if (array[i] >= (2 * mid)) {
            count++;
        }
    }
    return count;
}


/**
 * Nodejs module for read lines in console
 *
 * @type {Interface}
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Use readline inside readline to read two lines
readline.once("line", line1 =>
    readline.once("line", line2 => {
        // Getting the first position (n) of the line and cast to number
        let n = Number(line1.split(" ")[0]);
        // Getting the second position (d) of the line and cast to number
        let d = Number(line1.split(" ")[1]);
        // Getting the array of the second line and use map function to cast all positions to number
        let array = line2.split(" ").map(Number);
        console.log(warnings(n, d, array)); // Calling the principal function and print it
        readline.close(); // Close the readline to finish the program
    })
);