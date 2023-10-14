function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

// Usage example:
const randomId = generateRandomId(10); // Generates a random ID with 10 characters
console.log(randomId); // Output will be something like "aB3xR8sGh2"
function generateRandomHexadecimal() {
  const decimalNumber = Math.floor(Math.random() * 16777215); // 16777215 is the decimal equivalent of FFFFFF in hexadecimal
  const hexadecimalNumber = decimalNumber.toString(16).toUpperCase(); // Convert to hexadecimal and uppercase

  return hexadecimalNumber;
}

// Usage example:
const randomHex = generateRandomHexadecimal();
console.log(randomHex); // Output will be a random hexadecimal number, e.g., "1A3F9D"
function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const green = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const blue = Math.floor(Math.random() * 256); // Random value between 0 and 255

  const rgbColor = `rgb(${red},${green},${blue})`;

  return rgbColor;
}

// Usage example:
const randomRGB = generateRandomRGBColor();
console.log(randomRGB); // Output will be a random RGB color, e.g., "rgb(128,255,0)"

const countryNameLengths = countries.map(country => country.length);

console.log(countryNameLengths);
//

const result = countries.map(country => {
  const countryCode = country.slice(0, 3).toUpperCase();
  return [country, countryCode, country.length];
});

console.log(result);
//

const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}
//


const countriesEndWithIa = countries.filter(country => country.toLowerCase().endsWith('ia'));

if (countriesEndWithIa.length > 0) {
  console.log(countriesEndWithIa);
} else {
  console.log('These are countries that do not end with "ia"');
}
//


let longestCountry = '';

for (const country of countries) {
  if (country.length > longestCountry.length) {
    longestCountry = country;
  }
}

console.log(`The country with the longest name is: ${longestCountry}`);
//

const fiveCharacterCountries = countries.filter(country => country.length === 5);

console.log(fiveCharacterCountries);
//
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

let longestWord = '';

for (const tech of webTechs) {
  if (tech.length > longestWord.length) {
    longestWord = tech;
  }
}

console.log(`The longest word in the webTechs array is: ${longestWord}`);
//

const arrayOfArrays = webTechs.map(tech => [tech, tech.length]);

console.log(arrayOfArrays);

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const acronym = mernStack.map(word => word[0]).join('');

console.log(acronym); // This will print 'MERN' to the console
//
const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of techStack) {
  console.log(tech);
}
//
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits); // Output: ['lemon', 'mango', 'orange', 'banana']
//
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const stack of fullStack) {
  for (const tech of stack) {
    console.log(tech.toUpperCase());
  }
}
///

