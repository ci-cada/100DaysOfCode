const fullName = () => {
    console.log("Jussie")
}

fullName()

const myNames = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`)
}

myNames('Jussie', 'King')

const oddNumbers = (a, b) => {
    return `${a + b}`
}
console.log(oddNumbers(1,3))

const areaOfRectangle = (w, l) => {
    return `${l*w}`
}

console.log(areaOfRectangle(6,7))

function perimeterOfRectangle(l, w){
    return `${(l*w)*2}`
}
console.log(perimeterOfRectangle(20,8))

function volOfRectPrism(l, w, h){
    return `${l*w*h}`
}
console.log(volOfRectPrism(1,3,5))

const areaOfCircle = (r) => {
    const pi = Math.PI
    return `${pi*r*r}`
}

console.log(areaOfCircle(9))

const circCircle = (r) => {
    const pi = Math.PI
    return `${pi*(r*2)}`
}

console.log(circCircle(5))

function density(mass, vol){
    
    return `${mass/vol}`
}
console.log(density(10,40))

const speed = (time, distance) => {
    
    return `${distance/time}`
}

dis = prompt("Enter the distance: ")
tim = prompt("Enter the time: ")

console.log(speed(tim, dis))

const weight = (mass, option, gravity = 10) => {
    if (option.toLowerCase() == 'moon'){
        return `Weight in moon: ${mass*gravity}`
    }else {
        return `Weight in ${option}: ${mass * gravity}`
    }
}
console.log(weight(45,'Earth'))


const convertTemp = (temp, unit) => {
    if (unit.toLowerCase() === 'F'){
       let conv = (temp - 32) / (9/5)
       return `Temperature in Degrees: ${conv}`
    }else {
        let conv = (temp * 9/5) + 32
        return `Temperature in Fahrenheit: ${conv}`
    }
}

let tmp = prompt("Enter the temperature: ")
let un = prompt("Enter the unit of temp: ")

console.log(convertTemp(tmp,un))

const BMI = (weight, height) => {
    let check = weight / (height**2)
    if (check < 18.5 ){
        return `BMI is ${check} class Underweight`
    }else if (check >= 18.5 && check <= 24.9){
        return `BMI is ${check} class Normal Weight`
    }else if (check >= 25 && check <= 29.9){
        return `BMI is ${check} class Overweight`
    }else {
        return `BMI is ${check} class Obese`
    }
}

let wght = prompt("Enter the weight in KGs: ")
let hght = prompt("Enter the height: ")

console.log(BMI(wght, hght))

const checkSeason = (month) => {
    switch (month.toLowerCase()){
        case 'december':
        case 'january':
        case 'february':
            console.log("Winter")
            break
        case 'june':
        case 'july':
        case 'august':
            console.log("Summer")
            break
        case 'march':
        case 'april':
        case 'may':
            console.log("Spring")
            break
        case 'september':
        case 'october':
        case 'november':
            console.log("Autumn")
            break
        default: console.log("Erro Input")
    }
}

let month = prompt("Enter Month: ")

checkSeason(month)


const findMax = (a, b, c) =>{
    if (a > b && a > c){
        return a
    }else if (b > a && b > c){
    return b
    }else {
        return c
    }
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))