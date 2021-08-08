// ------- Классы

class Car1 {
    static description = 'Класс описывающий автомобиль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    // #test = 'test'  //приватное свойство

    // mySuperPublicField = 555;   //на 22 строке то же самое (это синтаксис публичного свойства)

    constructor({ brand, model, price } = {}) {
        // console.log('Выполняется конструктор');
        // console.log(this);
        
        this.brand = brand
        this._model = model
        this.price = price

        // this.mySuperPublicField = 555; //на 12 строке то же самое
    }

    // changePrice(newPrice) {
    //     this.price = newPrice

    //     // console.log(this.#test);
    // }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    set model(newModel) {
        this._model = newModel
    }

    get model() {
        return this._model
    }

    // setModel(newModel) {
    //     this.model = newModel
    // }

    // getModel() {
    //     return this.model
    // }
}

// console.dir(Car1);

// console.log(Car1.description);

const carInstance = new Car1({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,

})
// console.log(Object.getPrototypeOf(carInstance));
// console.log(carInstance);
// Car1.logInfo(carInstance);
// carInstance.changePrice(2000);
// console.log(carInstance);
// console.log(carInstance.getModel());
// carInstance.setModel('Q4')
// console.log(carInstance.getModel());

console.log(carInstance.model);

carInstance.model = 'Q5'
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000
console.log(carInstance.price);

console.log(carInstance);



// ------- Наследование

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name
        this.xp = xp
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount 
    }
}

class Warrior extends Hero {
    constructor({weapon, ...restProps} = {}) {
        super(restProps)
        this.weapon = weapon
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaah',
});

console.log(ajax);

class Mage extends Hero {
    constructor({spells, ...restProps} = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то там кастует`);
    }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);

mango.attack()
mango.gainXp(1000)

const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
console.log(poly);

poly.cast()
poly.gainXp(200)





// console.log('Warrior.prototype', Warrior.prototype);
// console.log('Hero.prototype', Hero.prototype);
// console.log(
//     'mango.__proto__ === Warrior.prototype ',            //true
//     mango.__proto__ === Warrior.prototype,
// );
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);  //true
// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',   //true
//     Warrior.prototype.__proto__ === Hero.prototype,
// );
// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',   //true
//     Hero.prototype.__proto__ === Object.prototype,
// );