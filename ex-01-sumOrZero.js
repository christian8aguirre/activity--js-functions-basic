//------------------------------------------------------------------
// TASK 1 : sumOrZero()
//
//  Write a function called sumOrZero that returns zero
//  if the sum of two numbers is negative
//
//------------------------------------------------------------------

function sumOrZero(num1, num2) {
    if(num1+num2<0){
        return 0;
    }else{
        return num1 + num2;
    }
}

console.log("====== sumOrZero ======")

console.assert(sumOrZero(0, 5) === 5)
console.assert(sumOrZero(10, 10) === 20)
console.assert(sumOrZero(30, 10) === 40)

console.assert(sumOrZero(-30, 10) === 0)
console.assert(sumOrZero(-10, -10) === 0)
console.assert(sumOrZero(-5, 0) === 0)


console.log("\n\n")
