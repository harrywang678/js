/* Dice */
let randomNum;
const number = document.querySelector(".dice h3");

document.querySelector(".dice button").onclick = function () {
  randomNum = Math.ceil(Math.random() * 6);
  number.textContent = randomNum;
};

/* If statment + .checked property*/

const subButton = document.getElementById("sub");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const discover = document.getElementById("discover");
const submit = document.getElementById("submit");
const subText = document.getElementById("subText");
const cardText = document.getElementById("cardText");

submit.onclick = function () {
  if (subButton.checked == true) {
    subText.textContent = "You are subscribed!";
  } else {
    subText.textContent = "You are not subscribed!";
  }

  if (mastercard.checked) {
    cardText.textContent = "You are using Mastercard.";
  } else if (visa.checked) {
    cardText.textContent = "You are using Visa.";
  } else if (discover.checked) {
    cardText.textContent = "You are using Discover.";
  } else {
    cardText.textContent = "Select a payment.";
  }
};

/* String Methods */

/* Number Guessing Game */

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min) + min);
const start = document.getElementById("start");
const myResult = document.getElementById("result");
const myAttempts = document.getElementById("attempts");
let countAttempts = 0;
let myNumber = document.getElementById("myNumber");

start.onclick = function () {
  if (myNumber.value < answer) {
    myResult.textContent = "Your number is too LOW!";
    countAttempts++;
  } else if (myNumber.value > answer) {
    myResult.textContent = "Your number is too HIGH!";
    countAttempts++;
  } else {
    myResult.textContent = "CORRECT!";
    countAttempts++;
    if (countAttempts == 1) {
      myAttempts.textContent = `It took you ONLY ${countAttempts} try!`;
      start.disabled = true;
    } else {
      myAttempts.textContent = `It took you ${countAttempts} tries!`;
      start.disabled = true;
    }
  }
};

/* Temperature Converter */

const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
const tempResult = document.getElementById("tempResult");
const myTemp = document.getElementById("temp");
let newTemp;

function convertTemp() {
  if (CtoF.checked) {
    newTemp = Number(myTemp.value);
    newTemp = (newTemp * 9) / 5 + 32;
    tempResult.textContent = newTemp.toFixed(1) + "°F";
  } else if (FtoC.checked) {
    newTemp = Number(myTemp.value);
    newTemp = (newTemp - 32) * (5 / 9);
    tempResult.textContent = newTemp.toFixed(1) + "°C";
  } else {
    tempResult.textContent = "Please select a unit!";
  }
}

/* Spread operator (...) */
/* allows the use of each element in a interable object, string array etc. */
let food = ["pizza", "hotdog", "hamburger"];
let fruits = ["apple", "orange", "pear"];
let all = [...food, ...fruits];

let username = "Bro Code";
let newString = [...username].join("-");
// console.log(newString);

/* Dice Roller */

function rollDice() {
  const numDices = document.getElementById("numDices").value;
  let randomNum;
  let images = [];
  const diceImages = document.getElementById("diceImages");
  for (let i = 0; i < numDices; i++) {
    randomNum = Math.ceil(Math.random() * 6);
    images.push(`<img src="img/dice-six-faces-${randomNum}.png">`);
  }

  diceImages.innerHTML = images.join("");
}

/* Password Generator */

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SPECIAL = "!@#$%^&*()_+}>?<";

const capitalLetters = document.getElementById("capitalLetters");
const lowerLetters = document.getElementById("lowerLetters");
const numbers = document.getElementById("numbers");
const specialChar = document.getElementById("specialChar");

const result = document.getElementById("passwordResult");

function passwordgenerator() {
  let randomIndex;
  let randomLength;

  let finalPassword = "";
  let finalPasswordlength = 20;

  let guarenteed = "";
  let letters = "";

  if (capitalLetters.checked) {
    letters += UPPERCASE;
    randomLength = UPPERCASE.length;
    randomIndex = Math.ceil(Math.random() * randomLength);
    guarenteed += UPPERCASE[randomIndex - 1];
  }
  if (lowerLetters.checked) {
    letters += LOWERCASE;
    randomLength = LOWERCASE.length;
    randomIndex = Math.ceil(Math.random() * randomLength);
    guarenteed += LOWERCASE[randomIndex - 1];
  }
  if (numbers.checked) {
    letters += NUMBERS;
    randomLength = NUMBERS.length;
    randomIndex = Math.ceil(Math.random() * randomLength);
    guarenteed += NUMBERS[randomIndex - 1];
  }
  if (specialChar.checked) {
    letters += SPECIAL;
    randomLength = SPECIAL.length;
    randomIndex = Math.ceil(Math.random() * randomLength);
    guarenteed += SPECIAL[randomIndex - 1];
  }
  if (letters.length === 0) {
    result.textContent = "Please check one of the boxes.";
    return 0;
  }

  finalPassword += guarenteed;

  let guarenteedLength = guarenteed.length;

  finalPasswordlength = finalPasswordlength - guarenteedLength;

  for (let i = 0; i < finalPasswordlength; i++) {
    randomLength = letters.length;
    randomIndex = Math.ceil(Math.random() * randomLength);
    finalPassword += letters[randomIndex - 1];
  }

  result.textContent = `Your password is: ${finalPassword}`;
}

