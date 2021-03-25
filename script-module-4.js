//==4=10============================================================================
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.


// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


//==4=9=========================================================
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// pizzaPalaceComposer('Манго');
// burgerShackComposer('Поли');


//==4=7====================================================================
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// // const messages = orders.map(( orders, i) => composeMessage.call(orders, i + 1));
// const messages = orders.map(function (orders, i) {
//   return composeMessage.call(orders, i + 1);
// });

// console.log(messages);

//==map========================================================
//--дано-массив-каждое-число-нужно-умножить-на-2---------------
// let a = [3, 4, 5]
// let b = [];
// for (let i = 0; i < a.length; i += 1) {
//   b[i] = a[i] * 2;
// }
// console.log(a); // [3, 4, 5]
// console.log(b); // [6, 8, 10]

// //-шаблон-----------------------------------------------------
// let b = a.map(function (currentValue, index, array) {
//   return newArray;
// });

// //-решение-----------------------------------------------------
// let c = a.map((x) => x*2);

// let c = a.map(function (x) {
//   return x*2;
// });
// console.log(c);


//==4=6========================================================
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


//==4=5===========================================================
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(pizzaPalace.order('Аль Копчино')); //'Заказ принят, готовим пиццу «Аль Копчино».'.
// console.log(pizzaPalace.order('Четыре нарезона')); //'Заказ принят, готовим пиццу «Четыре нарезона».'.
// console.log(pizzaPalace.order('Биг майк')); //'В ассортименте нет пиццы с названием «Биг майк».'.
// console.log(pizzaPalace.order('Венская')); //'В ассортименте нет пиццы с названием «Венская».'.

//==4=4==========================================================
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, makePizza, onOrderError) {

//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);     
//   }
// };

// // Пиши код выше этой строки
// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }
// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));


//==4=2========================================================
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza)); // 'Пицца Роял гранд готовится, ожидайте...'.
// console.log(makeMessage('Ультрасыр', deliverPizza)); // 'Доставляем пиццу Ультрасыр.'.


//==================================================================
// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

//==написати=arrow==function=======================================
//--дано-----------------------------------------------------------
// const add = function (a, b, c) {
//     console.log(a, b, c)
//     return a + b + c;
// };
// console.log(add(5, 10, 15));
//--промежуточный-вариант------------------------------------------
// const add = (a,b,c) => {
//     console.log(a, b, c)
//     return a + b + c;
// };
// console.log(add(5, 10, 15));

//--итог-1-с-неявным-возвратом--------------------------------------
// const add = (a, b, c) => a + b + c;
// console.log(add(5, 10, 15));

//==приклад=з=конспекту=============================================

// const repeatLog = function (n) {
//   for (let i = 1; i <= n; i += 1) {
//     console.log(i);
//   }
// };
// repeatLog(9);