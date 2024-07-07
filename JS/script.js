
// Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled.
//  Assign this function to a variable called doubleArray.  

const doubleArray = function (arr) {
  return arr.map(function (num) {      //.map() new learned.
    return num * 2;
  });
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers);
console.log(doubledNumbers);


// Define a function expression factorial that takes one number as a parameter 
// and returns its factorial


const factorial = function(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);}; 
    // (ternary operator use chethitund)



 // Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)
   function calculateFactorial(n) {
        if (n < 0) {
            throw new Error("Input must be a non-negative integer.");     //throw new error is smtng new i learned.
        } else if (n == 0 || n == 1) {    //(is it necessary it has to be ===?)
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }