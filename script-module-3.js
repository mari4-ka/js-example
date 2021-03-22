
//==3=41===============================================================
// const atTheOldToad = {
//     potions: [
//         { name: 'Зелье скорости', price: 460 },
//         { name: 'Дыхание дракона', price: 780 },
//         { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         for (const potion of this.potions) {
//             if (potion.name === potionName.name) {
//                 return `Зелье ${potionName} уже есть в инвентаре!`;
//             }
//             this.potions.push(potionName);
//         }
//     },
//     removePotion(potionName) {

//         for (const potion of this.potions) {
//             if (potion.name === potionName) {
//                 this.potions.splice(this.potions.indexOf(potion), 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {

//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName
//             }
//         }
//     },
// };

//remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log('item to delete is', productName);

//         items.splice(i, 1);
//       }
//     }
//   },


// console.table(atTheOldToad.getPotions()); // метод для получения всех зелий. Возвращает значение свойства potions.

// atTheOldToad.addPotion({ name: 'frog', price: 150 }); // добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// atTheOldToad.removePotion('Каменная кожа'); // удаляет объект зелья с именем potionName из массива в свойстве potions.
// atTheOldToad.updatePotionName({ name: 'Зелье скорости', price: 460 }, { name: 'bones', price: 250 }); // обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');

// console.table(atTheOldToad.getPotions()); // метод для получения всех зелий. Возвращает значение свойства potions.


//==3=35================================================================
//  Дополни метод updateBook(oldName, newName) так, чтобы он
//  изменял название книги с oldName на newName в свойстве 
//  books.Используй indexOf() для того, чтобы найти нужный 
//  элемент массива, и splice() для того чтобы заменить этот 
//  элемент.

// const bookShelf = {
//     books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//     updateBook(oldName, newName) {
//         // Пиши код ниже этой строки
//         for (const book of this.books) {
//             console.log(book);
//             if (book === oldName) {
//                 this.books.splice(this.books.indexOf(book),1, newName);
//                 console.log(this.books);
//             }
//         }
//     },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));


//==3=33===================================================
// function findMatches(numbers, ...args) {
//     const matches = []; // Не изменяй эту строку
//     for (let arg of args) {
//         if (numbers.includes(arg)) {
//             matches.push(arg);
//         }
//     }
//         return matches;
// }


// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // [1, 2].
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2].
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41].
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // [].

//==3=32==================================================
// function addOverNum(value, ...args) {
// let total = 0;
// for (let arg of args) {
//         if (arg > value) {
//             total += arg;
//         }
//     }
//     return total;
// }
// console.log(addOverNum(50, 15, 27)); // возвращает 0.
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71.
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // возвращает 51.
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // возвращает 218.

//==3=21===================================================
// function add(...args) {
//   let totalSumm = 0;
//   for (let arg of args) {
//   totalSumm += arg;
//   }
//   return totalSumm;
// }

// console.log(add(15, 27)); // возвращает 42.
// console.log(add(12, 4, 11, 48)); // возвращает 75.
// console.log(add(32, 6, 13, 19, 8)); // возвращает 78.
// console.log(add(74, 11, 62, 46, 12, 36)); // возвращает 241.

//==3=30====================================================
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//     const priority = 'Обычный';
//     const compareData = { category, priority, ...data, completed, };
//     return compareData;
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь'}));
// console.log(makeTask({ text: 'Купить хлеб' }));


//==3=25=======================================================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//     today: {
//         low:lowToday,
//         high:highToday,
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     }, tomorrow: {
//         low:lowTomorrow,
//         high:highTomorrow,
//         icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     },
// } = forecast;

// console.log(lowToday);
// console.log(lowTomorrow);
// console.log(highToday);
// console.log(tomorrowIcon);
// console.log(highTomorrow);

//==3=24=======================================================
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     const { hex, rgb } = color;
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


//==3=20=======================================================
//  Напиши функцию calculateTotalPrice(productName) которая 
//  принимает один параметр productName - название товара. Функция 
//  должна вернуть общую стоимость(цена * количество) товара с 
//  таким именем из массива products.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//   let totalPrice = 0;

//   for (const product of products) {
//     // console.log(product);
//     // console.log(product.name);

//     if (product.name === productName) {
//       // console.log(product.price);

//       totalPrice += product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice('Бластер')); //возвращает 0.
// console.log(calculateTotalPrice('Радар')); //возвращает 5200.
// console.log(calculateTotalPrice('Дроид')); //возвращает 2800.
// console.log(calculateTotalPrice('Захват')); //возвращает 10800.
// console.log(calculateTotalPrice('Сканер')); //возвращает 8100.

//==3=19=====================================================
//  Напиши функцию getAllPropValues(propName) которая принимает 
//  один параметр propName - имя(ключ) свойства.Функция должна 
//  вернуть массив всех значений свойства с таким именем из 
//  каждого объекта в массиве products.Если в объектах нет 
//  свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   const arr = [];

//   for (let product of products) {
//     // console.log(product);
//     if (product[propName]) {
//       // console.log(propName);
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }

