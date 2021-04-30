/*

A class is a blueprint for an object that defines its possible properties and actions.

We can use the blueprint to create new instances of the object

*/

class Student {

  // Will automatically run when the instance is created
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.tardies = 0
    this.scores = []
  }

  //Instance method that can be called on an specific instance
  hi(){
    console.log('Hi, my name is', this.firstName, this.lastName)
  }

  markLate(){
    this.tardies += 1
    if( this.tardies > 3) return "YOU ARE EXPELLED!!!"
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
  }

  addScore(score){
    return this.scores.push(score)
  }

  calculateAverage(){
    return this.scores.reduce( (total, val) => total += val, 0) / this.scores.length
  }

  // Class methods are called on the class itself. This is used to created utility functions that don't belong to a specific instance.

  static enrollStudents(...students){
    return "ENROLLING STUDENTS"
  }

}

let firstStudent = new Student("Danny", "Sasse")
let secondStudent = new Student("Danny", "Sasse")

firstStudent.hi()
console.log( firstStudent.markLate() )
console.log( firstStudent.markLate() )
console.log( firstStudent.markLate() )
console.log( firstStudent.addScore(97) )
console.log( firstStudent.addScore(87) )
console.log( firstStudent.calculateAverage() )
console.log( Student.enrollStudents() )