/* CallBack */

function sum(callback, x, y) {
  let result = x + y;
  callback(result, 10);
}
function multiply(x, y) {
  let result = x * y;
  console.log(result);
}

// console.log(sum(multiply, 2, 10));

/* forEach() */

let num = [1, 2, 3, 4, 5];

function display(element) {
  console.log(element);
}

function double(element, index, array) {
  return (array[index] = element * 2);
}

num.forEach(double);
// num.forEach(display);

/* map() */

num = [5, 2, 3, 4, 5];

function triple(element, index, array) {
  return (array[index] = element * 3);
}

const tripleNums = num.map(triple);
// console.log(tripleNums);

date = ["2024-1-3", "2023-1-10", "2004-1-8"];

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// console.log(date.map(formatDates));

/* filter() */

num = [2, 3, 4, 5, 68];

function isEven(element) {
  if (element % 2 == 0) return element;
}

let evens = num.filter(isEven);
// console.log(evens);

/* reduce() */

function sum(a, y) {
  return a + y;
}

function getMin(a, y) {
  return Math.min(a, y);
}

num = [2, 3, 4, 5, 6, 7];

let lol = num.reduce(sum);
let minimum = num.reduce(getMin);
// console.log(lol);
// console.log(minimum);

/* Arrow Function and Function Expressions */

const Double = num.map((element) => {
  return element * 2;
});

// console.log(Double);

/* Objects */

const person1 = {
  firstName: "Harry",
  lastName: "Wang",
  age: 20,
  sayHello: () => {
    console.log(`Hello I am ${person1.firstName} ${person1.lastName}.`);
  },
};

const person2 = {
  firstName: "Angela",
  lastName: "Xu",
  age: 19,
  sayHello: () => {
    console.log(`Hello I am ${person2.firstName} ${person2.lastName}.`);
  },
};

// console.log(person1.firstName);
// person1.sayHello();
// person2.sayHello();

/* What is THIS */

// This doesnt work in an arrow function

const person3 = {
  firstName: "SpongeBob",
  lastName: "SquarePants",
  sayHello: function () {
    console.log(`${this.firstName} ${this.lastName} says Hi.`);
  },
};

// person3.sayHello();

/* Constructor */

function Car(model, year, name) {
  this.model = model;
  this.year = year;
  this.name = name;
  this.display = () => {
    console.log(
      `This is ${this.name}'s car. It is a ${this.model} and its from ${this.year}.`
    );
  };
}

const Harry = new Car("Tesla", 2024, "Harry");
// console.log(Harry.model);
// Harry.display();

/* Classes */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`This is a ${this.name}, it costs ${this.price} dollars.`);
  }
}

const product1 = new Product("Shirt", 19.99);
// product1.display();

/* STATIC keyword */
/* anything that is stabeled static will be under the class and not the object. */

class User {
  static usercount = 0; // Can only be accessed with User.usercount

  constructor(username, age) {
    this.username = username;
    this.age = age;
    User.usercount++;
  }
}

const user1 = new User("Harry");
const user2 = new User("Brandon");
const user3 = new User("Anthony");

// console.log(User.usercount);

/* Inheritance */

class Animal {
  static alive = true;

  sleep() {
    console.log(`The ${this.name} is sleeping.`);
  }

  eating() {
    console.log(`${this.name} is eating.`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
}

const rabbit = new Rabbit();
Rabbit.alive = false;

// rabbit.sleep();

// console.log(Rabbit.alive);

/* SUPER keyword */

class Pokemon {
  constructor(type, age) {
    this.type = type;
    this.age = age;
  }

  display() {
    if (this.age > 15) {
      console.log("This pokemon is old.");
    } else {
      console.log("This pokemon is young.");
    }
  }

  set type(newType) {
    this._type = newType;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Negative Age!");
    }
  }

  get type() {
    return this._type;
  }

  get age() {
    return this._age;
  }
}

class Pikachu extends Pokemon {
  constructor(type, age, speed) {
    super(type, age);
    this.speed = speed;
  }

