// ------- Прототип объекта

// const objC = {
//     z: 5,
// }
// console.log('objC ', objC);

// const objB = Object.create(objC)
// objB.y = 2;
// console.log('objB ', objB);

// const objA = Object.create(objB)
// objA.x = 1;
// console.log('objA ', objA);


const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
dummyObj.message = 'Это собственное свойство объекта';
console.log('dummyObj', dummyObj);

console.log(dummyObj.message);

// Алгоритм поиска свойства в цепочке прототипов:
//   1. Поиск начинается в собственных свойствах
//   2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
//   3. Поиск прекращается при первом совпадении (есть такое свойство)
//   4. Возвращается значение свойства


const objA = Object.create({ z: 5 });
objA.y = 100;
console.log('objA', objA);

console.log(objA.x);



// ----- Основы ООП (бъектно-ориентированное программирование):
// класс, экземпляр(объект), интерфейс

const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config;
  // 2. Функция вызывается в контексте созданного объекта,
  //    то есть в this записывается ссылка на него
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :) ');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
console.log(myCar);

myCar.sayHi();
myCar.changePrice(10000);

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);

myCar2.sayHi();

const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
console.log(myCar3);

myCar3.sayHi();



// ------------------
const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

// console.log(User.prototype);

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

const mango = new User({ email: 'mango@mail.com', password: 1111111 });

mango.changeEmail('my-new-mail@mail.com');
console.log(mango);


// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литерала обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция 
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта, то есть ее this ссылается на тот обьект
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()


// Статические свойства и методы доступны только на самом конструкторе
// В статических методах не нужен this

console.log(Math.round(5.1));
console.log(Math.PI);

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
};

console.dir(User);
User.logInfo(mango);


// Object.keys()
// Object.value()