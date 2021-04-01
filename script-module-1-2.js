
//==================================================================================================
//-------------------------------------------------------------------------------------------------

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
//   console.log(fruit.length);
// }
// console.log(fruits.length);
// console.table(fruits);

//==================================================================================================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//        filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];

//   if (number > value) {
//     filteredNumbers.push(number);
//   }
// }


//==================================================================================================
// const toLower = function (string) {
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


//==================================================================================================
// const findSmallNumber = function (numbers) {
// let smallestNumber = numbers[0];
//
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
//   return smallestNumber;
// }
// console.log(`smallest number is: ${findSmallNumber([51, 18, 13, 24, 7, 85, 19])}`);


//==переписать==================================================================================================
// const Logins = ['PolyRoot', 'AjaxBlue', 'MangoSky', 'BillyRed'];

// const findLogin = function (allLogins, loginToFind) {
//   let message = `no, login ${loginToFind} is not found :(`;
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = `yes, login ${loginToFind} is found`;
//       return message;
//     }
//   }
//   return message;
// }

//--так-лучше----------------------------------------------------------------------------------------------
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `yes, login ${loginToFind} is found`;
//     }
//   }
//   return `no, login ${loginToFind} is not found :(`;
// }

//--тернарник-----------------------------------------------------------------------------------------------
// const findLogin = function (allLogins, loginToFind) {
// return allLogins.includes(loginToFind)
//       ? `yes, login ${loginToFind} is found`
//       : `no, login ${loginToFind} is not found :(`;
//   }

// console.log(findLogin(Logins, 'PolyRoot'));
// console.log(findLogin(Logins, 'AjaxBlue'));
// console.log(findLogin(Logins, 'lsmasdkj'));
// console.log(findLogin(Logins, 'ccl'));


//==================================================================================================
// const logItems = function (items) {
//   for (let item of items) {
//     console.log(item);
//   }
// }
//
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);


//==переписать=используя=функцию====================================================================
// const calcTotalPrice = function (price) {
//   console.log(`array for summ : ${price}`);
//   let total = 0;
//
//   for (const value of price) {
//   total += value;
//   }
//
//   return total;
// }
//
// console.log(`total summ: ${calcTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90])}`)


//==2=23===============================================================================================
// function filterArray(numbers, value) {
// const newArray = [];
//
//   for (let number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
// return newArray;
// }
//
// console.log(filterArray([1, 2, 3, 4, 5], 3))


//==================================================================================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
//   }
 
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))


//==homework=2=11==============================================================================================
// function calculateEngravingPrice(message, pricePerWord) {
//   const devidedMessage = message.split(' ');
//   const numberOfWords = devidedMessage.length;
//   return numberOfWords * pricePerWord;
// }
//
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));

//==================================================================================================
// const cards = [
//   'card-1',
//   'card-2',
//   'card-3',
//   'card-4',
//   'card-5'
// ];

//--delete-card-3---------------------------------------------------------------------------------------------
// const cardToRemove = 'card-3';
//
// console.log(`card to remove is '${cardToRemove}'`);
// const cardIndex = cards.indexOf(cardToRemove);
// console.log(`index of this card is '${cardIndex}'`);
// const cardDel = cards.splice(cardIndex, 1);
//
// console.log(`removed card is '${cardDel}'`);
// console.log(`now cards look like '${cards}'`)

//--incert-card-6---------------------------------------------------------------------------------------------
// const cardToInsert = 'card-6';
//
// console.log(`card to insert is '${cardToInsert}'`);
// const cardsNew = cards.splice(cards.length, 0, cardToInsert);
//
// console.log(`added card is '${cardToInsert}'`);
// console.log(`now cards look like '${cards}'`)

//--update-card-4---------------------------------------------------------------------------------------------
// const cardBfUpdate = 'card-4';
// const cardAfUpdate = 'card-4.4';
//
// const cardIndex = cards.indexOf(cardBfUpdate);
// console.log(`card '${cardBfUpdate}' used to be updated to '${cardAfUpdate}'`);
// console.log(`index of updared card is '${cardIndex}'`);
// const cardNew = cards.splice(cardIndex, 1, cardAfUpdate);
//
// console.log(`now cards look like '${cards}'`)


