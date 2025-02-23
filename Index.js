console.log("Hello")
// Single line text
/**
 * Multi line text
 */

// seeing how "Blame" works
const cNumber = 3.5
let number1 = 2
let number2 = 0

console.log("Init Numbers: ", cNumber, number1, number2)
number2 = multiply(number1, cNumber)
console.log("Final Result:", number2)

number2 = divide(number2, number1)
console.log("Result: ", number2)


function multiply(num1, num2)
{
    console.log("Multiplying ", num1, "by ", num2)
    return num1 * num2
}
function divide(num1, num2)
{
    console.log("Dividing ", num1, "by ", num2)
    return num1 / num2
}