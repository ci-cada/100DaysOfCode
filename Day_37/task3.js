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
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Task 1: Create a copy of the countries array without mutation
const copiedCountries = [...countries];

// Task 2: Sort the copied countries array and store it in sortedCountries
const sortedCountries = copiedCountries.slice().sort();

// Task 3: Extract countries containing the word 'land' and print them as an array
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

// Task 4: Find the country with the highest number of characters
const longestCountry = countries.reduce((a, b) => (a.length > b.length ? a : b));
console.log(longestCountry);

// Task 5: Extract countries containing only four characters
const countriesWithFourChars = countries.filter(country => country.length === 4);
console.log(countriesWithFourChars);

// Task 6: Extract countries containing two or more words
const countriesWithMultipleWords = countries.filter(country => country.split(' ').length > 1);
console.log(countriesWithMultipleWords);

// Task 7: Reverse the countries array, capitalize each country, and store them as an array
const reversedAndCapitalizedCountries = countries
  .slice()
  .reverse()
  .map(country => country.toUpperCase());
console.log(reversedAndCapitalizedCountries);

// Bonus: Sort the webTechs and mernStack arrays
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);