//==сумма=массивов==============================================================================================
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
//
// const numbers = array1.concat(array2);
// console.log(numbers);
// let total = 0;
//
// for (let number of numbers) {
//   total += number;
// }
//
// console.log(`Total summ is ${total}`);


//==замена=регистра=каждого=слова=и=тире=вместо=пробела==============================================
//--мой-вариант--------------------------------------------------------------------------------------
// const title = 'Top 10 benefits of React framework';
//
// const lowerTitle = title.toLowerCase();
// const titleLowerSplited = lowerTitle.split(' ');
// const titleDash = titleLowerSplited.join('-');
//
// console.log(titleDash);

//--цепочка-----------------------------------------------------------------------------------------
// const title = 'Top 10 benefits of React framework';
//
// const normalizedTitle = title.toLowerCase().split(' ').join('-');
//
// console.log(normalizedTitle);


//==замена=регистра=каждого=символа=================================================
// const word = 'JavaScript';
// const letters = word.split('');
// console.log(letters);
// let inverseLetter = ' ';
// let inverseString = ' ';

// // --первый-вариант-------------------------------------------------------------------------------
// for (let letter of letters) {
//   console.log(letter);
//
//   if (letter === letter.toLowerCase()) {
//     // console.log('it is a lower case letter');
//     let inverseLetter = letter.toUpperCase();
//     console.log(inverseLetter);
//
//   } else {
//     // console.log('it is a upper case letter');
//     let inverseLetter = letter.toLowerCase();
//     console.log(inverseLetter);
//   }
// }

// // --второй-вариант-------------------------------------------------------------------------------
// for (let letter of letters) {
//
//   if (letter === letter.toLowerCase()) {
//     console.log(`this letter is lowercase - ${letter}`)
//     inverseString += letter.toUpperCase();
//
//   } else {
//     console.log(`this letter is uppercase - ${letter}`)
//     inverseString += letter.toLowerCase();
//   }
// }
//
// console.log(inverseString);

// // --третий-вариант-------------------------------------------------------------------------------
// for (let letter of letters) {
//   inverseString = letter === letter.toLowerCase() ?
//     inverseString += letter.toUpperCase() :
//     inverseString += letter.toLowerCase();
// }
//
// console.log(inverseString);

// // --четвертый-вариант-------------------------------------------------------------------------------
// for (let letter of letters) {
//   inverseString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
//
// console.log(inverseString);


// //==соединение=строк===два=варианта=============================================================
// --вариант-первый-сложный------------------------------------------------------------------------------
// const userLogins = ['PolyRoot', 'AjaxBlue', 'MangoSky', 'BillyRed'];
// let string = '';
//
// for (let userLogin of userLogins) {
//   string += userLogin + ',';
// }
//
// string = string.slice(0, string.length - 1);
//
// console.log(string);

// --вариант-второй-правильный------------------------------------------------------------------------------
// const userLogins = ['PolyRoot', 'AjaxBlue', 'MangoSky', 'BillyRed'];
//
// string = userLogins.join(',');
//
// console.log(string);


//==найти=самое=большое=число=в=массиве=================================================================
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];
//
// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
//
// console.log(`i found the biggest number - ${biggestNumber}`)

//==найти=самое=маленькое=число=в=массиве=================================================================
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log(`${smallestNumber} is a smallest number`);

//==соединение=двух=массивов====================================================================
// const a = [8, 4, 9];
// const b = [34, 48, 54];
//
// const c = a.concat(b);
//
// console.log(c);

//========================================================================
// const userLogins = ['PolyRoot', 'AjaxBlue', 'MangoSky', 'BillyRed'];
// const loginToFind = 'AjaxBlue';
// let message = '';
//
// for (let i = 0; i < userLogins.length; i += 1) {
//  const userLogin = userLogins[i];
//   if (userLogin === loginToFind) {
//     message = `User ${loginToFind} is found`;
//     break;
//   }
//   message = `User ${loginToFind} not found`;
// }
//
// console.log(message);

