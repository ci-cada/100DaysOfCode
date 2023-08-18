function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
        if (c === 0) {
            return "Infinite solutions (0 = 0)";
        } else {
            return "No solutions (0 = c, where c is not 0)";
        }
    } else if (a === 0) {
        return `Vertical line: x = ${-c/b}`;
    } else if (b === 0) {
        return `Horizontal line: y = ${-c/a}`;
    } else {
        return `Slope-intercept form: y = ${-(a/b)}x + ${-c/b}`;
    }
}

// Example usage
const a = 2;
const b = 3;
const c = -6;
const result = solveLinEquation(a, b, c);
console.log(result);

const printArray = (...arr) =>{
    for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
        
    }
}
printArray([10,20,30,40])

const showDateTime = () => {
    const date = new Date()
    year = String(date.getFullYear()).padStart(2, '0')
    month = String(date.getMonth() + 1).padStart(2, '0')
    day = String(date.getDay()).padStart(2, '0')
    hours = String(date.getHours()).padStart(2, '0')
    minutes = String(date.getMinutes()).padStart(2, '0')
    console.log(`${month}/${day}/${year} ${hours}:${minutes}`)
}
showDateTime()


const swapValues = (a, b) => {
    let tmp = a 
    a = b 
    b = tmp 
    return `${a} , ${b}`
}

console.log(swapValues(10,20))

const reverseArray = (arr) =>{
    let empt = []
    for (let a = arr.length - 1 ; a >= 0 ; a--){
        empt.push(arr[a])
    }
    console.log(empt)
}
reverseArray([1, 2, 3, 4, 5])

const capitalizeArray = (arr) => {
        let empt = []
        for (let a = 0 ; a <= arr.length ; a--){
        empt.push(arr[a].toUpperCase())
    }
    console.log(empt)
}

const addItem = (add, coll) => {
    
    let arr = coll
    arr.push(add)
    
    return arr
}

console.log(addItem(67, [1,2,3,4,5,6]))

function removeItem (rem, arr){
    let newr = arr
    for (let i  = 0; i < arr.length ; i++){
        if(newr[i] = rem){
            newr.pop(newr[i])
        }
    }
    return newr
}

console.log(removeItem(4, [3,4,6,8,9,1]))


const sumOfNumbers = (num) => {
    let sum = 0 
    for (let i = num ; i >= 0 ; i--){
        sum += i
    }
    return sum
}

console.log(sumOfNumbers(7))

const sumOfOdd = (num) =>{
    let sum = 0
    for (let i = num ; i >= 0 ; i--){
        
        if ( i % 2 !== 0){
            sum += i
        }
    }
    return sum 
}

console.log(sumOfOdd(9))

const sumOfEven = (num) =>{
    let sum = 0
    for (let i = num ; i >= 0 ; i--){
        
        if ( i % 2 === 0){
            sum += i
        }
    }
    return sum 
}

console.log(sumOfEven(9))

const evensAndOdds = (num) =>{
    
    let sumOdd = 0 
    let sumEven = 0
    let count = 0 
    //while(count <= num){
    for (let i = 0 ; i <= num ; i++){
        if (i % 2 !== 0 ){
            sum0dd++
        }else {
            sumEven++
        }
    }
    /** 
    if (count % 2 !== 0 ){
        sumOdd+= 1
    }
    else{
        sumEven+= 1
    }
    count++
}*/
    console.log(`The number of odds are: ${sumOdd}`)
    console.log(`The number of evens are: ${sumEven}`)
}

evensAndOdds(100);