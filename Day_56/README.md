
# Day 56 of 100 Days of Code🤖

## Java Script Coding

Today in Java Script Programming I decided to cover a litle bit of JavaScript Scope, Objects and more.

**Scope**
This is where a variable is being defined can be either globally or locally. Anything declared without let, var or const is scoped at global level.

**Window Global Object**

This are objects declared without let or const. They are by default made available in the window object.

#### example
```js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible
```

#### Local Scope

A variable which has been declared locally can be accessible only in  a certain block code.
- Block Scope 
- Function Scope
```js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
```
A block in JavaScript is a code enclosed in between two curly brackets.

```js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3
```

The scope _let_ and _const_ are the same, difference being assignment. The value of _const_ can not be changed. Using _let and const_ is highly recommended since the code will be clean and avoiding hard to solve mistake.

- Const: Implications, an array, object and arrow function.
- let: Implication, any value that can change.


## Objects 🤸🏾‍♂️

Everything can be an object, and they have properties which have values so, an object is s key value pair where the key order is not reserved(No Order). To create an object literal we use the curly brackets

*Object Create*
```js
//empty 
const person = {}
```
```js
//with values 
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
  firstName: 'Jussie',
  lastName: 'King',
  age: 22,
  country: 'Kenya',
  city: 'Nairobi',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'MongoDB',
    'Python'
  ],
  isMarried: false
}
console.log(person)
```
*Getting data from the Object* 

Sometimes one requires not all the data but a specific data from an object and this posible in JavaScript through the use of the following;

- using . followed by the keyname if its one worded or,
- using square brackets and a quote.
```js
const person = {
  firstName: 'Jussie',
  lastName: 'King',
  age: 22,
  country: 'Kenya',
  city: 'Nairobi',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'MongoDB',
    'Python'
  ],
  isMarried: false,
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+254758039176'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
```

*Object Methods*

The above code has a method getFullName as one of its properties. This is a function inside the object and we call it an object method. _this_ keyowrd refers to the object itself. This can be used to access different properties of the object. Arrow functions are not allowed to be used as object methods since the word _this_ refers to the window inside an arrow function instead of the object itself.

*Setting a new value for an object*
```js
const person = {
  firstName: 'Ephesians',
  lastName: 'Jussie',
  age: 250,
  country: 'Kenyan',
  city: 'Nairobi',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'MongoDB',
    'Python',
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Unknown'
person.country = 'Djibouti'
person.title = 'student'
person.skills.push('C++')
person.skills.push('Java')
person.isMarried = false

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

*Object Methods*

The following are the different methods used to manipulate objects.

Object.assign: COpies data without modiftying the current data
```js
const person = {
  firstName: 'Ephesians',
  lastName: 'Jussie',
  age: 250,
  country: 'Kenyan',
  city: 'Nairobi',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'MongoDB',
    'Python',
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```
Object.keys: To obtain the keys or properties of an object as arrays. 

```js
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```
Object.values: To get the values of the object as an array
```js 
const values = Object.values(copyPerson)
console.log(values)
```
Object.entries: Gets the keys and values of the object as an array
```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

object.hasOwnProperty: Check specific key or property exists in an object
```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

The day ended with a little bit of Programming in Tkinter Where I created a few windows for introductory purposes.

The tasks to this day are in [this](../Day_57) file.

## Happy Coding✨✨