//==сумма=четных==========================================================
// const card = [54, 28, 105, 70, 92, 17, 120, 38, 45, 98];
// let total = 0;
//
// for (const value of card) {
//   if (value % 2 === 0) {
//     total += value;
//   }
// }
//
// console.log('Total payment:', total);


//========================================================================
// const card = [54, 28, 105, 70, 92, 17, 120, 38, 45, 98];
// let total = 0;
// console.table(card);
//
// for (let i = 0; i < card.length; i += 1) {
//   total += card[i];
// }
//
//   console.log('Total payment:', total);

//--тоже-самое-только-короче----------------------------------------------------------------------------
// const card = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
//
// for (const value of card) {
//   total += value;
// }
//
// console.log('Total payment:', total);

//--добавить-налог-------------------------------------------------------------------------------------
// const card = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// console.table(card);
//
// for (let i = 0; i < card.length; i += 1) {
//   total += Math.round(card[i] * 1.1);
// }
//
//   console.log('Total payment:', total);


//==перебор=элементов=массива=в=цикле===================================================================
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const indexNumber = friends.length - 1;
// console.table(friends);
//
// for (let i = 0; i <= indexNumber; i += 1) {
//   console.log(friends[i]);
// }


//========================================================================
// const clients = ['Mango', 'Ajax', 'Poly'];
//
// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }


//========================================================================
// const numbers = [];
//
// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }
//
// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']


//========================================================================
// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;
//
// if (totalSpent >= 1000 && totalSpent < 2000) {
//   console.log('You have Base discount 5%.');
//   discount = 0.05;
//
// } else if (totalSpent >= 2000 && totalSpent < 5000) {
//   console.log('You have Silver discont 10%.');
//   discount = 0.1;
//
// } else if (totalSpent >= 5000 && totalSpent < 10000) {
//   console.log('You have Gold discount 15%.');
//   discount = 0.15;
//
// } else if (totalSpent >= 10000) {
//   console.log('You have Platinum discount 20%.');
//   discount = 0.2;
//
// } else {
//   console.log('Spend more to join our discount club');
//   discount = 0;
// }
//
// payment -= payment * discount;
// console.log(`Total payment is ${payment} credits with discount ${discount * 100}%.`);
// totalSpent += payment;
// console.log(`Total spend is ${totalSpent} credits.`)


//========================================================================
// const min = 3;
// const max = 9;
// let total = 0;
//
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log('Even:', i);
//     continue;
//   }
//
//   console.log('Odd:', i);
//   total += i;
// }
//
// console.log('Total Odd Numbers =', total);


//========================================================================
// const min = 3;
// const max = 9;
// let total = 0;
//
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('Odd:', i);
//     continue;
//   } 
//
//   console.log('Even:', i);
//   total += i;
// }
//
// console.log('Total Even Numbers =', total);


//======================================================================================================
// const minSalary = 500;
// const maxSalary = 5000;
// const employee = 10;
// let totalSalary = 0;
//
// for (let i = 1; i <= employee; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`Salary ${i} employee - ${salary}.`);
//   totalSalary += salary;
// }
//
//    console.log('Total Salary = ', totalSalary);


//======================================================================================================
// let password = '';
//
// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);
//
// console.log('Ввели пароль: ', password);

//======================================================================================================
// alert(Math.round(Math.random() * (20 - 16) + 16));


//======================================================================================================
// alert((0.1*10+0.2*10)/10);


//======================================================================================================
// const signRenew = confirm('продлить подписку?')
// console.log(signRenew);


//======================================================================================================
  // var a = "", b = 7, c = 1, d = 2;
  // alert( a || c || b || d );


//==fizz=buzz============================================================================================
// for (let i = 0; i < 100; i++) {
//   const number = i + 1;
//   console.log(number);
//
//   while (number > 100);
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("fizzbazz");
//   } else if (number % 3 === 0) {
//     console.log("fizz");
//   } else if (number % 5 === 0) {
//     console.log("bazz");
//   }
// }