  ground() {
    console.log(`This pikachu can run at ${this.speed} mph.`);
    super.display(this.age);
  }
}

class Hooh extends Pokemon {
  constructor(type, age, flySpeed) {
    super(type, age); // Can use super to get common constructors.
    this.flySpeed = flySpeed;
  }

  flying() {
    console.log(`This Ho-oh can run at ${this.flySpeed} mph.`);
    super.display(); // Can use super to get method of parent Class.
  }
}

const pikachu = new Pikachu("electric", 11, 12);
const hooh = new Hooh("flying", 23, 30);

// console.log(pikachu.type);
// pikachu.display();

/* Getters and Setters */

pikachu.type = "water";
hooh.age = 30;

// console.log(pikachu.type);
// console.log(hooh.age);

/* 
Destructoring = extract values from array and objects, then assign them to variables in a convenient way. 
[] = to perform array destructoring
{} = to perform object destructoring
 */

// EX:1 SWAPPING TWO NUMBERS

let a = 3;
let b = 4;

[a, b] = [b, a];

// console.log([a, b]);

// EX:2 SWAPPING TWO ELEMENTS IN AN ARRAY

const colors = ["red", "orange", "white", "black", "blue"];

[colors[3], colors[0]] = [colors[0], colors[3]];

// console.log(colors);

// EX:3 ASSIGN ARRAY ELEMENTS TO VARIABLES

[firstColor, secondColor, thirdColor, ...restColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(restColors);

// EX:4 EXTACT VALUES FROM OBJECTS

const Jett = {
  gender: "female",
  type: "duelist",
  entry: true,
};

const Raze = {
  gender: "female",
  type: "duelist",
};

const {gender, type, entry = false} = Raze;

// console.log(gender);
// console.log(type);
// console.log(entry);

// EX:5 DESTRUCTURE IN FUNCTION PARAMETERS

function displayCharacter({gender, type, entry}) {
  console.log(`This character is a ${gender} and is a ${type}.`);
}

// displayCharacter(Jett);

/* Nested Objects = Objects in other Objects.*/

class Person {
  constructor(name, age, ...classes) {
    this.name = name;
    this.age = age;
    this.classes = new Classes(...classes);
  }
}

class Classes {
  constructor(math, science, english) {
    this.math = math;
    this.science = science;
    this.english = english;
  }
}

const person9 = new Person(
  "Harry",
  20,
  "Calc",
  "Chemistry",
  "Creative Writing"
);

// console.log(person9.classes.english);

/* Array of Objects */

const meat = [
  {name: "chicken", protein: 200, cost: 5},
  {name: "beef", protein: 180, cost: 7},
  {name: "pork", protein: 160, cost: 4},
  {name: "lamb", protein: 170, cost: 8},
];

// console.log(meat[0].name);

// --------------------------------------forEach()-------------------------------

meat.forEach((meat) => {
  // return console.log(meat.name);
});

// --------------------------------------map()-----------------------------------

const meatKind = meat.map((meat) => {
  return meat.name;
});

const meatProtein = meat.map((meat) => {
  return meat.protein;
});

const meatCost = meat.map((meat) => {
  return meat.cost;
});

// console.log(meatKind);
// console.log(meatProtein);
// console.log(meatCost);

// --------------------------------------filter()--------------------------------

const highProtein = meat.filter((meat) => meat.protein >= 180);
const lowProtein = meat.filter((meat) => meat.protein < 180);
// console.log(highProtein);
// console.log(lowProtein);

// --------------------------------------reduce()--------------------------------

const mostProtein = meat.reduce((max, meat) =>
  meat.protein > max.protein ? meat : max
);
const leastProtein = meat.reduce((min, meat) =>
  meat.protein < min.protein ? meat : min
);

// console.log(mostProtein);
// console.log(leastProtein);

// --------------------------------------Sorting---------------------------------

// sorting numbers
sortNums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
sortNums.sort((a, b) => a - b);
// console.log(sortNums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//sorting Objects
meat.sort((a, b) => b.protein - a.protein);
// console.log(meat);

//sorting Strings
sortString = ["Spongebob", "Patrick", "Mr.Krabs", "Squidward"];
sortString.sort((a, b) => a.localeCompare(b));
// console.log(sortString);

meat.sort((a, b) => a.name.localeCompare(b.name)); // ['Mr.Krabs', 'Patrick', 'Spongebob', 'Squidward']
// console.log(meat);
/*
{name: 'beef', protein: 180, cost: 7}
1
: 
{name: 'chicken', protein: 200, cost: 5}
2
: 
{name: 'lamb', protein: 170, cost: 8}
3
: 
{name: 'pork', protein: 160, cost: 4} */

// --------------------------------------Shuffle an Array------------------------
