// //зачачки от Кречика
// function log1(value1, value2) {
//   const res = `Log value1 is ${value1} and value2 is ${value2}`
//   console.log(res)
// }

// const log2 = function (value1, value2) {
//   const res = `Log value1 is ${value1} and value2 is ${value2}`
//   console.log(res)
// }

// function log3(value) {
//   const res = `Log value is ${value}`
//   console.log(res)
// }

// function log4() {
//   const res = 'This is some log value'
//   console.log(res)
// }

// function log5(value) {
//   console.log(value)
// }

// function multiple2(value) {
//   return value * 2
// }


// const numbers = [1, 2, 3];
// // const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]



//задачи и примеры с модуля 1-4 переписать на стрелочные ф-ии

// const toLower = (string) => {
//   const letters = string.split('');
//   let inverseString = ' ';

//   for (let letter of letters) {
//     inverseString +=
      
//       letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }

//   return inverseString;
// }

// console.log(toLower('JavaScript'));
// console.log(toLower('MiCrOsOfT'));
// console.log(toLower('GoogLe'));
// console.log(toLower('Java'));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const findSmallNumber = numbers => {
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
//   return smallestNumber;
// }
// console.log(`smallest number is: ${findSmallNumber([51, 18, 13, 24, 7, 85, 19])}`);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const logItems = items => {
//   for (let item of items) {
//     console.log(item);
//   }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);