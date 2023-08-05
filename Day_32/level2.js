//1
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

//2
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same \-\- with charity you give love, so don't just give money but reach out your hand instead.\"")

//3
let vala = '10'
let valb = 10
console.log(`The value of '10' is equal to 10: ${vala == valb}`)

//3
let word = 'on'
let check1 = 'Python'
let check2 = 'Jargon'
console.log(`"on" is in Python: ${check1.includes(word)}`)
console.log(`"on" is in Jargon: ${check2.includes(word)}`)
//4
let num = parseFloat('9.8')
console.log(`parseFloat('9.8') is equal to 10: ${num == 10}`)
num = Math.ceil(num)
console.log(num)

//5
let sent = 'I hope this course is not full of jargon.'
console.log(`The string has the word jargon: ${sent.includes('jargon')}`)

//6
let rand = Math.random()
let numto100 = rand * 101
let floored = Math.floor(numto100)
console.log(`Random number ${floored}`)

//7
let min = 50 
let max = 50 
let random = Math.random() * (max - min) + min
let flrd = Math.floor(random)
console.log(`Random number between 50 and 100 ${flrd}`)

//8
let minn = 0
let maxx = 255
let rando = Math.random() * (maxx - minn) + minn
let flr = Math.floor(rando)
console.log(`Random number between 50 and 100 ${flr}`)

//9
let wor = 'JavaScript'
let acc = Math.random() * 10
console.log(`Random letter accessed by ${acc} is ${wor[acc]}`)

//10

console.log('1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\n\
3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125')

//11
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let sliced = sentence.substr(30,23)

