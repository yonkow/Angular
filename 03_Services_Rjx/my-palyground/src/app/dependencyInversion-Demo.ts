class Wallet {
    balance = 0;
    constructor(balance: number) {
        this.balance = balance
    }
}

class Car {
    model: string;
    color: string;

    constructor(model: string, color: string) {
        this.model = model;
        this.color = color
    }
}

// Bad defined class - in the constructor we instanted new Classes, this is not ok
class Person {
    wallet: Wallet;
    car: Car;

    constructor(balance: number, model: string, color: string) {
        this.wallet = new Wallet(balance);
        this.car = new Car(model, color);
    }
}

const pesho = new Person(2100, 'VW', 'gray');
const ivan = new Person(3200, 'Renault', 'blue');

console.log('Peshos wallet:', pesho.wallet.balance, pesho.car.model, pesho.car.color);
console.log('Ivans wallet:', ivan.wallet.balance, ivan.car.model, ivan.car.color);


// This is better class than above
class PersonOptimized {
    wallet: Wallet;
    car: Car;

    constructor(wallet: Wallet, car: Car) {
        this.wallet = wallet;
        this.car = car;
    }
}

const mariasWallet = new Wallet(5000);
const mariasCar = new Car('Mercedes', 'black');
const mariaPerson = new PersonOptimized(mariasWallet, mariasCar);

console.log('Maria wallet:', mariaPerson.wallet.balance, 'Marias car: ', mariaPerson.car.model, mariaPerson.car.color)