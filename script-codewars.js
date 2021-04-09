// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you 
// must multiply the digits in num until you reach a single digit.




// function persistence(numbers) {

    
// }
// function splitMessage(numbers, delimeter) {
//   let number;
//   number = numbers.split(delimeter);
//     return number;
// }

// splitMessage(345, '');

// persistence(39) // === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit          
// persistence(999) // === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
// persistence(4) // === 0 // because 4 is already a one-digit number

//-------------------------------------------------------------------------------
// Create a function that returns the sum of the two lowest positive 
// numbers given an array of minimum 4 positive integers. No floats 
// or non - positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], 
// the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//     numbers.sort(function(a, b){return a - b});
//     return numbers[0] + numbers[1];
// }

// function sumTwoSmallestNumbers(numbers) {
//     let min1 = numbers[0];
//     let min2 = numbers[1];
//     let temp;
//     for (let i = 2; i < numbers.length;i++) {
//         if (min2 < min1) {
//             temp = min1;
//             min1 = min2;
//             min2 = temp;
//         }
//         if (numbers[i] < min2) {
//             min2 = numbers[i];
//         }
//     }
//     return min1+min2;
// }


// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6

// function sumTwoSmallestNumbers(numbers) {
//     let firstSmallNumber = numbers[0];
//     let secondSmallNumber = numbers[1];

//     for (const number of numbers) {
//         if (number < firstSmallNumber) {
//             firstSmallNumber = number;   
//         }        
//     }
    
//     for (const number of numbers) {
//         if (number < secondSmallNumber && number !== firstSmallNumber) {
//             secondSmallNumber = number;
//         }        
//     }

//     return firstSmallNumber + secondSmallNumber;
// }

//-------------------------------------------------------------------

//Complete the square sum function so that it squares each number
//passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// const numbers = [1, 2, 2];

// function squareSum(numbers) {
//     let totalSumm = 0;
//     for (let i = 0; i < numbers.length; i += 1) {
//         totalSumm += numbers[i] ** 2;
//     }
//     return totalSumm;
// }

// console.log(squareSum([1, 2]));
// console.log(squareSum([0, 3, 4, 5]));