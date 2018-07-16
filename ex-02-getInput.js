//Warmup - JS Drills - Basic Functions & Data Types

//------------------------------------------------------------------
// TASK 1 : sumOrZero()
//  Write a function called sumOrZero that returns zero
//  if the sum of two numbers is negative
//
//------------------------------------------------------------------

console.log("====== sumOrZero ======")

console.assert(sumOrZero(0, 5) === 5)
console.assert(sumOrZero(10, 10) === 20)
console.assert(sumOrZero(30, 10) === 40)

console.assert(sumOrZero(-30, 10) === 0)
console.assert(sumOrZero(-10, -10) === 0)
console.assert(sumOrZero(-5, 0) === 0)

//Warmup - JS Drills - Basic Functions & Data Types

//------------------------------------------------------------------
// TASK 2 : columnsToPctWidth()
//  Write a function called columnsToPctWidth() that accepts the number of columns 
//  as input and returns a string with the width percentage 
//
//. HINT: To get the column percent, you will need to divide it as the denominator
//.        ( 100/x ) 
// 
//  Examine the functionality of `columnsToPctWidth` in the function below
//------------------------------------------------------------------


console.log("====== columnsToPctWidth ======")

console.assert(columnsToPctWidth(1) === "100%")
console.assert(columnsToPctWidth(2) === "50%")
console.assert(columnsToPctWidth(3) === "33%")
console.assert(columnsToPctWidth(4) === "25%")
console.assert(columnsToPctWidth(5) === "20%")
console.assert(columnsToPctWidth(6) === "16%")
console.assert(columnsToPctWidth(10) === "10%")


