export {};

// EXAMPLE 1 - 'this' implicitly has type 'any' error in TypeScript - Solution

class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {
    this.name = name;
    this.salary = salary;
  }
}

interface Employee {
  getSalary(): number;
}

//                        👇️ add a parameter to type `this`
Employee.prototype.getSalary = function (this: Employee) {
  return this.salary;
};

const e1 = new Employee('Bobby Hadz', 100);

console.log(e1.getSalary());

// ---------------------------------------------------

// // EXAMPLE 2 - Convert the nested named function to an arrow function

// class Employee {
//   first: string;
//   last: string;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   getFullNameFunction() {
//     return () => {
//       console.log(this);
//       // ✅ this is now an instance of Employee
//       return this.first + ' ' + this.last;
//     };
//   }
// }

// const e1 = new Employee('Bobby', 'Hadz');

// const func = e1.getFullNameFunction();

// console.log(func()); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Using a closure to solve the error

// class Employee {
//   first: string;
//   last: string;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   getFullNameFunction() {
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     const self = this; // 👈️ closure of this
//     return function () {
//       // ✅ this is now an instance of Employee
//       return self.first + ' ' + self.last;
//     };
//   }
// }

// const e1 = new Employee('Bobby', 'Hadz');

// const func = e1.getFullNameFunction();

// console.log(func()); // 👉️ "Bobby Hadz"
