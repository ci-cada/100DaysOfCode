const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

sorted = ages.sort()
console.log(sorted)

console.log("The smallest is,", sorted[0], "The largest is,", sorted[sorted.length - 1])


avg = Math.floor(sorted.length / 2)

console.log(sorted[avg])
let max = sorted[sorted.length - 1]
let min = sorted[0]
let check1 = min - avg
let check2 = max - avg
console.log( max - min)
console.log(check1)
console.log(check2)