class Person {
  name = 'Shahadot';

  constructor() {
    this.age = 29;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and my age is ${this.age}`);
  }
}
const person = new Person();
person.greet();
