// ------- CLASS


class Class {
  // тут создаем свойства
  constructor(prop1 = 0, prop2 = 1) {
    this.prop1 = prop1
    this.prop2 = prop2
  }
  // тут добавляем методы
  // method: function (params) {} // ES5
  // ES6
  method1() {
    console.log(this.prop1)
  }
  method2(value) {
    return (this.prop2 = value)
  }
}

// ------------ Examples
// ИСХОДНЫЙ КЛАСС
class User {
  constructor(login, password) {
    this.login = login
    this.password = password
  }
  showLogin() {
    console.log(this.login)
  }
}
// Экземпляр исходного класса
const user1 = new User('user1', 'qwe')
console.log(user1)

// НОВЫЙ (НАСЛЕДУЕМЫЙ) на базе исходного
class NewUser extends User {

  constructor(name, age, login, password) {
    // инициализизуем исходный класс
    super(login, password)
    this.name = name
    this.age = age
  }
  updateAge() {
    return (this.age += 1)
  }
}

// Экземпляр нового класса
const newUser1 = new NewUser('Viktoriia', 23, 'Vika', 'qwe')
console.log(newUser1)
console.log(newUser1.updateAge())
newUser1.showLogin()


// ------------ getter & setter

// class BaseProduct {
//   constructor(title, price) {
//     this._title = title
//     this._price = price
//   }
//   //   get & set
//   get price() {
//     return this._price
//   }
//   set price(value) {
//     return (this._price = value)
//   }

//   get title() {
//     return this._title
//   }
//   set title(value) {
//     return (this._title = value)
//   }
// }

// const baseProduct = new BaseProduct('Banana', 25)
// console.log(baseProduct)

// console.log('свойство _price:', baseProduct._price) // ПЛОХО
// console.log('by getter price:', baseProduct.price) // ХОРОШО

// baseProduct.price = 35 // это вызов СЕТТЕРА
// console.log('by getter price:', baseProduct.price)

// console.log('свойство _title:', baseProduct._title) // ПЛОХО
// console.log('by getter title:', baseProduct.title) // ХОРОШО

// baseProduct.title = 'Orange' // это вызов СЕТТЕРА
// console.log('by getter title:', baseProduct.title)

// --------- STATIC PROPS & METHODS

class Comment {
  static name = 'anonim'
  static showName() {
    console.log(this.name)
  }
  constructor(author, text) {
    this.author = author
    this.text = text
  }
}
const comment1 = new Comment('Pushkin', 'Lorem ipsum dolor sit amet')
console.log(comment1)
console.log(comment1.author)
console.log(comment1.text)

console.log(comment1.name) // undefined
// comment1.showName() // Error - is not a function
console.log(Comment.name)
Comment.showName()


// -------- PRACTICE

class BaseProduct {
    constructor(name, price, category) {
        this.name = name;
        this._price = price;
        this.category = category;
    }
    get price() {
        return this._price
    }
    set price(value) {
        return (this._price = value)
    }
}

class WeightProduct extends BaseProduct {
    constructor(weight, name, price, category) {
        super(name, price, category)
        this.weight = weight
    }

    getTotalCost() {
    console.log(this.weight * this.price)
    }
    
    decrWeight(value) {
        if (this.weight - value < 0) {
            console.log('товара недостаточно на складе');
        }
        
        return (this.weight -= value)
    }

    incWeight(value) {
        
    return (this.weight += value)
    }
}

// const weightProduct = new WeightProduct(3.5, 'Lemon', 30, 'fruits')
// console.log(weightProduct);
// weightProduct.getTotalCost()
// console.log('остаток:', weightProduct.decrWeight(2))

// console.log('после прихода товара:', weightProduct.incWeight(5))

// -----------

class CountProduct extends BaseProduct {
  constructor(count, name, price, category) {
    super(name, price, category)
    this.count = count
  }
  getTotalCost() {
    console.log(this.count * this.price)
  }
  decCount(value) {
    if (this.count - value < 0) {
       console.log(`нет столько шоколада для тебя!`);
    }
     return (this.count -= value)
  }
  incCount(value) {
    return (this.count += value)
  }
}

const countProduct = new CountProduct(100, 'snickers', 25, 'sweets')
console.log(countProduct)
countProduct.getTotalCost()

console.log('остаток:', countProduct.decCount(102))
console.log('после прихода товара:', countProduct.incCount(200))