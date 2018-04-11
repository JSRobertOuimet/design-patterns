// Classical inheritance (ES6 style)
class Animal {
  constructor(name, sex, legs, tail) {
    this.name = name;
    this.sex = sex;
    this.legs = legs;
    this.tail = tail === true ? tail = 'a' : tail = 'no';
  }

  profile() {
    return `This is ${this.sex} ${this.name}. It has ${this.legs} legs and ${this.tail} tail.`;
  }
}

const a1 = new Animal('cat', 'male', 4, true);
const pr1 = a1.profile();

const a2 = new Animal('spider', 'female', 8, false);
const pr2 = a2.profile();

console.log(pr1);
console.log(pr2);

console.log('------------------------------');

// With a constructor function (ES5 style)
function CarMaker(type, color, cost) {
  this.type = type;
  this.color = color;
  this.cost = (cost < 30000) ? cost = 'an economical' : cost = 'a costly';
}

CarMaker.prototype.profile = function() {
  return `This is ${this.cost} ${this.color} ${this.type}.`;
};

const c1 = new CarMaker('SUV', 'blue', 48575);
const c2 = new CarMaker('sedan', 'purple', 29000);

const pr3 = c1.profile();
const pr4 = c2.profile();

console.log(pr3);
console.log(pr4);

console.log('------------------------------');

// With a factory function
const proto = {
  pens: [],

  create(type, color, price) {
    let id = this.pens.length === 0 ? 1 : this.pens.length + 1;
    
    this.pens.push({ id, type, color, price });
    console.log(`A ${color} ${type} (id: ${id}), priced $${price}, was created.`);
  },

  get(id) {
    this.pens.forEach(pen => {
      if(id === pen.id) {
        console.log(pen);
      }
    });
  },

  del(id) {
    this.pens.forEach((pen, i) => {
      if(id === pen.id) {
        this.pens.splice(i, 1);
      }
    });
  }
};

function penFactory() {
  return Object.create(proto);
}

const pf = penFactory();

pf.create('pen', 'red', 2.75);
pf.create('highlighter', 'green', 0.99);
pf.create('pencil', 'blue', 1.25);

pf.del(1);

console.log(JSON.stringify(pf.pens, null, 2));

pf.get(3);