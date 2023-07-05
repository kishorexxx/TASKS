person details:

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  getDetails() {
    return {
      fullName: this.getFullName(),
      age: this.getAge(),
      gender: this.getGender()
    };
  }
}

var person1 = new Person("John", "Doe", 30, "Male");
var person2 = new Person("Jane", "Smith", 25, "Female");

console.log(person1.getFullName());
console.log("Age:", person2.getAge());
console.log("Gender:", person1.getGender());
