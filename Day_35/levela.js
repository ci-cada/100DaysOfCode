//Ecercise level 1 

//1
let age = prompt("Enter your age: ")

age > 18 
    ? console.log("You are old enough to drive")
    : console.log(`You are left with ${18 - age} years to drive`)

//2
const myAge = 25
let yourAge = prompt("Enter your age: ")

myAge > yourAge
    ? console.log(`I am ${myAge - yourAge} years older than you`)
    : console.log(`You are ${yourAge - myAge} years older than me`)
//3
let a = prompt("Enter the first number: ")
let b = prompt("Enter the second number: ")

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)


//if else
if (a > b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${b} is greater than ${a}`)
}

let check = prompt("Enter a number: ")
check % 2 == 0 ? console.log(`${check} is an even number`) : console.log(`${check} is an odd number`)