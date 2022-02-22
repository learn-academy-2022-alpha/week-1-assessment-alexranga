// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

// const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 is correct - the .length built-in method used returns the length property of the string "Alpha 2022"


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: the [] used references a single character from the string "Hello World!" by its index. The variable name greeting act as the place holder for "Hello World!". Index is the position of a single character from a string wherein 0 is the starting point. 0="H", 1="e", 2="l", 3="l", 4="o". 


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: the [] used references a single string by its index from group of strings called Array. Index in an array is the position of a single string wherein 0 is the starting point. 0="JavaScript", 1="Ruby", 2="Python", 3="C++"


// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer: error
// b) Verify and explain: .toUpperCase() is a function for string and not for an array. ["saturday, "sunday"] is an array that's why when console logging, error will appear stating .toUpperCase is not a function. The .toUpperCase() will upcase all letters in a string.


// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)
// console.log(typeof dataTypes.length)
// console.log(dataTypes.length)

// a) Your answer: number
// b) Verify and explain: dataTypes.length will result to 3. The "typeof" evaluates dataTypoes.length which is 3 as a number.

// console.log(dataTypes.length)
// console.log(typeof(3))