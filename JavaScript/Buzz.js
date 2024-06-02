function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // Check if the number is a multiple of both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Check if the number is a multiple of 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Check if the number is a multiple of 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // If the number is neither a multiple of 3 nor 5, just print the number
        else {
            console.log(i);
        }
    }
}

// Call the function to print numbers from 1 to 100 according to the FizzBuzz rules
fizzBuzz();
