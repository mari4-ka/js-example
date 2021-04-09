// "const result = array.method(callback)

// if (result_type === ""Ничего - нам нужно только какое-то действие (напр. вывести элемент массива в консоль, повесить коллбэк на элемент)"") {
//   return 'forEach'
// } else if (result_type === 'Массив такой же длины, но с измененными элементами (не обязательно всеми)') {
//   return 'map' || 'flatMap'
// } else if (result_type === 'Массив меньшей длины, в каком отфильтрованы определенные элементы') {
//   return 'filter'
// } else if (result_type === 'true или false в зависимости от условия, которое валидно для одного элемента массива') {
//   return 'some'
// } else if (result_type === 'true или false в зависимости от условия, которое валидно для каждого элемента массива') {
//   return 'every'
// } else if (result_type === 'Один элемент массива, какой соответствует определенному условию') {
//   return 'find'
// } else if (result_type === 'Индекс элемента массива, какой соответствует определенному условию') {
//   return 'findIndex'
// } else {
//   /*
//     Examples:
//       - Получить одно значение, основанное на элементах массива (например, сумма элементов)
//       - Получить обьект или какую либо другую структуру данных, основанную на данном массива
//   */
//   return 'reduce' || 'reduceRight'
// }"



//====================================================================================================================

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const value = Object.values(salary);
// console.log(value)

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);


//==основа для задач 18-23, 25, 27, 29, 32, 33, 38, 39, 42-44 =============
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
//==6=44===================================================================
// const getTotalBalanceByGender = (users, gender) =>
//     [...users].filter((user) =>
//         user.gender === gender).reduce((total, user) =>
//             total + user.balance, 0);

// const gender = 'male';
// console.log(getTotalBalanceByGender(users, gender));


//==6=43===================================================================
// const getSortedFriends = users => [...users].flatMap((user) => user.friends).sort((a, b) => a.localeCompare(b)).filter((a, index, array) => array.indexOf(a) === index);
// console.log(getSortedFriends(users));

//==6=42===================================================================
// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name)

//==6=41===================================================================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter((book) => book.rating >= MIN_BOOK_RATING).sort((a, b) => a.author.localeCompare(b.author)).map((book) =>
//             book.author);
// console.log(names);


//==6=40===================================================================
// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));


//==6=39===================================================================
// const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length);


//==6=38===================================================================
// const sortByAscendingBalance = users => users.sort((a, b) => a.balance - b.balance);


//==6=37===================================================================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.table(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// console.table(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.table(sortedByAscendingRating);

// const sortedByDescentingRating  = [...books].sort((a, b) => b.rating - a.rating);
// console.table(sortedByDescentingRating );


//==6=36===================================================================
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
  
// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

//==6=35===================================================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//==6=34===================================================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

//==6=33===================================================================
// const getTotalFriendCount = users => users.reduce((total, user) => {
//     return total + user.friends.length;
// }, 0);
// console.log(getTotalFriendCount(users));


//==6=32===================================================================
// const calculateTotalBalance = users => users.reduce((total, user) => {
//     return total + user.balance;
// }, 0);

// console.log(calculateTotalBalance(users));

//==6=31===================================================================
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     return total + (player.playtime / player.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame)


//==6=30===================================================================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, value) => {
//   return total + value;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;


//==6=29===================================================================
// const isAnyUserActive = users => users.some(user => user.isActive === true)

//==6=28===================================================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);
// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);
// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);

//==6=27===================================================================
// const isEveryUserActive = (users) => users.every(user => user.isActive === true)
// console.log(isEveryUserActive(users))

//==6=26===================================================================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// // результат проверки всех элементов массива firstArray на чётность.
// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
// console.log(eachElementInFirstIsEven)

// // результат проверки всех элементов массива firstArray на нечётность.
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);
// console.log(eachElementInFirstIsOdd)

// // результат проверки всех элементов массива secondArray на чётность.
// const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
// console.log(eachElementInSecondIsEven)

// // результат проверки всех элементов массива secondArray на нечётность.
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);
// console.log(eachElementInSecondIsOdd)

// // результат проверки всех элементов массива thirdArray на чётность.
// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
// console.log(eachElementInThirdIsEven)