// console.log(getAllPropValues('name')); // ['Радар', 'Сканер', 'Дроид', 'Захват'].
// console.log(getAllPropValues('quantity')); // [4, 3, 7, 9].
// console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200].
// console.log(getAllPropValues('category')); // [].


//==3=18=========================================================
//  Напиши функцию getProductPrice(productName) которая принимает 
//  один параметр productName - название продукта. Функция ищет 
//  объект продукта с таким именем(свойство name) в массиве 
//  products и возвращает его цену(свойство price). Если продукт 
//  с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар')); // возвращает 1300.
// console.log(getProductPrice('Захват')); // возвращает 1200.
// console.log(getProductPrice('Сканер')); // возвращает 2700.
// console.log(getProductPrice('Дроид')); // возвращает 400.
// console.log(getProductPrice('Двигатель')); // возвращает null.


//==3=17========================================================
//  Перебери массив объектов colors используя цикл for...of.
//  Добавь в массив hexColors значения свойств hex, а в массив 
//  rgbColors значения свойств rgb из всех объектов массива 
//  colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = []; 
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   console.log(hexColors);

//   rgbColors.push(color.rgb);
//   console.log(rgbColors);
// }

// console.log(hexColors);// ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
// console.log(rgbColors);// ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].

//==3=16=======================================================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const salary = Object.values(salaries);
//   console.log(salary);

//   for (let item of salary) {
//     totalSalary += item;
//   }

//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));// возвращает 330.
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));// возвращает 400.

//==3=14=====================================================
//  Выполни рефакторинг функции countProps(object) используя 
//  метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));


//==3=13====================================================
//  Перебери объект apartment используя метод Object.keys()
//  и цикл for...of. Запиши в переменную keys массив ключей 
//  собственных свойств объекта apartment, и добавь в массив 
//  values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// console.log(keys);

// for (const key of keys) {
//   values.push((apartment[key]));
// }

// console.log(values);

//==3=12==============================================
// function countProps(object) {
//   let propCount = 0;
// for (let key in object) {
//   propCount += 1;
// }
//   return propCount;
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// ==Работем=с=коллекцией=товаров=в=корзине:===========
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         console.log('this product is alredy in cart', product,name)
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log('item to delete is', productName);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total price: ', cart.countTotalPrice());

// cart.remove('🍓');

// cart.clear();


//==деструктуризиция===============================================
// const autors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// }

// const entries = Object.entries(autors);

// for (const [names, values] of entries) {
//   console.log(names, values);
// }

//==friends========================================================
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);


//--return-2-array-of-friends-by-status--------------------------
// const getFriendsByStatus = function (allFriens) {

//   const frindsStatus = {
//     oflineFriends: [],
//     onlineFriends: [],
//   }

//   for (const friend of allFriens) {

//     // if (friend.online) {
//     //   frindsStatus.onlineFriends.push(friend);
//     // } else {
//     //   frindsStatus.oflineFriends.push(friend);
//     // }
//     if (friend.online) {
//       frindsStatus.onlineFriends.push(friend);
//       continue;
//     }
//       frindsStatus.oflineFriends.push(friend);
//   }
//   return frindsStatus;
// }

// console.log(getFriendsByStatus(friends));

//--return-array-of-ofline-friends----------------------------
// const getOflineFriends = function (allFriens) {
//   const oflineFriends = [];

//   for (const friend of friends) {

//     if (!friend.online) {
//       oflineFriends.push(friend);
//     }

//   }
//   return oflineFriends;
// }
// console.log(getOflineFriends(friends));


//--return-array-of-online-friends----------------------------
// const getOnlineFriends = function (allFriens) {
//   const onlineFriends = [];

//   for (const friend of allFriens) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// }
// console.log(getOnlineFriends(friends));


//--return-only-names----------------------------------------
// const friendName = function (allFriens) {
//     const names = [];
//     for (let friend of allFriens) {
//         names.push(friend.name);
//     }
//     return names;
// }
// console.log(friendName(friends))


//--find-a-friend--------------------------------------------
// const findFriendByName = function (allFriens, friendName) {
//     for (let friend of allFriens) {
//         if (friend.name === friendName) {
//             return `${friendName} is found`;
//         }
//         return `${friendName} is not found`;
//     }
// }
// console.log(findFriendByName(friends, 'Poly'))
// console.log(findFriendByName(friends, 'Chelsy'))