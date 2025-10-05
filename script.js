class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
  }
}

class Employee extends Person {
  constructor(Person, jobTitle) {
    this.name=Person.name
	  this.age=Person.age
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`
    );
  }
}

window.Person = Person;
window.Employee = Employee;
