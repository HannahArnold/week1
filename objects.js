// const person = {
//   name: "hannah",
//   age: 21,
//   greeting: "hello",
//   music: (favMusic = ["Secrets", "Girls Like Girls", "Fkin Perfect"]),
//   displayInfo() {
//     console.log(
//       `${this.greeting} my name is ${this.name} and im ${this.age} years old and my fav music is ${this.music}`
//     );
//   }
// };
// person.displayInfo();

// let weekendAlarm = "saturday";
// let weekdayAlarm = "monday";
// let day = "monday";

// const alarm = {
//   weekendAlarm: "no alarm",
//   weekdayAlarm: "alarm at 7 am"
// };
// if (day == "saturday" || "sunday") {
//   console.log(weekendAlarm);
// } else {
//   console.log(weekdayAlarm);
// }

// const pet = {
//   name: "horatio",
//   typeOfPet: "medium hair cat",
//   age: 22,
//   colour: "mixture of black, brown and white",
//   displayInfo() {
//     console.log(
//       `hi my name is ${this.name} im ${this.age} months old and i'm a ${this.typeOfPet} and my fur colour is ${this.colour}`
//     );
//   }
// };
// pet.displayInfo();

// let rosie = {
//   _name: "Rosie",
//   _hops: 0,

//   get name() {
//     return this._name;
//   },
//   get hops() {
//     return this._hops;
//   },
//   increaseHops() {
//     this._hops++;
//   }
// };

class Animal {
  constructor(name) {
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
  }
  get name() {
    return this._name;
  }
  get hunger() {
    return this._hunger;
  }
  get thirst() {
    return this._thirst;
  }
  eat() {
    this._hunger--;
  }
  drink() {
    this.thirst--;
  }
}

class Bunny extends Animal {
  constructor(name, lovesCarrot, favFood) {
    super(name);
    this._lovesCarrot = lovesCarrot;
    this._favFood = favFood;
  }
  get lovesCarrots() {
    return this._lovesCarrot;
  }
  get favFood() {
    return this._favFood;
  }
}
const rosie = new Bunny("Rosie", true, ["basil", "rockets", "broccoli"]);

// class bunny {
//   constructor(name) {
//     this._name = name;
//     this._hops = 0;
//   }
//   get name() {
//     return this._name;
//   }
//   get hops() {
//     return this._hops;
//   }
//   increaseHops() {
//     this._hops++;
//   }
// }
// const Rosie = new bunny("Rosie");
// const Lizzie = new bunny("Lizzie");
// Rosie.increaseHops();
// console.log(Rosie.name);
// console.log(Lizzie.hops);

// class Car {
//   constructor(regnum) {
//     this._regnum = regnum;
//     this._hours = 0;
//     this._charge = 0.0;
//   }
//   get regnum() {
//     return this._regnum;
//   }
//   get hours() {
//     return this._hours;
//   }
//   get charge() {
//     return this._charge;
//   }
//   increaseHours() {
//     this._hours++;
//     this._charge += 1.5;
//   }
// }
// const pay = (reg, hr) => {
//   const car = new Car(reg);
//   for (i = 0; i < hr; i++) {
//     car.increaseHours();
//   }
//   console.log(`You need to pay £${car.charge} for ${car.hours} hours.`);
// };
// pay("m7 car", 5);

//oop
