//js statements

let a, b, c;
a = 5;
b = 2;
c = a + b;

document.getElementById("demo_1").innerHTML = c;

//js variables

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

document.getElementById("demo_2").innerHTML = total;

// js var, let, const keyword

//var can be redeclared.
var z = "John Doe";
var z = 0;

//let, const cannot be redeclared.
// let x = "John Doe";
// let x = 0;
// const PI = 3.141592653589793;
// const PI = 3.14; 


//var can be used before declared.
carName = "Saab";
var carName;

document.getElementById("demo_3").innerHTML = carName;

//let, const must be Declared before use.
// Name = "Saab";
// let Name;

// document.getElementById("demo_4").innerHTML = Name;

// PI = 3.14;
// const PI;

// document.getElementById("demo_4").innerHTML = PI;

//var does not have block scope.
var num1 = 20;

{
    var num1 = 3;
}
document.getElementById("demo_5").innerHTML = num1;


//let, const have Block Scope.
let num2 = 10;

{
    let num2 = 2;
}
document.getElementById("demo_6").innerHTML = num2;

const num3 = 30;

{
    const num3 = 5;
}
document.getElementById("demo_7").innerHTML = num3;


//js operators
// Arithmetic Operators
var op_1 = 100;
var op_total = (250 + 42) * op_1 / 30;
document.getElementById("demo_8").innerHTML = op_total;

// Assignment Operators
var op_2 = 10;
op_2 += 5;
document.getElementById("demo_9").innerHTML = op_2;

// Comparison Operators - ==, ===, !=, !==
// Logical Operators - &&, ||, !
// Bitwise Operators - &, |, ~, ^
// Type Operators - typeof, instanceof

//js conditional statements
const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.getElementById("demo_10").innerHTML = greeting;

//js switch
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo_11").innerHTML = "Today is " + day;

//switch default case
let text;
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.getElementById("demo_12").innerHTML = text;

//default case need not to be in the last (if default case is not in the last case, use break keyword at the end)
//common code blocks are possible in switch

//js for loop
let num = "";

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

document.getElementById("demo_13").innerHTML = num;





