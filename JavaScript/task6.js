const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


console.log(shoppingCart)
isExists =shoppingCart.includes('meat')
isExists 
    ? console.log("It exists")
    : shoppingCart.unshift('Meat')

console.log(shoppingCart)
console.log(isExists)

shoppingCart.push('Sugar')

shoppingCart.pop('Honey')

index = shoppingCart.indexOf('Tea')
console.log(index)
shoppingCart[index] = 'Green Tea'
console.log(shoppingCart)


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries.includes('Ethiopia')
    ? console.log("ETHIOPIA")
    : countries.push('Ethiopia')

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.includes('Sass')
    ? console.log("Sass is a CSS preprocess")
    : webTechs.push('Sass')
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd)
console.log(fullStack)