//1.print hello world using js
console.log("hello world");
// 2.declaring variables

var a= 3;
function declaration(){
    var b=6;
    let a = 7;
    console.log(a,b);
}
declaration();
console.log(a);
//3.eligible for vote or not
let age =
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote yet!");
}
//4.Given two numbers a and b
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 7)); 

//5. Function to calculate factorial
function factorial(n) {
  let result = 1;
  if (n < 0 || n % 1 !== 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
let num = prompt("Enter a number:");

num = parseInt(num);
if (isNaN(num)) {
  console.log("Invalid input. Please enter a whole number.");
} else {
  console.log("Factorial of " + num + " is: " + factorial(num));
}

