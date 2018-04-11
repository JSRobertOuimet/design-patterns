// The flyweight design pattern provides new properties
// to an object without adding to the constructor

const c1 = new Citizen('John Doe', 'male', 75);
const c2 = new Citizen('Ann Smith', 'female', 34);
const c3 = new Citizen('Robert Johnson', 'male', 45);

flyweight(c1, 50000);
flyweight(c2, 65000);
flyweight(c3, 40000);

console.log(c1, c2, c3); // Only c1 has a property 'pensionVal' with corresponding value.

function Citizen(name, sex, age) {
  this.name = name;
  this.sex = sex;
  this.age = age;
}

function flyweight(c, pensionVal) {
  if(c.age >= 65) {
    c.pensionVal = pensionVal;
  }
}