// // результат проверки всех элементов массива thirdArray на нечётность.
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);
// console.log(eachElementInThirdIsOdd)


//==6=25===================================================================
// Дополни функцию getUserWithEmail(users, email) так, чтобы
// она возвращала объект пользователя, почта которого(свойство email) 
// совпадает со значением параметра email.

// const getUserWithEmail = (users, email) => users.find(user => user.email === email)


//==6=24===================================================================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle)
// console.log(bookByAuthor)


//==6=23==========================================================
// const getInactiveUsers = (users) => users.filter(user => !user.isActive)
// console.log(getInactiveUsers(users));


//==6=22===========================================================
// возвращала массив активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) => users.filter(user => user.isActive)
// console.log(getActiveUsers(users));

// мое неправильное решение
// // const getActiveUsers = (users) => {
// //     const activeUsers = users.filter(user => user.isActive)
// //     const uniqueUsers = activeUsers.flatMap(user => user.name)
// //     return uniqueUsers
// // }
// // console.log(getActiveUsers(users));


//==6=21===========================================================
// const getFriends = (users) => {
// const allFriends = users.flatMap(user => user.friends)
// const uniqueFrinds = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// return uniqueFrinds
// }

// console.log(getFriends(users));

//==6=20===========================================================
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
// console.log(getUsersWithFriend(user, 'Briana Decker'))

//==6=19===========================================================
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

//==6=18===========================================================
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

//==6=17===========================================================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


//==6=16===========================================================
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
    
// console.log(uniqueGenres)

//==6=15===========================================================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

//==6=14===========================================================
// const getUserEmails = users => users.map((user) => user.email);

//==6=13===========================================================
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = users => users.map((user) => user.name);
// console.log(getUserNames(users))

//==6=12===========================================================
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   const genres = books.flatMap((book) => book.genres);

//==6=11===========================================================
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
 
//   const titles = books.map(book => book.title);

//6=10============================================================
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

//==6=9============================================================
// function changeEven(numbers, value) {
//     const newArray = [];

//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newArray.push(number + value);
//         } else {
//             newArray.push(number);
//         }
//     });

//     return newArray;
    
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // возвращает новый массив [1, 12, 3, 14, 5].
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16].
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый массив [17, 124, 168, 31, 142].
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154].

//==6=8=============================================================
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     return commonElements;
//   }

//==6=7============================================================
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76].

//==6=6============================================================
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116.

//==6==5============================================================
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//==6=4=============================================================
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }

//==6=3=============================================================
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
  
//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает [].


//==6=2=============================================================
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (value < number) {
//             filteredNumbers.push(number);
//         }
//     });

//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76].

//==6=1==============================================================
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//     orderedItems.forEach(i => {
//         totalPrice += i;
//     });
    
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116.


//-----------------------------------------------------------------------------------------------------------------------------------
//--пример с лекции-----найти Sheree Anthony------isActive: false---------
// const findName = 'Sheree Anthony';
// const changeStatus = users.map(user => {
//     if (user.name === findName) {
//         return {
//             ...user,
//             isActive: user.isActive === false,
//         }
//     }
//     return user;
// }
// )
// console.table(changeStatus);

//-----коротко---------------------------------------
// const findName = 'Sheree Anthony';
// const changeStatus = users.map(user =>
//     user.name === findName
//         ? { ...user, isActive: user.isActive === false }
//         : user,
// );
// console.table(changeStatus);

//--список-статус-тру----------------------------------------
// const activeStatus = users.filter(user => user.isActive)
// console.table(activeStatus);

//-------пример с лекции--------------------------------------
// const res = users.map(user => {
//     return {
//         name: user.name,
//         gender: user.gender,
//     };
// });
// console.log(res);
//------короче------------------
// const res = users.map(({ name, gender }) => ({ name, gender }));
// console.log(res);


//-пример с лекции--копия---только баланс умножен на 3------------------------------
// const update = users.map(user => {
//     return {
//         ...user,
//         balance: user.balance *3,
//     }
// })
// console.table(update);
//--------короче-------------------
// const update = users.map(user => ({
//     ...user,
//     balance: user.balance * 3,
// }));
// console.table(update);

//==пример с конспекта=============================================
// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];
// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
// console.log(users.sort(sortByActiveDays));