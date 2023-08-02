
//1
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let reg = /love/gi
let count = (sentence.match(reg) || []).length

console.log(`The number of love is: ${count}`)
//2
let newS = 'You cannot end a sentence with because because because is a conjunction'
reg = /because/gi
count = (newS.match(reg) || []).length

console.log(`The number of because is: ${count}`)

//3
const txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let news = txt.match(/\d+/g)
let a = parseInt(news[0])
let b = parseInt(news[1])
let c = parseInt(news[2])
console.log(a + b + c)
