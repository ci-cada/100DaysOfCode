let arr = []
let arr2 = [1,2,3,4,5,6,7,8]

console.log("The length of my array is ", arr2.length)
let first = arr2[0]
let middle = arr2
let last = arr2[arr2.length - 1]
console.log(first, middle, last)

let mixedDataTypes = [1, 'name', [20,30], 20.5, 'juma', 4]
let len = mixedDataTypes.length

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)
console.log("The number of companie is ", itCompanies.length)
myIts = itCompanies.length
myIts = Math.floor(myIts)
let itFirst = itCompanies[0]
let itMiddle = itCompanies[myIts / 2]
let itLast = itCompanies[itCompanies.length - 1]

for (let j = 0 ; j < myIts ; j++){
    console.log(itCompanies[j])
}

let checker = prompt("The company to check i.e \'Tesla\': ")
itCompanies.includes(checker)
    ? console.log(checker)
    : console.log("not found")
    
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const filteredCompanies = [];
for (let i = 0; i < companies.length; i++) {
  let count = 0;
  for (let j = 0; j < companies[i].length; j++) {
    if (companies[i][j] === 'o' || companies[i][j] === 'O') {
      count++;
    }
  }
  if (count <= 1) {
    filteredCompanies.push(companies[i]);
  }
}

console.log(filteredCompanies);

// 15. Sort the array using sort() method
companies.sort();
console.log("Sorted Array:", companies);

// 16. Reverse the array using reverse() method
companies.reverse();
console.log("Reversed Array:", companies);

// 17. Slice out the first 3 companies from the array
const firstThree = companies.slice(0, 3);
console.log("First 3 Companies:", firstThree);

// 18. Slice out the last 3 companies from the array
const lastThree = companies.slice(-3);
console.log("Last 3 Companies:", lastThree);

// 19. Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(companies.length / 2);
const middleCompanies = companies.slice(middleIndex, middleIndex + (companies.length % 2));
console.log("Middle Companies:", middleCompanies);

// 20. Remove the first IT company from the array
companies.shift();
console.log("Array after removing first company:", companies);

// 21. Remove the middle IT company or companies from the array
companies.splice(middleIndex, companies.length % 2);
console.log("Array after removing middle company:", companies);

// 22. Remove the last IT company from the array
companies.pop();
console.log("Array after removing last company:", companies);

// 23. Remove all IT companies
const companiesWithoutIT = companies.filter(company => !company.includes('IT'));
console.log("Array after removing all IT companies:", companiesWithoutIT);

