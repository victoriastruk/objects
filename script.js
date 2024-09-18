//1
const user = {
  firstName: "Victoriia",
  lastName: "Struk",
  email: "example@gmail.com",
  password: "qwerty",
  tel: "0988032008",
  address: {
    city: "Zhytomyr",
    street: "Shevchenka",
    house: 34,
    flat: 24,
  },
};

//2
function greeting(user) {
  return `Доброго дня, ${user.firstName} ${user.lastName}`;
}
console.log(greeting(user));

//3
function getInfoAboutPerson(object) {
  for (const property in object) {
    if (typeof object[property] === "object" && object[property] !== null) {
      console.log(`${property}: `);
      for (const innerProperty in object[property]) {
        console.log(`   ${innerProperty}; ${object[property][innerProperty]}`);
      }
    } else console.log(`${property}: ${object[property]}`);
  }
}
getInfoAboutPerson(user);

//4
const car = {
  color: "red",
  model: "Sedan",
  brand: "Toyota",
  engineVolume: 2.5,
  capacity: 5,
  speed: 80,
  maxSpeed: 200,
  accelerate(kmh) {
    this.speed += kmh;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    console.log(`Збільшення швидкості: ${this.speed} км/г.`);
  },
  deaccelerat(kmh) {
    this.speed -= kmh;
    if (this.speed < 0) {
      this.speed = 0;
    }
    console.log(`Зменшення швидкості: ${this.speed} км/г.`);
  },
  stop() {
    this.speed = 0;
    console.log(`При зупинці автомобіля: ${this.speed} км/г.`);
  },
};
car.accelerate(50);
car.deaccelerat(20);
car.stop();

//5
function Car(color, model, brand, engineVolume, capacity, speed, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.engineVolume = engineVolume;
  this.capacity = capacity;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
}

const car1 = new Car("red", "Sedan", "Toyota", 2.5, 5, 80, 200);
const car2 = new Car("blue", "SUV", "Ford", 3.0, 7, 100, 220);
const car3 = new Car("black", "Coupe", "BMW", 4.0, 4, 120, 240);

console.log(car1);
console.log(car2);
console.log(car3);
