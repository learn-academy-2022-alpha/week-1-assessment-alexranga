// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// declare const as variable and call it temperatureInFahrenheit
// temperatureInFahrenheit will take any number 
// use a conditional statement that determines if the number is below boiling point, at boiling point, or above boiling point.
// the conditional statement is set that below boiling point is less than 212; boiling point is at exactly 212; above boiling point is anything greater than 212.
// else is set to run for a string input
// use test variables provided

 const temp1 = 42
 const temp2 = 350
 const temp3 = 212

 const temperatureInFahrenheit = (temperature) => {
    if (temperature === 212){
         return`${temperature} is at boiling point`
} else if (temperature > 212){
return `${temperature} is above boiling point`
} else if (temperature < 212) {
return `${temperature} is below boiling point`
} else {
return "enter a number"
}
}
console.log(temperatureInFahrenheit(212))




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// create a new variable declaration combinedNumbers and use a built in method .concat to combine myNumbers1 and myNumbers2.
// use built-in method .length to get the full length of the newly assigned variable combinedNumbers containing the combination of myNumbers1 and myNumbers2.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const combinedNumbers = myNumbers1.concat(myNumbers2)

// console.log(myNumbers1)
// console.log(myNumbers2)

// console.log(combinedNumbers.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

// to come up with the expected output of "1201 ohcE", change "Alpha 2022" to "Echo 2021" - typo error
// create a function to transform string into an array using .split to split the string "Echo 2021" into an array of letters
// call built-in array method .reverse to reverse the order of the items in the array
// join reveresed items in the array using .join to convert array into string

// const currentCohort = "Echo 2021"

// const transformToArray = currentCohort.split('')
// const currentCohortReversed = transformToArray.reverse()
// const joinReversed = currentCohortReversed.join('')
// console.log(joinReversed)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"


// use for loop to define where the count(index) starts; let i=0
// define how many iterations the loop will go through; i < myArray.length
// increment variable on each iteration
// if statement is true using mod % operator resulting in 0 then return string 'even'
// if result of mod % 2 is not 0, return 'odd'.

// const myArray = [13, 34, 5, 10, 27, 42]

// for (let i = 0; i < myArray.length; i++){
//     if(myArray[i] % 2 === 0){
//       console.log("even")
//     } else {
//       console.log("odd")
//     }
//   }
 

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// create a function called subtraction that will take in test variables number1 and number2
// use given test variables in the function
// use "if statement" to determine the larger number that will return the smaller number to be deducted from the larger number


// const subtraction = (number1, number2) => {
//     if (number1 < number2){
//       return (number2 - number1)
//     } else {
//       return (number1 - number2)
//     }
//   }
//   console.log(subtraction(number1,number2))

// Set two:
// const number3 = 27
// const number4 = 24

// create a function called subtraction that will take in test variables number3 and number4
// use given test variables in the function
// use "if statement" to determine the larger number that will return the smaller number to be deducted from the larger number

//   const subtraction = (number3, number4) => {
//     if (number3 < number4){
//       return (number4 - number3)
//     } else {
//       return (number3 - number4)
//     }
//   }
//   console.log(subtraction(number3,number4))