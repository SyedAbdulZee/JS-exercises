
let a=10;
let b=5;

// This is a function to add 2 numbers : by using call and this arguments in the function
function addition(a,b){
    return a+b;
}

var result= addition.call(this, a,b);
console.log("Addition of these two numbers is "+  result);

//This is a funciton to subtract 2 numbers 
function subtract(a,b){
    return a-b;
}

var result= subtract.call(this, a,b);
console.log("Subtraction of these two numbers is "+result);

// This is a function to multiply 2 numbers
function multiply(a,b){
    return a*b;
}

var result= multiply.call(this, a,b);
console.log("Product of these two numbers is "+result);

//This is a function to divide 2 numbers

function divide(a,b){
    return a/b;
}

var result= divide.call(this, a,b);
console.log("Division of these two numbers is "+result);