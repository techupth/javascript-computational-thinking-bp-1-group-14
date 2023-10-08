
let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];
let newNumber =  [];

function addNumber(numbers, amount) {
  // Start coding here
  for(let i = 0; i < numbers.length; i++){
    newNumber.push(amount + numbers[i])
  }
  return newNumber
}

let result = addNumber(numbers, 10);  // Output: [20, 30, 40]
console.log(result)
let result3 = addNumber(anotherNumbers, 2); // Output: [4, 6, 8]
console.log(result3)
