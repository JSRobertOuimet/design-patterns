const p = new Person('John Doe', 45, 'Male');
const pf = facade(p);

// Without facade: all properties are accessible
console.log(p);
p.getName();
p.getAge();
p.getSex();

console.log('- - - - - - - - - -');

// With facade: only selected properties are accessible
console.log(pf);
pf.age(p);
pf.sex(p);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;

  this.getName = () => {
    console.log(this.name);
  }

  this.getAge = () => {
    console.log(this.age);
  }

  this.getSex = () => {
    console.log(this.sex);
  }
}

function facade(o) {
  return {
    age: (o) => {
      return o.getAge();
    },
    sex: (o) => {
      return o.getSex();
    }
  };
}