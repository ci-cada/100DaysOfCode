
//1
let challenge = '30 Days Of JavaScript'

//2
console.log(challenge)

//3
let len = challenge.length
console.log(`The length of the string is ${len}`)

//4
let upper = challenge.toUpperCase()
console.log(`The string to upper case ${challenge}`)

//5
let lower = challenge.toLocaleLowerCase()
console.log(`The string to lower case ${challenge}`)

//6
let first = challenge.substr(0,2)
console.log(first)

//7
let cut = challenge.substr(3, len-1)
console.log(cut)

//8
let contains = challenge.includes('Script')
console.log(contains)

//9
let myArray = challenge.split(' ')
console.log(myArray)

//10
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))

//11
let news = challenge.replace('Javascript', 'Python')
console.log(news)

//12
let in15 = challenge.charAt(15)
console.log('The char at ${in15}')

//13
let codeIn15 = challenge.charCodeAt(15)
console.log(`Code of char at 15 is ${codeIn15}`)

//14
let inOfa = challenge.indexOf('a')
console.log(`The first occurence of a is ${inOfa}`)

//15
let lastInOfa = challenge.lastIndexOf('a')
console.log(`The last occurence of a is at ${lastInOfa}`)

//16
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let inOfBecause = sentence.indexOf('because')
console.log(`The first apprearance of because is ${inOfBecause}`)

//17
let lastInOfBecause = sentence.lastIndexOf('because')
console.log(`The last appreance of because is ${lastInOfBecause}`)

//18
let stroll = sentence.search('because')
console.log(stroll)

//19 
let senToStream = ' 30 Days Of JavaScript '
let strimmed = senToStream.trim()

//20
console.log(`The string 30 Days of Javascript starts with 30: ${challenge.startsWith('30')}`)

//21
console.log(`The string 30 Days of JavaScript ends with JavaScript: ${challenge.endsWith('JavaScript')}`)

//22
console.log(challenge.match('a'))

//23
let stringA = '30 Days of'
let stringB = 'JavaScript'
console.log(stringA,stringB)

//24
let doub = 'JavasScript'
console.log(doub.repeat(2))
