/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.

      - All instances of Person should initialize with an empty `stomach` array.
      
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.

      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      
          - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.toString = function (){
   return `${this.name}, ${this.age}`;
  }
}

Person.prototype.eat = function (someFood){
  this.stomach.push(someFood);
  return this.stomach;
}

Person.prototype.poop = function(){
  this.stomach.length=0;
  return this.stomach;
} 

// const mary = new Person({name:"Mary", age: 50});
// console.log (mary); 
// console.log(mary.toString());
// console.log(mary.eat("smoothie", "pizza", "hamburger", "tacos"));
// console.log(mary.poop());
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.carInfo = function (){
return (`Model:${this.model} | MPG: ${this.milesPerGallon} | Tank Reading: ${this.tank} | Odometer Reading: ${this.odometer}`);
};

Car.prototype.fill = function (gallons){
  this.tank = this.tank + gallons;
  return `You now have ${this.tank} gallons of fuel. That is enough fuel to travel (${this.tank} * ${this.milesPerGallon})`;
};
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
class Baby extends Person {
    constructor (name1, age, favoriteToy) {
      super (name1, age, favoriteToy);
      this.favoriteToy = favoriteToy;
    }

    play(){
      return `Playing with ${this.favoriteToy}.`
    }
  }  

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Global - in global scope, "this" means the window/console
    2. Implicit Binding - the object to the left of the dot is "this"
    3. New Binding - in constructor functions, "this" means the object being created
    4. Explicit Binding - "this" is explicitly define when using "call" or "apply" methods"
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}