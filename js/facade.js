// ==================================================
// A facade provides a new interface to an object.
// ==================================================

// 1. Limits access to an object's properties
const p = new Person('John Doe', 45, 'Male');
const pf = personFacade(p);

p.getName();
p.getAge();
p.getSex();

console.log('------------------------------');

pf.age(p);
pf.sex(p);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;

  this.getName = () => {
    console.log('Name: ' + this.name);
  };

  this.getAge = () => {
    console.log('Age: ' + this.age);
  };

  this.getSex = () => {
    console.log('Sex: ' + this.sex);
  };
}

function personFacade(o) {
  return {
    age: (o) => {
      return o.getAge();
    },
    sex: (o) => {
      return o.getSex();
    }
  };
}

// 2. Wraps functions that are commonly called together
const e = new Employee('Steve Smith', 5677389210090);
const fe = employeeFacade(e);

console.log('------------------------------');

fe.getNameAndId();

function Employee(name, id) {
  this.name = name;
  this.id = id;

  this.getName = () => {
    console.log('Name: ' + this.name);
  };

  this.getId = () => {
    console.log('ID: ' + this.id);
  };
}

function employeeFacade(o) {
  return {
    getNameAndId: () => {
      o.getName();
      o.getId();
    }
  };
}